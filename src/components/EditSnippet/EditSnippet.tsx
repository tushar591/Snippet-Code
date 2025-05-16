"use client";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Button } from "../ui/button";
type Snippet = {
  id: number;
  title: string;
  code: string;
};

export default function EditSnippet({ snippet }: { snippet: Snippet }) {
  const [code, setCode] = useState(snippet.code);
  return (
    <div className="flex flex-col gap-4">
        <form className="flex justify-between items-center gap-4">
            <h1 className="font-bold text-2xl">Edit Your Code Here :</h1>
            <Button>Save</Button>
        </form>
      <Editor
        height="400px"
        defaultLanguage="cpp"
        defaultValue={code}
        theme="vs-dark"
      />
    </div>
  );
}
