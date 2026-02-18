//import Image from "next/image";

import Reviews from '@/components/home-page/Reviews/Reviews'
import About from '@/components/learning-page/About/About'
import Certificates from '@/components/learning-page/Certificates/Certificates'
import Hero from '@/components/learning-page/Hero/Hero'
import Record from '@/components/learning-page/Record/Record'
import Services from '@/components/learning-page/Services/Services'
import Team from '@/components/learning-page/Team/Team'

export const metadata = {
	title: 'Студия звукозаписи и вокала VOX в Кемерово',
	description:
		'Вокал, запись песен, сведение, написание музыки — всё в VOX, топ-студии Кемерова. Раскрой свой голос с командой профи!',
	alternates: {
		canonical: 'https://vox42.ru/',
	},
	keywords: [
		'вокальная студия Кемерово',
		'зал записи песен',
		'создание песен',
		'сведение',
		'мастеринг',
		'постановка голоса',
		'экстрим вокал',
		'скрим',
		'гроул',
		'харш',
		'сонграйтинг',
		'занятия по вокалу',
		'сертификат на занятия',
		'сертификат на запись',
		'школа вокала',
		'голос',
		'пение',
		'песня на заказ',
	],
	openGraph: {
		title: 'Студия звукозаписи и вокала VOX в Кемерово',
		description:
			'Вокал, запись песен, сведение, написание музыки — всё в VOX, топ-студии Кемерова. Раскрой свой голос с командой профи!',
		url: `https://vox42.ru/`,
		images: [
			{
				url: `/favicon/favicon-96x96.png`,
				alt: 'Студия звукозаписи и вокала VOX в Кемерово',
			},
		],
	},
}

export default function LearningPage() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Record />
			<Team />
			<Reviews />
			<Certificates />
		</>
	)
}
