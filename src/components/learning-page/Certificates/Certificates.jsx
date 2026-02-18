import Image from 'next/image'
import Link from 'next/link'
import './Certificates.scss'

export default function Certificates() {
	return (
		<>
			<div id='cert' className='home-block certificates'>
				<Image
					src={'/Home/Certificates/Сертификаты.png'}
					alt='Студия звукозаписи в кемерово'
					width={700}
					height={700}
				/>

				<div className='certificates-text'>
					<div>
						<h2>Сертификаты</h2>
						<h3>
							Подарите близким или побалуйте себя возможностью развиваться с
							пользой
						</h3>
					</div>
					<Image
						className='certificates-img-mob'
						src={'/Home/Certificates/Сертификаты.png'}
						alt='Студия звукозаписи в кемерово'
						width={700}
						height={700}
					/>
					<p>
						<span>Сертификат на&nbsp;4 занятия по&nbsp;вокалу</span> —{' '}
						{/* 5 000 ₽<br></br> */}Отличный старт для тех, кто хочет освоить
						технику и&nbsp;раскрыть голос.
					</p>
					<p>
						<span>Сертификат на&nbsp;запись песни</span> — 5 000 ₽<br></br>
						Профессиональная студийная сессия со&nbsp;звукорежиссёром
						и&nbsp;полным сопровождением.
					</p>
					<button className='cta-certificates' type='button'>
						<Link href='https://vk.com/voxkemerovo'>Связаться с нами</Link>
					</button>
				</div>
			</div>
		</>
	)
}
