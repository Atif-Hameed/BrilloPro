// pages/api/submitForm.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const data = await req.json();

    let mailOptions;

    if (data.firstName && data.lastName) {
        // Handle the first form
        mailOptions = {
            from: `${data.email}`,
            to: 'atifhameed2002@gmail.com',
            subject: 'Brillipro - Cleaning Quote Request',
            html: `
                <p>First Name: ${data.firstName}</p>
                <p>Last Name: ${data.lastName}</p>
                <p>Email: ${data.email}</p>
                <p>Phone: ${data.phone}</p>
                <p>Service: ${data.service}</p>
                <p>Date: ${data.date}</p>
                <p>Message: ${data.message}</p>
            `,
        };
    } else {
        // Handle the second form
        mailOptions = {
            from: 'atifhameed2002@gmail.com',
            to: 'atifhameed2002@gmail.com',
            subject: 'Brillipro - Question',
            html: `
                <p>Name: ${data.name}</p>
                <p>Email: ${data.email}</p>
                <p>Message: ${data.message}</p>
            `,
        };
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'atifhameed2002@gmail.com', // Your Gmail email address
                pass: 'rusl ekbv lhrq hjmm', // Your Gmail password or an app-specific password if 2-factor authentication is enabled
            },
        });

        let isSent = false;

        await transporter
            .sendMail(mailOptions)
            .then((info) => {
                console.log("Email sent:", info.messageId);
                isSent = true;
            })
            .catch((error) => {
                console.log("Email not sent:", error);
            });

        if (isSent) {
            return NextResponse.json({ status: "sent" });
        } else {
            return NextResponse.json({ status: "error" });
        }
    } catch (error) {
        return NextResponse.json(
            {
                message: `Method  Not Allowed`,
                error,
                isSuccess: false,
            },
            { status: 405 }
        );
    }
}
