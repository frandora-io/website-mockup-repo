"use server";

import { Resend } from "resend";
import twilio from "twilio";

export type ReservationInput = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

export type ReservationResult =
  | { ok: true }
  | { ok: false; error: string };

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  return value;
}

export async function submitReservation(
  input: ReservationInput
): Promise<ReservationResult> {
  // Basic validation
  const required: (keyof ReservationInput)[] = [
    "name",
    "email",
    "phone",
    "date",
    "time",
    "guests",
  ];
  for (const field of required) {
    if (!input[field]?.trim()) {
      return { ok: false, error: `Missing required field: ${field}` };
    }
  }

  try {
    const resend = new Resend(requireEnv("RESEND_API_KEY"));
    const fromEmail = requireEnv("RESEND_FROM_EMAIL");
    const ownerEmail = requireEnv("OWNER_EMAIL");
    const ownerPhone = requireEnv("OWNER_PHONE");

    const twilioClient = twilio(
      requireEnv("TWILIO_ACCOUNT_SID"),
      requireEnv("TWILIO_AUTH_TOKEN")
    );
    const twilioFrom = requireEnv("TWILIO_FROM_NUMBER");

    const subject = `New reservation request — ${input.name} (${input.guests} guests)`;

    const ownerHtml = `
      <h2>New reservation request</h2>
      <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(input.phone)}</p>
      <p><strong>Party size:</strong> ${escapeHtml(input.guests)}</p>
      <p><strong>Date:</strong> ${escapeHtml(input.date)}</p>
      <p><strong>Time:</strong> ${escapeHtml(input.time)}</p>
      ${input.notes ? `<p><strong>Notes:</strong> ${escapeHtml(input.notes)}</p>` : ""}
    `;

    const guestHtml = `
      <h2>Thanks, ${escapeHtml(input.name)} — we received your request</h2>
      <p>
        This is a confirmation that your reservation request for
        <strong>${escapeHtml(input.guests)} guest${input.guests === "1" ? "" : "s"}</strong>
        on <strong>${escapeHtml(input.date)}</strong> at
        <strong>${escapeHtml(input.time)}</strong> has been received.
      </p>
      <p>
        We&rsquo;ll confirm your table via text message within a few hours.
        If you need to reach us sooner, reply to this email or call
        (718) 123-4567.
      </p>
      <p>— Il Nonno NYC</p>
    `;

    const smsBody =
      `New reservation: ${input.name} — ${input.guests} guests ` +
      `on ${input.date} at ${input.time}. ` +
      `Phone: ${input.phone}.` +
      (input.notes ? ` Notes: ${input.notes}` : "");

    // Fire all three in parallel
    const [ownerEmailResult, guestEmailResult] = await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: ownerEmail,
        replyTo: input.email,
        subject,
        html: ownerHtml,
      }),
      resend.emails.send({
        from: fromEmail,
        to: input.email,
        subject: "Your reservation request at Il Nonno NYC",
        html: guestHtml,
      }),
      twilioClient.messages.create({
        body: smsBody,
        from: twilioFrom,
        to: ownerPhone,
      }),
    ]);

    if (ownerEmailResult.error) {
      console.error("Owner email failed:", ownerEmailResult.error);
      return { ok: false, error: "Could not send notification. Please call us." };
    }
    if (guestEmailResult.error) {
      // Non-fatal: owner still got the notification
      console.error("Guest email failed:", guestEmailResult.error);
    }

    return { ok: true };
  } catch (err) {
    console.error("Reservation submission failed:", err);
    return {
      ok: false,
      error:
        "Something went wrong on our end. Please try again or call us directly.",
    };
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
