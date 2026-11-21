import { deliverBraceletLead, parseBraceletLead } from "@/lib/leads";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: "Заполните форму целиком." }, { status: 400 });
  }

  const parsed = parseBraceletLead(body);
  if ("error" in parsed) {
    return Response.json({ ok: false, message: parsed.error }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const result = await deliverBraceletLead(parsed.lead, ip);
  if (!result.ok) {
    return Response.json({ ok: false, message: result.message }, { status: result.status });
  }

  return Response.json({ ok: true, id: result.id });
}
