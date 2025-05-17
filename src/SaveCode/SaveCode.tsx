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
