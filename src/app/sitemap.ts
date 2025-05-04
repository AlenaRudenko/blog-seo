import { MetadataRoute } from "next";
import { BlogPost } from "./posts/page";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`https://dummyjson.com/posts`);
  const { posts } = await response.json();
  const postsEntries: MetadataRoute.Sitemap = posts.map(({ id }: BlogPost) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    ...postsEntries,
  ];
}
