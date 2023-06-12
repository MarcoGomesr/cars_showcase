import { Navbar, Footer } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car Hun',
  description: 'Discover the best cars in the world'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}