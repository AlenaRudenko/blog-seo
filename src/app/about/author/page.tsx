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
      <h1>Autor</h1>
      <Image src="/author.jpg" alt="author" width={300} height={300} />
    </div>
  );
}
