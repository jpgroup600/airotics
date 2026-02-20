// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ApiResponse = { success: boolean; data?: unknown; error?: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method !== "POST") return res.status(405).json({ success: false, error: "Method not allowed" });

  const webhookUrl = process.env.MAKE_WEBHOOK_URL || "https://hook.eu2.make.com/qhe1rm42utunh3htatvjfnahogxiw2km";

  try {
    const response = await axios.post(webhookUrl, req.body, {
      headers: { "Content-Type": "application/json" },
    });
    return res.status(200).json({ success: true, data: response.data });
  } catch {
    return res.status(500).json({ success: false, error: "Failed to send data to Make" });
  }
}
