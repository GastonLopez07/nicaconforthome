import { Resend } from "resend";

const resend = new Resend("re_FSz6PkRQ_FjDBdcxgKSLqgFs1oDayaz4c");

await resend.emails.send({
  from: "Nica Confort Home <onboarding@resend.dev>",
  to: [email],
  subject: "Tu hogar más confortable empieza acá 🏡",
  html: `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
      
      <h2 style="color:#111;">Bienvenido a Nica Confort Home 👋</h2>

      <p>Gracias por contactarte.</p>

      <p>
        Gracias por sumarte! Tenes un 20% OFF!!.
      </p>

      <hr style="margin:20px 0;">

      <p><strong>¿Necesitás ayuda ahora?</strong></p>

      <p>
        Podés escribirnos directamente a "nicaconforthome@gmail.com" y lo vemos sin vueltas.
      </p>

      <br/>

      <p style="font-size:14px; color:#777;">
        — Equipo de Nica Confort Home
      </p>

    </div>
  `,
});
