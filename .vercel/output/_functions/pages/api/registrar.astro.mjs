import { createRequire } from 'module';
export { renderers } from '../../renderers.mjs';

const require = createRequire(import.meta.url);
const admin = require("firebase-admin");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "eventoeme",
      privateKey: "-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD0p6G78xGwMw3+\\npULXHs5NLSPjzWIfjYvXzUhnPDhB9GwtRb+0c6AZodadS4XIUTRdUQ0i1TjnyOvG\\ntl4Gcz5TDMI+MJNXh9+4CH5ksOUXKG326odq1lsDsVfg1M7LfCmmKZRps2nn3u0x\\nolcwRyqnhi4fOEZF4hK/f49MZpkBD/gyzRufFwOBGEzQMu48NrgdmP0HZuCWmXT5\\nYd7Nc8ss3JG1wbeiyuOe5QrIglnD/lv0yzpdaWt8WlLj8SzIrJaYuE9PoOoq1WHb\\nzZbPWJz1asZ+3EoqREtvmsWWWECj/QH+WVzF5TgXK2CyxH4aT1SjGZx58yf6X/I6\\niejhqBv/AgMBAAECggEAGObJBPbQGZWQupb6jyfBCsTp7sFUV+7RyYTI9k0AUuI8\\ncn0zbnwIUyOQUxFBTCrLwCXERwPZ12mxadfdCR4IvW5ChQ7vqEyZnkMrDjedEbbZ\\nPnUPlHW97MnLroQqijaYjKOVyg5rXKDplpA1/KF5u3RiVGYnbOx+SQSEQtv8fcl9\\n4PjOvXw4oQ9ExVRp7QM+QrwE7gQh7u8vrEcDNk8Y/OdTkchGSAZbjHNxYZewzG81\\nObl/EBsKgJgWvk9HPaPElluSr5FFcuQFvWe4Y/5c17Eh0uL3atfO8b7s+ASLC2C9\\nN4m2LhfqtqfuaaN8EuNMGSTQHDmiJK/49T1Fc6oHRQKBgQD7ubtpPZ/rAg8DZntX\\nH/YDR2SbAb/F9948X/IzJv50FQG/8AIswwDHtpP974NRThRy1xcMwN/faC9O6BSC\\n9cxEgaN3zCTwYmJ7W3Hyq8QZ5EGpXIbharZwrdiVMSrpCZJFM/oE+IbNWdN9R030\\n0J/06yAY4LBnYV0TJ2F90/GVQwKBgQD4zymxrb4qz5hxZiQTK3t4wcbde4c2v53b\\nnGwts2E861zYSuMitHmDNYOemw0t83eE4B4vqSjeeJSUjrHyYV+I6IDufyFJvLm4\\ny8qUlnRqRdXVRU3RX7JSXA/gfpofP4vanmThVkdDZkIbMw0pWQ90HmillLQgNDnw\\nKgDOCGEUlQKBgQDzWS5wIv8CNc9FvkDmjSNLMC12HE7El0bknuyJvtymY9h5MREp\\nLKsIZtzS1ETiyNTD4GOMFLlYRGPXqEyL/gsm/xyEp3neWX5TOqgBrUO6tAs2KxjJ\\nulv8ulNyh0GwX2xkMkc1nvzScFAgAFrAnR7Fqrgw1KY0is9rwNpixg35+QKBgH1x\\nZSIR6PkIpWE3ECUiHSRq/mqYZzmxLlOU7+2yrOnb+HmMeCv9Ne5zQqLqpaBvSekS\\nXeXFsbdIsBCeSRVdBp+uKaMVMaFNp42GIeL8YEFcaE0Ynf1b9DoV9GNJMUdj8I0O\\nouoBZ/iRS+8OtCoOnv36fuRMruw1qKhvZOx7yQZpAoGBALAc/rcARI5QpqhS2MJl\\n7+hZvNM1e8JHw8TrWUBw7mSp9Uxi5zivXN3V1sGUHpbLvJzX/b6czeBZ4JP/wHnh\\nIRPCT+1VbE2SeWgkc0Ft6Td42R06P0EF4CPIRhCAAgvlSl8lme05HQ1WwWSgThPX\\nxqYSbnoQEjAy1thAQ5K/2m5O\\n-----END PRIVATE KEY-----\\n"?.replace(/\\n/g, "\n"),
      clientEmail: "firebase-adminsdk-fbsvc@eventoeme.iam.gserviceaccount.com"
    })
  });
}
const db = admin.firestore();

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    console.log("📥 Datos recibidos:", data);
    await db.collection("inscripcion").add(data);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("❌ Error en registrar:", err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
