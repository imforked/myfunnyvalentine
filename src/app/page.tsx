"use client"

import { Card } from "./components/Card";

export default function Home() {
  const stickerClickHandler = () => {
    console.log("lmao");
  };

  return <Card onStickerClick={stickerClickHandler} />;
}
