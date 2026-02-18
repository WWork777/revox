import Reviews from '@/components/home-page/reviews/Reviews'
import About from '@/components/learning-page/About/About'
import Certificates from '@/components/learning-page/Certificates/Certificates'
import Hero from '@/components/learning-page/Hero/Hero'
import Record from '@/components/learning-page/Record/Record'
import Services from '@/components/learning-page/Services/Services'
import Team from '@/components/learning-page/Team/Team'


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
