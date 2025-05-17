import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

export default async function SnipperDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = await parseInt(params.id);
  // console.log(typeof id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id: id,
    },
  });

  if (!snippet) {
    return <h1>Snippet not found</h1>;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">{snippet.title}</h1>
        <div className="flex gap-2 items-center">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <Button variant={"destructive"}>Delete</Button>
        </div>
      </div>
      <pre className="bg-slate-200 rounded-md p-2 my-2">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
