import { Metadata } from "next";
import Image from "next/image";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Author  - Alena",
    description: "Ignatova",
  };
}
export default function Author() {
  return (
    <div>
      <meta name="author" content="Alena Ignatova" />
      <article className="flex gap-5">
        <Image src="/author.jpg" alt="author" width={300} height={300} />
        <div>
          <caption className="text-xl p-2">Author</caption>
          <h1>Alena Ignatova</h1>
          <p>NextJS developer</p>
        </div>
      </article>
    </div>
  );
}
