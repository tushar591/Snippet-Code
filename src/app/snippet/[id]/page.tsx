import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function Deletesnippet(formData: FormData) {
  "use server";
  const id = Number(formData.get("id"));
  await prisma.snippet.delete({ where: { id } });
  revalidatePath("/");
  redirect("/");
}

export default async function SnipperDetailsPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const snippet = await prisma.snippet.findUnique({
    where: { id },
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
          <form action={Deletesnippet}>
            <input type="hidden" name="id" value={snippet.id} />
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
