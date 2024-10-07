"use client";

import { Button } from "@/components/ui/button";

export default function HelloButton() {
  return (
    <Button className="mt-4" onClick={() => alert('Hello')}>
      Say Hello
    </Button>
  );
}
