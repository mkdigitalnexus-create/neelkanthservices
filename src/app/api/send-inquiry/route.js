import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { type = "general", data = {} } = body;

    const {
      name = "Website Visitor",
      phone = "Not provided",
      email = "",
      company = "",
      pickupCity = "",
      deliveryCity = "",
      cargoType = "",
      vehicle = "",
      load = "",
      date = "",
      notes = "",
      subject = "",
      message = "",
    } = data;

    const gmailUser = (process.env.GMAIL_USER || "neelkanthtransportationservice@gmail.com").trim();
    const gmailPass = (process.env.GMAIL_APP_PASSWORD || "rlzm daal rkvn wgxk").replace(/\s+/g, "");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const isQuote = type === "quote" || pickupCity || deliveryCity;
    const inquiryTitle = isQuote
      ? `🚨 New Transport Quote Request: ${pickupCity || "NCR"} → ${deliveryCity || "Pan-India"}`
      : `📩 New Contact Message from ${name}`;

    const formattedTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const cleanPhone = phone.replace(/[^\d+]/g, "");
    const waPhone = cleanPhone.startsWith("+")
      ? cleanPhone.replace("+", "")
      : cleanPhone.startsWith("0")
      ? `91${cleanPhone.slice(1)}`
      : cleanPhone.length === 10
      ? `91${cleanPhone}`
      : cleanPhone;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
        <!-- Header -->
        <div style="background: #081B36; padding: 24px 28px; border-bottom: 4px solid #F5B51B;">
          <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">
            Neelkanth Transport Services
          </h1>
          <p style="margin: 6px 0 0 0; color: #F5B51B; font-size: 13px; font-weight: 600; text-transform: uppercase;">
            ${isQuote ? "New Freight Quote Enquiry" : "New Customer Message"}
          </p>
        </div>

        <!-- Quick Action Bar -->
        <div style="background: #f8fafc; padding: 14px 28px; border-bottom: 1px solid #e2e8f0; display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="tel:${cleanPhone}" style="display: inline-block; background: #075CC8; color: #ffffff; padding: 8px 16px; border-radius: 6px; font-size: 13px; font-weight: 600; text-decoration: none; margin-right: 10px;">
            📞 Call Customer (${phone})
          </a>
          <a href="https://wa.me/${waPhone}" style="display: inline-block; background: #25D366; color: #ffffff; padding: 8px 16px; border-radius: 6px; font-size: 13px; font-weight: 600; text-decoration: none;">
            💬 WhatsApp Customer
          </a>
        </div>

        <!-- Body Details -->
        <div style="padding: 24px 28px;">
          <h2 style="margin: 0 0 16px 0; font-size: 16px; color: #081B36; font-weight: 700;">
            Customer & Consignment Details
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; width: 35%; font-weight: 600;">Customer Name:</td>
                <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Contact Phone:</td>
                <td style="padding: 10px 0; color: #075CC8; font-weight: 700;">
                  <a href="tel:${cleanPhone}" style="color: #075CC8; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              ${
                email
                  ? `<tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email Address:</td>
                      <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #075CC8;">${email}</a></td>
                    </tr>`
                  : ""
              }
              ${
                company
                  ? `<tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Company / Firm:</td>
                      <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${company}</td>
                    </tr>`
                  : ""
              }
              ${
                pickupCity || deliveryCity
                  ? `<tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Freight Route:</td>
                      <td style="padding: 10px 0; color: #081B36; font-weight: 700; font-size: 15px;">
                        ${pickupCity || "N/A"} &rarr; ${deliveryCity || "N/A"}
                      </td>
                    </tr>`
                  : ""
              }
              ${
                cargoType
                  ? `<tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Cargo Type:</td>
                      <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${cargoType}</td>
                    </tr>`
                  : ""
              }
              ${
                vehicle
                  ? `<tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Required Vehicle:</td>
                      <td style="padding: 10px 0; color: #075CC8; font-weight: 700;">${vehicle}</td>
                    </tr>`
                  : ""
              }
              ${
                load
                  ? `<tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Load Details / Weight:</td>
                      <td style="padding: 10px 0; color: #0f172a;">${load}</td>
                    </tr>`
                  : ""
              }
              ${
                date
                  ? `<tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Preferred Date:</td>
                      <td style="padding: 10px 0; color: #0f172a;">${date}</td>
                    </tr>`
                  : ""
              }
              ${
                subject
                  ? `<tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Subject:</td>
                      <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${subject}</td>
                    </tr>`
                  : ""
              }
              ${
                message || notes
                  ? `<tr>
                      <td style="padding: 12px 0; color: #64748b; font-weight: 600; vertical-align: top;">Customer Message:</td>
                      <td style="padding: 12px 0; color: #1e293b; background: #f8fafc; border-radius: 6px; padding: 10px; font-size: 13px; line-height: 1.5;">
                        ${(message || notes).replace(/\n/g, "<br/>")}
                      </td>
                    </tr>`
                  : ""
              }
            </tbody>
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
            <p style="margin: 0;">Received on: <strong>${formattedTime}</strong> via Neelkanth Transport Website</p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f1f5f9; padding: 14px 28px; font-size: 11px; color: #64748b; text-align: center;">
          Neelkanth Transport Services • Dhankot, Gurugram (Delhi NCR, Haryana) • +91 76781 76144
        </div>
      </div>
    `;

    const textContent = `
New Inquiry from Neelkanth Transport Website
--------------------------------------------
Type: ${isQuote ? "Quote Request" : "Contact Message"}
Name: ${name}
Phone: ${phone}
Email: ${email || "N/A"}
Company: ${company || "N/A"}
Route: ${pickupCity ? `${pickupCity} -> ${deliveryCity}` : "N/A"}
Cargo: ${cargoType || "N/A"}
Vehicle: ${vehicle || "N/A"}
Load Details: ${load || "N/A"}
Preferred Date: ${date || "N/A"}
Subject: ${subject || "N/A"}
Message: ${message || notes || "N/A"}
Received: ${formattedTime}
    `.trim();

    await transporter.sendMail({
      from: `"Neelkanth Transport Website" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email ? email : gmailUser,
      subject: `${inquiryTitle} [${phone}]`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry successfully sent to email",
    });
  } catch (error) {
    console.error("Error sending inquiry email:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send email",
      },
      { status: 500 }
    );
  }
}
