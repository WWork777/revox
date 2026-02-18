import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Contacts from '@/components/home-page/contacts/Contacts'
import Cta from '@/components/home-page/cta/Cta'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
})

export const metadata = {
	icons: {
		icon: [{ rel: 'icon', type: 'image/svg+xml', url: '/favicon/favicon.svg' }],
		shortcut: '/favicon/favicon.ico',
		apple: '/favicon/apple-touch-icon.png',
	},
	manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={`${montserrat.variable}  antialiased`}>
				{' '}
				<Header />
				{children}
				<Contacts />
				<Cta />
				<Footer />
			</body>
		</html>
	)
}
