import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost, BlogPostsResponse } from "../page";

interface BlogPostPageProps {
  params: { postId: string };
}

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  return posts.map(({ id }) => id);
}

// Manually deduplicate requests if not using fetch
// const getPost = cache(async (postId: string) => {
//   const post = await prisma.post.findUnique(postId);
//   return post;
// })

export async function generateMetadata({
  params: { postId },
}: BlogPostPageProps): Promise<Metadata> {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const post: BlogPost = await response.json();

  return {
    title: post.title,
    description: post.body,
    // openGraph: {
    //   images: [
    //     {
    //       url: post.imageUrl
    //     }
    //   ]
    // }
  };
}

export default async function BlogPostPage({
  params: { postId },
}: BlogPostPageProps) {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const { title, body }: BlogPost = await response.json();

  if (response.status === 404) {
    notFound();
  }

  return (
    <article
      className="max-w-prose m-auto space-y-5"
      itemScope
      itemType="http://schema.org/Article"
    >
      <h1 className="text-3xl text-center font-bold">{title}</h1>
      <p className="text-lg">{body}</p>
    </article>
  );
}
