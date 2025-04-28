import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-auto flex-col gap-10">
      <section>
        <nav className="flex flex-auto items-center justify-center gap-10">
          <Link href={"/about/author"}>About author</Link>
          <Link href={"/about/privacy"}>Privacy policy</Link>
          <Link href={"/about/contacts"}>Contacts</Link>
        </nav>
      </section>
      <section className="max-w-prose m-auto space-y-5 ">{children}</section>
    </article>
  );
}
