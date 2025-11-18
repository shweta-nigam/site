import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv"

const app = express();
app.use(cors());
app.use(express.json());
app.use.dotenv()
const port = process.env.PORT || 5000

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shwetanigam2106@gmail.com",
        pass: "YOUR_APP_PASSWORD",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "shwetanigam2106@gmail.com",
      subject: `Portfolio Contact: ${name}`,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Email failed" });
  }
});

app.listen(port, () => console.log("Server running on port", port));
