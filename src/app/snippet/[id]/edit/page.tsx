import React from "react";
import EditSnippet from "@/components/EditSnippet/EditSnippet";
import { prisma } from "@/lib/prisma";

export default async function Edit(params: { params: { id: string } }) {
  const id = parseInt(params.params.id);
  //console.log(id);
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
      <EditSnippet snippet={snippet} />
    </div>
  );
}

export const generateStaticparams = async () => {
  const snippets = await prisma.snippet.findMany();
  return snippets.map((snippet) => ({
    id: snippet.id.toString(),
  }));
}
