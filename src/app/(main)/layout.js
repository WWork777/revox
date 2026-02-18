import { Montserrat } from 'next/font/google'
import '../globals.css'

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
})

export const metadata = {
	title: 'VOX — Музыкальный лейбл в Кемерово',
	description:
		'Мы предоставляем возможность не только петь, но и быть услышанными!',
	icons: {
		icon: [{ rel: 'icon', type: 'image/svg+xml', url: '/favicon/favicon.svg' }],
		shortcut: '/favicon/favicon.ico',
		apple: '/favicon/apple-touch-icon.png',
	},
	manifest: '/favicon/site.webmanifest',
}

export default function MainLayout({ children }) {
	return <>{children}</>
}
