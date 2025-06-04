"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const Test1Config: Record<
  string,
  {
    name: string;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    config: any;
  }
> = {
  test1: {
    name: "Test 1",
    config: {
      name: "Test 1",
      config: {},
    },
  },
};

const Test1 = () => {
  const router = useRouter();
  return (
    <div>
      Test1
      <Button type="button" onClick={() => router.push("/email/1/editor")}>
        Go to Email 1
      </Button>
    </div>
  );
};

export default Test1;
