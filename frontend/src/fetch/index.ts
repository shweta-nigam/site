interface MessageData {
  name: string
  email: string
  message: string
}
export const sendMessage = async ({ name, email, message }: MessageData) => {
  try {
    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
      throw new Error("Failed");
    }

    return { success: true };
  } catch (err) {
    return { success: false };
  }
};
