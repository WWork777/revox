import Image from 'next/image'
import Link from 'next/link'
import './Hero.scss'

export default function Hero() {
	return (
		<>
			<div className='hero'>
				<Image
					className='hero-fon'
					src={'/Home/Hero/hero2.png'}
					width={1920}
					height={1080}
					alt='Бухгалтерский учет для бизнеса'
				/>
				<div className='hero-content'>
					<div className='hero-dark-fon'>
						<Image
							className='triangle'
							src={'/Home/Hero/3.svg'}
							width={1000}
							height={1000}
							alt='Play'
						/>
						<div className='slogan'>
							<p>Твоя музыка начинается здесь</p>
							<span>
								Первая современная вокальная студия в&nbsp;Кемерово,
								где&nbsp;ты&nbsp;можешь учиться петь, писать песни, записывать
								треки и&nbsp;находить своё&nbsp;звучание
							</span>
						</div>
						<div className='hero-buttons'>
							<button type='button'>
								<Link href={'https://vk.com/voxkemerovo'}>Написать нам</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
