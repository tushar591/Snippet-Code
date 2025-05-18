"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";
import { NewSnippetForm } from "@/SaveCode/SaveCode";

export default function NewSnippet() {
  const [state, formAction] = useActionState(NewSnippetForm, { message: "" });

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <Label className="p-2">Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div>
        <Label className="p-2">Code</Label>
        <Textarea name="code" id="code" />
        {state.message && <div className="text-red-500 p-2">{state.message}</div>}
      </div>
      <div className="py-2">
        <Button type="submit">New</Button>
      </div>
    </form>
  );
}
