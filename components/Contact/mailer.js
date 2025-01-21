import emailjs from "@emailjs/browser";

const mail = async ({ name, email, message }) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      { name, email, message },
      {
        publicKey: process.env.NEXT_PUBLIC_USER_ID,
        limitRate: {
          throttle: 10000, // 10s
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed");
  }
};

export default mail;
