import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import React from "react";

export default function NewSnippet() {
  return (
    <div>
      <div>
        <Label className="p-2">Title</Label>
        <Input type="text" name="title" id="title"></Input>
      </div>
      <div>
        <Label className="p-2">Code</Label>
        <Textarea name="title" id="title"></Textarea>
      </div>
      <div  className="py-2">
        <Button type="submit">New</Button>
      </div>
      
    </div>
  );
}
