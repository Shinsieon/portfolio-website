import { NextResponse } from "next/server";
import fs from "fs";
import { join } from "path";
import { getPostData } from "../../lib/post";
import prisma from "../../lib/prisma";
export async function GET(req, res) {
  const dir = join(process.cwd(), "app/blog/posts");
  const filenames = fs.readdirSync(dir);
  const sendObj = [];
  const feed = await prisma.visit.findMany();
  for (const file of filenames) {
    const found = feed.find((f) => f.id === file.split(".")[0]);
    sendObj.push({
      fileName: file,
      fileInfo: await getPostData(file.split(".")[0]),
      viewed: found ? found["viewed"] : 1,
    });
  }

  return NextResponse.json(sendObj);
}
