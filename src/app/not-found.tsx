import Link from "next/link";

export default function NotFound() {
  return (
    <section className="gutter flex min-h-[70vh] items-center">
      <div className="container-x">
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-5xl md:text-7xl">Signal lost.</h1>
        <p className="mt-6 max-w-md text-silver">This page doesn&apos;t exist. The rest of the system is still running.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-obsidian">
          Back to home
        </Link>
      </div>
    </section>
  );
}
