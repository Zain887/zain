import './globals.css'
import { Metadata } from 'next'
import { Jura } from 'next/font/google'
import Sidebar from './components/Sidebar'
import Contentarea from './components/Contentarea'
import { ThemeProvider } from './context/ThemeContext'

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
      <body className={`${jura.className} w-full min-h-screen overflow-x-hidden`}  cz-shortcut-listen="true">
        <ThemeProvider>
          {/* Layout: Sidebar + Main Content */}
          <div className="flex flex-col md:flex-row min-h-screen transition-colors duration-300">
            <Sidebar />
            <Contentarea>{children}</Contentarea>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
