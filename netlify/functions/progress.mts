import { getStore } from "@netlify/blobs";

export default async (req: Request) => {
  const store = getStore("study-tracker");

  if (req.method === "GET") {
    const data = await store.get("progress", { type: "json" });
    return new Response(JSON.stringify(data ?? {}), {
      headers: { "Content-Type": "application/json" },
    });
  }

  if (req.method === "PUT") {
    const body = await req.json();
    await store.setJSON("progress", body);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = {
  path: "/api/progress",
};
