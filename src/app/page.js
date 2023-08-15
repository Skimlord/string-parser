"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Decryption from "./components/Decryption";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-between">
      <Header></Header>
      <Decryption></Decryption>
      <Footer></Footer>
    </main>
  );
}
