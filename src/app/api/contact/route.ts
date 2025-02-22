import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create Gmail transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // This should be your 16-character app password
    },
});

export async function POST(request: Request) {
    try {
        // Debug: Log environment variables
        console.log('Email config:', {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS ? '[PRESENT]' : '[MISSING]'
        });

        // Get the form data
        const data = await request.json();
        
        // Validate the incoming data
        if (!data.name || !data.email || !data.message) {
            // Return a 400 Bad Request if data is missing
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

         // Setup email data
         const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER, // Send to yourself
            replyTo: data.email,        // Allow replying to the sender
            subject: `New Contact Form Message from ${data.name}`,
            text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
            `,
            html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<h3>Message:</h3>
<p>${data.message.replace(/\n/g, '<br>')}</p>
            `
        };

       
        console.log('Received contact form submission:', data);

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
