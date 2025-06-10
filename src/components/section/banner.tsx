import Image from "next/image";

export default function BannerSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Gambar banner background */}
      <Image
        src="/banner.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Konten utama */}
    </section>
  );
}
