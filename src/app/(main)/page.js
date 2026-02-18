export const metadata = {
	title: 'VOX — Музыкальный лейбл в Кемерово',
	description:
		'Мы предоставляем возможность не только петь, но и быть услышанными!',
}
import About from '@/components/home-page/about/About'
import Hero from '@/components/home-page/hero/Hero'
import Projects from '@/components/home-page/projects/Projects'
import Release from '@/components/home-page/release/Release'
import Reviews from '@/components/home-page/reviews/Reviews'
import Services from '@/components/home-page/services/Services'
import Team from '@/components/home-page/team/Team'

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Team />
			<Projects />
			<Release />
			<Reviews />
		</>
	)
}
