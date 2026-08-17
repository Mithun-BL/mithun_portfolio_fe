import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    message: z.string().min(10),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validation = contactSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { success: false, errors: validation.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const { name, email, phone, message } = validation.data;
        const adminEmail = "mithunbl@icloud.com";

        // Option 1: Send via Nodemailer if SMTP credentials are provided
        if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT) || 587,
                secure: Number(process.env.SMTP_PORT) === 465,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            // 1. Send Email to Admin (mithunbl@icloud.com) with Reply-To set to visitor's email
            await transporter.sendMail({
                from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
                to: adminEmail,
                replyTo: email, // Hitting 'Reply' in Mail app replies directly to the visitor!
                subject: `New Portfolio Inquiry from ${name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
                        <h2 style="color: #7c3aed; margin-top: 0; margin-bottom: 16px;">New Contact Form Submission</h2>
                        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
                            <p style="margin: 6px 0; font-size: 14px;"><strong>Name:</strong> ${name}</p>
                            <p style="margin: 6px 0; font-size: 14px;"><strong>Visitor Email:</strong> <a href="mailto:${email}">${email}</a></p>
                            <p style="margin: 6px 0; font-size: 14px;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
                        </div>
                        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
                        <p style="margin-bottom: 8px; font-size: 14px; font-weight: bold; color: #334155;">User Message:</p>
                        <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; font-size: 14px; white-space: pre-wrap; color: #1e293b;">${message}</div>
                        <p style="font-size: 12px; color: #64748b; margin-top: 20px;">
                            Tip: Hitting <strong>Reply</strong> in your email client will respond directly to <strong>${email}</strong>.
                        </p>
                    </div>
                `,
            });

            // 2. Send Auto-Confirmation Email to Visitor's Email ID
            await transporter.sendMail({
                from: `"Mithun BL" <${process.env.SMTP_USER}>`,
                to: email,
                subject: `Thank you for contacting me, ${name}!`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; text-align: center;">
                        <h2 style="color: #7c3aed; margin-bottom: 12px;">Thanks "${name}"!</h2>
                        <p style="font-size: 16px; color: #4b5563; margin-top: 8px;">
                            Will get back to you in a hours.
                        </p>
                        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
                        <p style="font-size: 12px; color: #9ca3af;">
                            Mithun BL — Senior Frontend Developer | Bangalore, India
                        </p>
                    </div>
                `,
            });
        }
        // Option 2: Send via Web3Forms API if WEB3FORMS_ACCESS_KEY is provided
        else if (process.env.WEB3FORMS_ACCESS_KEY) {
            await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: process.env.WEB3FORMS_ACCESS_KEY,
                    name,
                    email,
                    phone: phone || "Not provided",
                    message,
                    subject: `New Portfolio Inquiry from ${name}`,
                    from_name: "Portfolio Contact Form",
                    replyto: email,
                }),
            });
        }
        // Fallback for Development Logging
        else {
            console.log(`====================================================`);
            console.log(`[Contact Form API] Submission received for Admin: ${adminEmail}`);
            console.log(`Visitor Name: ${name}`);
            console.log(`Visitor Email: ${email} (Reply-To target)`);
            console.log(`Visitor Phone: ${phone || "N/A"}`);
            console.log(`Visitor Message:\n${message}`);
            console.log(`====================================================`);
        }

        return NextResponse.json({
            success: true,
            message: `Thanks "${name}"! Will get back to you in a hours.`,
        });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
