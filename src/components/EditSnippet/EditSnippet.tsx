"use client";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Button } from "../ui/button";
type Snippet = {
  id: number;
  title: string;
  code: string;
};
import SaveCode from "@/SaveCode/SaveCode";

export default function EditSnippet({ snippet }: { snippet: Snippet }) {
  const [code, setCode] = useState(snippet.code);

  const ChangeCode = (value: string | undefined) => {
    if (value === undefined) return;
    setCode(value);
  };

  const handleSave = async () => {
    const updatedSnippet = await SaveCode(snippet.id, code);
    console.log(updatedSnippet);
  };

  return (
    <div className="flex flex-col gap-4">
        <form action={handleSave} className="flex justify-between items-center gap-4">
            <h1 className="font-bold text-2xl">Edit Your Code Here :</h1>
            <Button type="submit">Save</Button>
        </form>
      <Editor
        height="400px"
        defaultLanguage="cpp"
        defaultValue={code}
        theme="vs-dark"
        onChange={ChangeCode}
      />
    </div>
  );
}
