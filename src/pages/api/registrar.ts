export const prerender = false;

import type { APIRoute } from "astro";
import { db } from "../../Firebase/firebaseAdmin";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json(); // 🔴 Aquí está tu otro error si no llega JSON
    console.log("📥 Datos recibidos:", data);

    await db.collection("inscripcion").add(data);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ Error en registrar:", err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
