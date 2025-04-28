import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts } = await response.json();
  return (
    <article className="max-w-prose  m-auto space-y-5">
      <table className="table-auto border-collapse border-spacing-2 border border-gray-400 dark:border-gray-500 ">
        <caption className="text-xl p-2">Article rating</caption>
        <thead>
          <tr>
            <th className="border border-gray-300 p-3">Title</th>
            <th className="border border-gray-300 p-3">Views</th>
            <th className="border border-gray-300 p-3">Likes</th>
            <th className="border border-gray-300 p-3">Dislikes</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td className="border border-gray-300 p-1 hover:font-bold">
                  <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </td>
                <td className="border text-center  border-gray-300">
                  {post.views}
                </td>
                <td className="border text-center  border-gray-300">
                  {post.reactions.likes}
                </td>
                <td className="border text-center  border-gray-300">
                  {post.reactions.dislikes}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
}
