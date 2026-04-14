import Image from 'next/image'
import Link from 'next/link'

export default function Team() {
	const team = [
		{
			id: 1,
			img: '/images/team/img_1.jpg',
			name: 'Данил Мамзер',
			specialization: 'Педагог по вокалу, звукорежиссёр',
			text: 'Помогает ученикам раскрыть голос и&nbsp;записать треки, звучащие как&nbsp;на&nbsp;радио. Более 10&nbsp;лет опыта работы со&nbsp;звуком.',
			vk: 'https://vk.com/danyaveinz',
			max: 'https://max.ru/u/f9LHodD0cOJmPBBdUdy9hLWIqth6GRdMMCQoi12WlYV5B5T71-HaIkAENzY',
			inst: 'https://www.instagram.com/spectroveinz/',
		},
		{
			id: 2,
			img: '/images/team/img_2.jpg',
			name: 'Ольга Доронина',
			specialization: 'Педагог по вокалу, руководитель хора',
			text: 'Преподавательский опыт более&nbsp;4&nbsp;лет. Обучалась по&nbsp;зарубежным методикам. Научит вокальным техникам с&nbsp;позитивом и&nbsp;заботой о&nbsp;голосе',
			vk: 'https://vk.com/doroninaolya',
			max: 'https://max.ru/u/f9LHodD0cOJmPBBdUdy9hLWIqth6GRdMMCQoi12WlYV5B5T71-HaIkAENzY',
			inst: 'https://www.instagram.com/doroninaolya_/',
		},
		{
			id: 3,
			img: '/images/team/img_3.jpg',
			name: 'Алексей Петров',
			specialization: 'Экстрим-вокал, электрогитара',
			text: 'Преподаёт экстремальный вокал и&nbsp;игру на&nbsp;электрогитаре. Учит&nbsp;не&nbsp;только звучать мощно, но&nbsp;и&nbsp;делать это безопасно.',
			vk: 'https://vk.com/ghxst3r',
			max: 'https://max.ru/u/f9LHodD0cOJmPBBdUdy9hLWIqth6GRdMMCQoi12WlYV5B5T71-HaIkAENzY',
			inst: 'https://www.instagram.com/ghxst3r/',
		},
		{
			id: 4,
			img: '/images/team/img_4.jpg',
			name: 'Анастасия Борисенко',
			specialization: 'Педагог по вокалу',
			text: 'Находит подход к&nbsp;каждому ученику, помогает раскрыться, обрести уверенность и&nbsp;любовь к&nbsp;своему&nbsp;голосу.',
			vk: 'https://vk.com/abborisenko',
			max: 'https://max.ru/u/f9LHodD0cOJmPBBdUdy9hLWIqth6GRdMMCQoi12WlYV5B5T71-HaIkAENzY',
			inst: 'https://www.instagram.com/abborisenko/',
		},
		{
			id: 5,
			img: '/images/team/img_5.webp',
			name: 'Анна Калитурина',
			specialization: 'Педагог по вокалу',
			text: 'Профессиональная вокалистка с&nbsp;уникальным тембром. Поможет снять зажимы, развить музыкальный слух и&nbsp;научит владеть голосом в&nbsp;любом жанре.',
			vk: 'https://vk.ru/id232670828',
			max: 'https://max.ru/u/f9LHodD0cOIH0l6GWSDMv4ZmLKV4SQn74EiRJlaUF5_x9vyvg-SkGOjS5l4',
			inst: 'https://www.instagram.com/abborisenko/',
		},
	]

	return (
		<>
			<div
				id='team'
				className='max-w-480 mx-auto bg-[#eef3f3] lg:pt-10 pb-10 2xl:py-20 '
			>
				<div className='max-w-360 mx-auto px-5 pb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between'>
					<h2 className='text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-semibold'>
						Наша команда
					</h2>
					<p className='text-lg font-medium lg:text-right leading-5'>
						Люди, благодаря которым твоя звезда <br /> загориться и твоё имя
						станет известным
					</p>
				</div>
				<div className='max-w-360 mx-auto px-5 grid lg:grid-cols-2  gap-15 '>
					{team.map(item => (
						<div
							className='team-card relative flex grow  h-[52vh] min-h-112.5 overflow-hidden rounded-[30px]'
							key={item.id}
						>
							<Image
								src={item.img}
								width={700}
								height={500}
								alt={`Преподаватель вокальной студии ВОКС в Кемерове ${item.name}`}
								className='w-full h-full object-cover absolute'
							/>
							<div className='relative w-full h-full flex flex-col justify-between p-10 text-white bg-linear-to-t from-black/80 to-transparent via-transparent'>
								<div className='team-card-links flex justify-end lg:flex-col items-end gap-5'>
									<Link href={item.vk}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='40'
											height='40'
											viewBox='0 0 50 50'
											fill='none'
											className='md:w-[50px] md:h-[50px]'
										>
											<g clipPath='url(#clip0_320_270)'>
												<path
													d='M26.0557 0C37.3573 0 43.0395 0.000132636 46.5195 3.50977C49.9995 7.01978 50 12.6723 50 23.9443V26.0557C50 37.3298 50.0295 42.9802 46.5195 46.4902C43.0095 49.9999 37.3573 50 26.0557 50H23.9736C12.6699 50 7.01974 50.0002 3.50977 46.4902C-0.000221893 42.9802 0 37.3298 0 26.0557V23.9443C0 12.6683 -0.000221893 7.01978 3.50977 3.50977C7.01974 -0.000184051 12.6699 6.26696e-10 23.9736 0H26.0557ZM8.44922 15.2295C8.71523 28.2275 15.558 36.0498 26.832 36.0498H27.4854V28.6143C31.5893 29.0303 34.6533 32.0938 35.9033 36.0498H41.8213C40.2154 30.1322 36.0518 26.8605 33.4639 25.6104C36.0518 24.0643 39.7092 20.3155 40.5713 15.2295H35.1895C34.0576 19.3635 30.6973 23.1118 27.4854 23.4678V15.2295H22.0117V29.6563C18.6817 28.8303 14.3372 24.7775 14.1592 15.2295H8.44922Z'
													fill='white'
												/>
											</g>
											<defs>
												<clipPath id='clip0_320_270'>
													<rect width='50' height='50' fill='white' />
												</clipPath>
											</defs>
										</svg>
									</Link>
									<Link href={item.max}>
										<svg
											width='40'
											height='40'
											viewBox='0 0 320 320'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='md:w-[50px] md:h-[50px]'
										>
											<rect width='320' height='320' rx='153.6' fill='none' />
											<g transform='translate(0.000000,320.000000) scale(0.100000,-0.100000)' fill='white' stroke='none'>
												<path d='M1450 3184 c-14 -2 -68 -11 -120 -20 -506 -85 -965 -434 -1180 -899 -114 -245 -157 -505 -139 -832 12 -214 43 -392 123 -704 69 -268 90 -382 101 -539 4 -59 13 -105 23 -123 79 -133 443 -60 634 127 l37 36 86 -56 c169 -110 294 -151 498 -163 221 -14 435 12 624 74 124 41 329 147 433 225 312 234 528 566 610 937 16 74 20 128 20 341 0 219 -3 265 -21 349 -134 620 -603 1090 -1221 1225 -71 15 -140 21 -288 23 -107 2 -206 2 -220 -1z m348 -799 c305 -71 552 -326 616 -637 76 -369 -138 -754 -499 -899 -222 -88 -452 -75 -660 39 l-70 39 -75 -62 c-87 -70 -134 -93 -159 -78 -48 30 -95 151 -127 328 -26 141 -26 465 -1 583 72 337 266 575 540 667 43 14 104 30 135 35 71 11 217 4 300 -15z' />
											</g>
										</svg>
									</Link>
									{/* <Link href={item.inst}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='40'
											height='40'
											viewBox='0 0 50 50'
											fill='none'
											className='md:w-12.5 md:h-12.5'
										>
											<g clipPath='url(#clip0_320_268)'>
												<path
													d='M25.0147 4.50283C31.6983 4.50283 32.4897 4.53214 35.1182 4.64935C37.5611 4.75679 38.8802 5.16703 39.7596 5.50889C40.9224 5.9582 41.7628 6.50518 42.6324 7.37449C43.5118 8.25357 44.0492 9.08381 44.4987 10.2461C44.8407 11.1252 45.2511 12.4536 45.3586 14.8857C45.4759 17.523 45.5052 18.3141 45.5052 24.9854C45.5052 31.6663 45.4759 32.4575 45.3586 35.085C45.2511 37.5269 44.8407 38.8455 44.4987 39.7246C44.0492 40.8869 43.5021 41.7269 42.6324 42.5962C41.753 43.4753 40.9224 44.0125 39.7596 44.4618C38.8802 44.8037 37.5513 45.2139 35.1182 45.3214C32.48 45.4386 31.6885 45.4679 25.0147 45.4679C18.3311 45.4679 17.5396 45.4386 14.9111 45.3214C12.4682 45.2139 11.1491 44.8037 10.2697 44.4618C9.1069 44.0125 8.26656 43.4655 7.39691 42.5962C6.51749 41.7171 5.98007 40.8869 5.53058 39.7246C5.18859 38.8455 4.77819 37.5171 4.67071 35.085C4.55345 32.4477 4.52414 31.6566 4.52414 24.9854C4.52414 18.3044 4.55345 17.5132 4.67071 14.8857C4.77819 12.4438 5.18859 11.1252 5.53058 10.2461C5.98007 9.08381 6.52726 8.2438 7.39691 7.37449C8.27633 6.49541 9.1069 5.9582 10.2697 5.50889C11.1491 5.16703 12.478 4.75679 14.9111 4.64935C17.5396 4.53214 18.3311 4.50283 25.0147 4.50283ZM25.0147 0C18.2236 0 17.3735 0.0293026 14.7059 0.146513C12.0481 0.263723 10.2208 0.693495 8.63787 1.30885C6.98652 1.95351 5.58921 2.80328 4.20168 4.20004C2.80438 5.58703 1.95427 6.98379 1.30936 8.62473C0.693766 10.2168 0.263826 12.0336 0.14657 14.6904C0.0293141 17.3667 0 18.2164 0 25.0049C0 31.7933 0.0293141 32.6431 0.14657 35.3096C0.263826 37.9664 0.693766 39.7929 1.30936 41.3753C1.95427 43.026 2.80438 44.4227 4.20168 45.8097C5.58921 47.1967 6.98652 48.0563 8.6281 48.6912C10.2208 49.3065 12.0383 49.7363 14.6961 49.8535C17.3637 49.9707 18.2138 50 25.0049 50C31.796 50 32.6461 49.9707 35.3137 49.8535C37.9715 49.7363 39.7987 49.3065 41.3817 48.6912C43.0233 48.0563 44.4206 47.1967 45.8081 45.8097C47.1956 44.4227 48.0555 43.026 48.6906 41.385C49.3062 39.7929 49.7362 37.9762 49.8534 35.3194C49.9707 32.6529 50 31.8031 50 25.0147C50 18.2262 49.9707 17.3764 49.8534 14.7099C49.7362 12.0531 49.3062 10.2266 48.6906 8.64427C48.075 6.98379 47.2249 5.58703 45.8276 4.20004C44.4401 2.81305 43.0428 1.95351 41.4012 1.31862C39.8085 0.703262 37.991 0.273491 35.3332 0.156281C32.6559 0.0293026 31.8057 0 25.0147 0Z'
													fill='white'
												/>
												<path
													d='M25 12.5C18.0989 12.5 12.5 18.0989 12.5 25C12.5 31.9011 18.0989 37.5 25 37.5C31.9011 37.5 37.5 31.9011 37.5 25C37.5 18.0989 31.9011 12.5 25 12.5ZM25 33.1084C20.5228 33.1084 16.8916 29.4772 16.8916 25C16.8916 20.5228 20.5228 16.8916 25 16.8916C29.4772 16.8916 33.1084 20.5228 33.1084 25C33.1084 29.4772 29.4772 33.1084 25 33.1084Z'
													fill='white'
												/>
												<path
													d='M40.625 11.7188C40.625 13.0166 39.5715 14.0625 38.2813 14.0625C36.9834 14.0625 35.9375 13.009 35.9375 11.7188C35.9375 10.4209 36.991 9.375 38.2813 9.375C39.5715 9.375 40.625 10.4285 40.625 11.7188Z'
													fill='white'
												/>
											</g>
											<defs>
												<clipPath id='clip0_320_268'>
													<rect width='50' height='50' fill='white' />
												</clipPath>
											</defs>
										</svg>
									</Link> */}
								</div>
								<div className='team-card-description flex flex-col'>
									<p className='team-card-name text-[26px] lg:text-[32px] font-semibold pb-0.5'>
										{item.name}
									</p>
									<p className='team-card-specialization  lg:text-xl font-medium mb-3.75'>
										{item.specialization}
									</p>
									<p
										className='team-card-text  lg:text-base font-normal mb-0'
										dangerouslySetInnerHTML={{ __html: item.text }}
									></p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
