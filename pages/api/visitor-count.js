import crypto from "crypto";

const TOTAL_KEY = "akb:portfolio:visits:total";
const UNIQUE_KEY = "akb:portfolio:visits:unique";
const VISITOR_COOKIE = "akb_visitor_id";
const ONE_YEAR = 60 * 60 * 24 * 365;

async function redisCommand(command) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    throw new Error("Visitor counter storage is not configured.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });

  if (!response.ok) {
    throw new Error(`Visitor counter storage failed with ${response.status}.`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data.result;
}

function getCookie(cookieHeader, name) {
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(";").map((cookie) => cookie.trim());
  const match = cookies.find((cookie) => cookie.startsWith(`${name}=`));

  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let visitorId = getCookie(req.headers.cookie, VISITOR_COOKIE);
    let isNewBrowser = false;

    if (!visitorId) {
      visitorId = crypto.randomUUID();
      isNewBrowser = true;

      res.setHeader(
        "Set-Cookie",
        `${VISITOR_COOKIE}=${encodeURIComponent(
          visitorId
        )}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${ONE_YEAR}; Secure`
      );
    }

    const visitorKey = `akb:portfolio:visitor:${visitorId}`;

    // SET ... NX lets Redis decide whether this browser has been counted before.
    const firstSeen = await redisCommand(["SET", visitorKey, "1", "NX"]);

    const total = await redisCommand(["INCR", TOTAL_KEY]);

    let unique;
    if (firstSeen === "OK") {
      unique = await redisCommand(["INCR", UNIQUE_KEY]);
    } else {
      unique = await redisCommand(["GET", UNIQUE_KEY]);
    }

    res.setHeader("Cache-Control", "no-store, max-age=0");

    return res.status(200).json({
      total: Number(total) || 0,
      unique: Number(unique) || (isNewBrowser ? 1 : 0),
    });
  } catch (error) {
    console.error("Visitor counter error:", error);

    return res.status(503).json({
      error: "Visitor counter is temporarily unavailable.",
    });
  }
}
