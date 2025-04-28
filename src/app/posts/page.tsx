import Link from "next/link";

export interface BlogPost {
  id: number;
  title: string;
  body: string;
  views: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
}

export interface BlogPostsResponse {
  posts: BlogPost[];
}

export default async function BlogPage() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  return (
    <div className="max-w-prose m-auto space-y-5">
      <h1 className="text-3xl text-center mb-3 font-medium">Posts</h1>
      {posts.map(({ id, title }) => (
        <article key={title}>
          <h2>
            <Link
              href={`/posts/${id}`}
              className="text-lg font-medium hover:font-bold"
            >
              {title}
            </Link>
          </h2>
        </article>
      ))}
    </div>
  );
}
