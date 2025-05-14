import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

import React from "react";

async function NewSnippetForm(formData: FormData) {
  "use server";
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  const snippet = await prisma.snippet.create({
    data: {
      title: title as string,
      code: code as string,
    },
  });
  console.log("created snippet", snippet);
  redirect("/");
}

export default function NewSnippet() {
  return (
    <form action={NewSnippetForm} className="flex flex-col gap-4">
      <div>
        <Label className="p-2">Title</Label>
        <Input type="text" name="title" id="title"></Input>
      </div>
      <div>
        <Label className="p-2">Code</Label>
        <Textarea name="code" id="code"></Textarea>
      </div>
      <div className="py-2">
        <Button type="submit">New</Button>
      </div>
    </form>
  );
}
