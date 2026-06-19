"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("./SmoothScroll"), { ssr: false });
const FloatingButtons = dynamic(() => import("./FloatingButtons"), {
  ssr: false,
});
const AIChat = dynamic(() => import("./AIChat"), { ssr: false });

export default function ClientShell() {
  return (
    <>
      <SmoothScroll />
      <FloatingButtons />
      <AIChat />
    </>
  );
}
