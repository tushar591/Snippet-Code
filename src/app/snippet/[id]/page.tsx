import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";

export default async function SnipperDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id);
   //console.log(id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id: id,
    },
  });

  if (!snippet) {
    return <h1>Snippet not found</h1>;
  }

 const Deletesnippet = async () => {
  "use server";
    const snippet = await prisma.snippet.findUnique({ where: { id } });
      if (!snippet) {
        return <div>Snippet not found</div>;
      }
    
     await prisma.snippet.delete({ where: { id } });
     redirect("/");
 }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">{snippet.title}</h1>
        <div className="flex gap-2 items-center">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={Deletesnippet}>
          <Button variant={"destructive"} type="submit">Delete</Button>
          </form>
        </div>
      </div>
      <pre className="bg-slate-200 rounded-md p-2 my-2">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
