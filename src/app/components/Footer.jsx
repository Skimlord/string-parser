import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-12 my-10 flex justify-center">
      <p>Developed by: <span className="font-bold text-green-500">Hiram Rubio</span></p>
      <Image
      className="ml-5 animate-spin"
        src="/reptile.png"
        alt="Reptile Dude"
        width={24}
        height={24}
        priority
      />
    </footer>
  );
}
