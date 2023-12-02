import twilio from "twilio";

const accountSid = process.env.NEXT_PUBLIC_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullname, email, message, hairStyle } = req.body;

    //send whatsapp message
    try {
      await client.messages.create({
        from: "whatsapp:+14155238886",
        to: "whatsapp:+2348103955096",
        body: `New hairstyle selected: ${hairStyle}\nAdditional text: ${message} by ${fullname} from ${email}`,
      });
      res
        .status(200)
        .json({ success: true, message: "Form submitted successfully!" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Error submitting form." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed." });
  }
}
