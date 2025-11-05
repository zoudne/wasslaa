import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#7B2553] text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-6">
          <Image src="/images/white-logo.png" alt="وصلة ميديا" width={150} height={60} />
          <p className="text-center text-white/80 text-lg max-w-md">مو كل تصوير يبيع.. تصويرنا يسوّق</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-white/60">
            <a href="tel:+96567634966" className="hover:text-white transition-colors">
              67634966
            </a>
            <span className="hidden md:inline">|</span>
            <a href="mailto:info@waaslaa.com" className="hover:text-white transition-colors break-all">
              info@waaslaa.com
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href="https://instagram.com/waaslaamedia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              @waaslaamedia
            </a>
          </div>
          {/* </CHANGE> */}
          <p className="text-sm text-white/40 mt-4 text-center">© 2025 وصلة ميديا. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
