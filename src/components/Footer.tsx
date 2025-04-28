import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-5 text-center border-t text-sm space-y-1 text-gray-500">
      <div className="flex justify-center divide-x">
        <Link href="/about/privacy" className="px-3">
          Privacy Policy
        </Link>
        <Link href="/posts" className="px-3">
          Posts
        </Link>
        <Link href="/about/author" className="px-3">
          About
        </Link>
      </div>
      <div>
        &copy; {new Date().getFullYear()} SEO Optimized Blog. All rights
        reserved.
      </div>
    </footer>
  );
}
