import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-2xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippet Code</h1>
        <Link href="/snippet/new">
          <Button>New</Button>
        </Link>
      </div>
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="bg-slate-200 rounded-md p-2 flex justify-between items-center my-2"
        >
          <h1>{snippet.title}</h1>
          <Link href={`/snippet/${snippet.id}`}>
            <Button variant={"link"}>View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
