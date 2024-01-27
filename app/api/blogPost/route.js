import { NextResponse } from "next/server";
import fs from "fs";
import { join } from "path";
import { getPostData } from "@/app/blog/[slug]/page";
export async function GET(req, res) {
  const dir = join(process.cwd(), "app/blog/posts");
  const filenames = fs.readdirSync(dir);
  const sendObj = [];
  for (const file of filenames) {
    sendObj.push({
      fileName: file,
      fileInfo: await getPostData(file.split(".")[0]),
    });
  }

  return NextResponse.json(sendObj);
}
