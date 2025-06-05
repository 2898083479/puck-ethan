"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";
import { format } from "date-fns";
import NotFound from "@/app/not-found";
import { NextSeo } from "next-seo";
import useSWR from "swr";

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

const ButtonStyle = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
}

const Test1 = () => {
  const [withSwitch, setWithSwitch] = useState(false);
  const [flag, setFlag] = useState(false);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/hello", fetcher);

  const switchTheme = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
    setWithSwitch(!withSwitch);
  }


  const getNow = () => {
    return format(new Date().toISOString(), "yyyy-MM-dd HH:mm:ss");
  }

  const router = useRouter();

  if (flag) {
    return <NotFound />
  }

  useEffect(() => {
    document.title = "Test1";
    const linkElement = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement;
    if (linkElement) {
      linkElement.href = "/favicon.ico";
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = "/favicon.ico";
      document.head.appendChild(newLink);
    }
  }, [])

  return (
    <>
      <NextSeo title={"hello"}/>
      <motion.div
        style={ButtonStyle}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      />
      <motion.button
        style={ButtonStyle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => {
          console.log("hover started")
        }}
      />
      <div className="flex flex-col gap-2">
        <p className="var(--color-blue-500)">Test1</p>
        <div className="flex gap-2">
          <Button type="button" onClick={() => router.push("/email/1/editor")}>
            Go to Email Editor
          </Button>
        </div>
        <Label htmlFor="switch-system-theme" className="flex flex-row gap-2 items-center">
          <div>Switch System Theme</div>
          <Switch id="switch-system-theme" checked={withSwitch} onCheckedChange={switchTheme} />
        </Label>
      </div>
      <p>
        While using the property <span className="inline-block bg-slate-400 border rounded-md px-2">display: inline-block</span> will wrap the element to prevent the
        text inside from extending beyond its parent.
      </p>
      <div className="overflow-visible">
        not cut
      </div>

      <img className="size-24 object-left" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90" alt="mountains" />
      <div className="flex flex-row gap-2 invisible">
        <div className="bg-slate-400 border rounded-md px-2 w-10">1</div>
        <div className="bg-slate-400 border rounded-md px-2 w-10 visible">2</div>
        <div className="bg-slate-400 border rounded-md px-2 w-10">3</div>
      </div>
    </>
  );
};

export default Test1;
