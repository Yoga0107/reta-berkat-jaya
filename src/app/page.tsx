import BannerSection from "@/components/section/banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#0a1966] text-white">

      {/* BANNER SECTION */}
      
      <BannerSection />

      {/* MAIN CONTENT */}
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-2xl mx-auto px-8 py-16 sm:px-20">
        <Image
          src="/logo.png"
          alt="Reta Berkat Jaya Logo"
          width={180}
          height={60}
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
          Reta Berkat Jaya
        </h1>
        <p className="text-white/80 text-base sm:text-lg text-center sm:text-left leading-relaxed">
          Kami adalah perusahaan ekspedisi cargo terpercaya yang melayani pengiriman barang ke seluruh Indonesia. Dengan komitmen terhadap kecepatan, keamanan, dan profesionalisme, Reta Berkat Jaya hadir sebagai solusi logistik terbaik untuk kebutuhan bisnis dan personal Anda.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-white text-[#0a1966] gap-2 hover:bg-gray-200 font-medium text-sm sm:text-base h-10 sm:h-12 px-5 sm:w-auto"
            href="#contact"
          >
            Hubungi Kami
          </a>
          <a
            className="rounded-full border border-solid border-white hover:bg-white hover:text-[#0a1966] transition-colors text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-5 sm:w-auto"
            href="#services"
          >
            Lihat Layanan
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-auto py-6 flex gap-6 flex-wrap items-center justify-center text-sm text-white/60">
        <span>© {new Date().getFullYear()} Reta Berkat Jaya</span>
        <a href="mailto:info@retaberkatjaya.com" className="hover:underline">
          info@retaberkatjaya.com
        </a>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          WhatsApp
        </a>
      </footer>
    </div>
  );
}
