import About from '@/components/home-page/about/About'
import Contacts from '@/components/home-page/contacts/Contacts'
import Cta from '@/components/home-page/cta/Cta'
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
			<Contacts />
			<Cta />
		</>
	)
}
