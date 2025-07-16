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
    <html lang="en">
      <body className={`${jura.className} w-[100vw] h-[100vh] overflow-hidden`} cz-shortcut-listen="true">
        <ThemeProvider>
          <div className="flex min-h-screen bg-background-dark text-text-dark dark:bg-background-dark dark:text-text-dark">
            <Sidebar />
            <Contentarea>
              {children}
            </Contentarea>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
