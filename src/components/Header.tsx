import Link from "next/link";

export default function Header() {
  return (
    <header className="shadow sticky top-0 p-3 flex gap-5  columns-auto flex-col bg-slate-800 text-gray-300">
      <Link href="/" className="flex items-center justify-center w-max m-auto">
        <h1 className="text-xl font-semibold">SEO OPTIMIZED BLOG</h1>
      </Link>
      <nav className="flex  items-center justify-center gap-3">
        <Link className="" href={"/posts"}>
          Posts
        </Link>
        <Link href={"/about"}>About</Link>
      </nav>
    </header>
  );
}
