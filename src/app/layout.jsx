import { Inter } from 'next/font/google'
import Theme from '../styles/theme'
import StyledComponentsRegistry from '../lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ilham Ferdiansyah Portfolio',
  description: 'Personal portfolio website of Ilham Ferdiansyah',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id-ID">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Theme>
            {children}
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
} 