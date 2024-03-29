import PostSection from "../../components/PostSection";
import { getPostData } from "../../lib/post";
import prisma from "../../lib/prisma";

export default async function Page({ params }) {
  const { title, date, content, secret } = await getPostData(params.slug);
  const feed = await prisma.visit.findUnique({
    where: { id: String(params?.slug) },
  });
  if (!feed) {
    await prisma.visit.create({
      data: {
        id: params.slug,
        viewed: 1,
      },
    });
  } else
    await prisma.visit.update({
      where: {
        id: params.slug,
      },
      data: {
        viewed: feed.viewed + 1,
      },
    });
  return (
    <div className="max-w-screen-xl flex items-center justify-end mx-auto p-4">
      <PostSection
        title={title}
        date={date}
        content={content}
        viewed={feed?.viewed || 1}
        secret={secret}
      />
    </div>
  );
}
