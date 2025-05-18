"use server";
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function SaveCode(id: number, code: string) {
    
    const updateSnippet = await prisma.snippet.update({
        where: {
            id: id
        },
        data: {
            code: code
        }
    })

    redirect(`/snippet/${id}`);

    return (
        <div>
        {updateSnippet.code}
    </div>
  )
}

export async function NewSnippetForm(prevState: { message: string }, formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  if (!title || !code) {
    return { message: "Title and code are required." };
  }

  await prisma.snippet.create({
    data: { title, code },
  });

  redirect("/");
 // return { message: "Snippet created successfully!" };
}
