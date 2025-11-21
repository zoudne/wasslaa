import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "وصلة ميديا | Waasslaa Media",
  description: "وكالة تسويق بصري إبداعية في الكويت - تصوير منتجات احترافي",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17747698465"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17747698465');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
