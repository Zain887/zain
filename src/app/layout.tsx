import './globals.css'
import { Metadata } from 'next'
import { Jura } from 'next/font/google'

const jura = Jura({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Muhammad Zain – Full Stack Developer',
  description: 'Creative Front-End Developer & UI/UX Engineer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jura.className} w-full min-h-screen overflow-x-hidden`} cz-shortcut-listen="true">
        <div className="min-h-screen bg-background font-sans antialiased max-w-4xl mx-auto py-12 sm:py-24 px-6">
          {children}
        </div>
      </body>
    </html>
  )
}
