import nodemailer from 'nodemailer';
import styles from "../api/mail.module.css";
import img1 from "pages/api/finalNavbarLogo.png";

export default async function handler(req, res) {
  console.log('API route hit:', req.method, req.url);
  console.log('Request body:', req.body);

  if (req.method === 'POST') {
    try {
      const { fullName, email, Phone, Whatsapp, Address, Pincode, City, District, State, Dealer_Name, Invoice_File} = req.body;

      // const attachments = [
      //   { filename: 'Invoice_File.pdf', content: Buffer.from(Invoice_File, 'base64') },
      //   { filename: 'Invoice_File1.pdf', content: Buffer.from(Invoice_File1, 'base64') },
      //   { filename: 'Invoice_File2.pdf', content: Buffer.from(Invoice_File2, 'base64') },
      //   { filename: 'Invoice_File3.pdf', content: Buffer.from(Invoice_File3, 'base64') },
      // ];

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, // Change to 587 if using TLS
        secure: true, // Change to false if using TLS
        auth: {
          user: 'pvotweb3@gmail.com',
          pass: 'gqmkacgjfuabcrsj',
        },
      });
      const dynamicFields = Object.keys(req.body)
        .filter(
          (key) =>
            key.startsWith('Category_') ||
            key.startsWith('Product_Name_') ||
            key.startsWith('sheets_') ||
            key.startsWith('No_of_thickness_')
        )
        .map((key) => {
          const index = key.split('_')[1];
          const type = key.split('_')[0];
          const value = req.body[key];
          return `${type} ${index}: ${typeof value === 'object' && value !== null ? value.name : value}`;
        })
        .join('\n');


      const mailOptions = {
        from: 'pvotweb3@gmail.com',
        to: 'pvotweb3@gmail.com',
        subject: 'New Form Submission of Claim Warranty By user',
        text: `
          Full Name: ${fullName}
          Email: ${email}
          Phone: ${Phone}
          Whatsapp: ${Whatsapp}
          Address: ${Address}
          Pincode: ${Pincode}
          City: ${City}
          District: ${District}
          State: ${State}
          Dealer_Name: ${Dealer_Name}
          ${dynamicFields}
        `,
        attachments: [
          {
            filename: 'Invoice_File.pdf', 
            content: Invoice_File, 
            encoding: 'base64',
          },
        ],
        // attachments,
      };

      console.log(mailOptions);

      await transporter.sendMail(mailOptions);

      const autoReplyOptions = {
        from: 'pvotweb3@gmail.com',
        to: email,
        subject: 'Claim your Warranty Certificate - From Royale Touche Performance Ply',
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
            <h2>Hello ${fullName},</h2>
            <p>We received your application to claim the warranty certificate for Royale Touche Performance Ply. Please share the invoices for the purchased product to proceed further and claim your warranty certificate.</p>
            <p>Thanks & Regards,</p>
            <p style="font-weight: bold;">Team Royale Touche</p>
          </div>
        `,
      };

      await transporter.sendMail(autoReplyOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
}
