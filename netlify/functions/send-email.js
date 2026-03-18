const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async function (event) {
  try {
    const { email } = JSON.parse(event.body);

    // 📩 Mail para vos
    await resend.emails.send({
      from: "Nica Confort Home <onboarding@resend.dev>",
      to: ["TUEMAIL@gmail.com"],
      subject: "Nuevo cliente potencial 🚀",
      html: `
        <h2>Nuevo lead</h2>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    // 📩 Mail para el usuario
    await resend.emails.send({
      from: "Nica Confort Home <onboarding@resend.dev>",
      to: [email],
      subject: "Tu hogar más confortable empieza acá 🏡",
      html: `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
      
      <h2 style="color:#111;">Bienvenido a Nica Confort Home 👋</h2>

      <p>Gracias por contactarte.</p>

      <p>
        Ya tenes el 20% OFF!!
      </p>

      <hr style="margin:20px 0;">

      <p><strong>¿Necesitás ayuda ahora?</strong></p>

      <p>
        Podés escribirnos directamente a nicaconforthome@gmail.com y lo vemos sin vueltas.
      </p>

      <br/>

      <p style="font-size:14px; color:#777;">
        — Equipo de Nica Confort Home
      </p>

    </div>
  `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error("ERROR:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
