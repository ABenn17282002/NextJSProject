// supabaseとAPIRequest,responseの読み込み
import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // return NextResponse.json(data);
  return res.status(200).json(data);
}

export const config = {
  matcher: ["/api"],
};