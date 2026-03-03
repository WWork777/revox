'use client'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Reviews.scss'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Reviews() {
	const availableReviews = [
		{
			id: 1,
			img: 'Алая.jpg',
			name: 'Алая',
			date: '06.07.2025',
			star: 5,
			text: 'Лучшая вокальная студия. Хотите освоить белтинг, микст, тванг? Раскрепостить тело? Вам сюда) а ещё постоянно проходят какие-то движухи, которые создают дружественную атмосферу. Очень передовая школа вокала.',
		},
		{
			id: 2,
			img: 'ДарьяПереверзева.png',
			name: 'Дарья Переверзева',
			date: '04.07.2025',
			star: 5,
			text: 'Отличная школа)хочу выделеть педагога по вокалу Анастасию,очень долантливая, позитивная,распологает к себе с первой минуты общения.Ребенок ходит с удовольсвием и виден Результат сразу ❤️',
		},
		{
			id: 3,
			img: 'ЮлияИльвес.png',
			name: 'Юлия Ильвес',
			date: '21.03.2025',
			star: 5,
			text: 'Мне довелось поработать с разными преподавателями, разного направления в вокале, с разным подходом и техниками. Хочу отметить, что с Данилом у меня случился самый быстрый и эффективный результат, от которого я просто в восторге!',
		},
		{
			id: 4,
			img: 'АлександрФедоров.png',
			name: 'Александр Федоров',
			date: '12.03.2025',
			star: 5,
			text: 'Всегда считал что петь не дано. Поверил в себя за всего за несколько уроков с Данилом',
		},
		{
			id: 5,
			img: 'ТатьянаКузнецова.png',
			name: 'Татьяна Кузнецова',
			date: '03.07.2025',
			star: 5,
			text: 'Ходили к ребятам записывали песню на свадьбу. Остались только положительные эмоции. Ребята молодцы, всем советую. Обязательно приедем еще. Кто хочет порадовать или удивить свои знакомых, родных вам именно в эту студию! Если хотите попеть для себя, вам так же к ним! Идите товарищи, не пожалеет!',
		},
		{
			id: 6,
			img: 'МарияЧерепанова.png',
			name: 'Мария Черепанова',
			date: '29.06.2025',
			star: 5,
			text: 'Прекрасное место, если ты хочешь научиться петь! Индивидуальный подход! Возможножность выбрать педагога! Самый лучший педагог по вокалу - Ольга Доронина! Простым, доступным языком Обьясняет как научиться использовать тот или иной приём.. В быстрые сроки, что важно! Главное дружеская, лёгкая атмосфера 😽',
		},
		{
			id: 7,
			img: 'ВалерияДемина.png',
			name: 'Валерия Демина',
			date: '11.02.2025',
			star: 5,
			text: 'Данил - отличный преподаватель, эрудирован далеко не только в сферах музыки! Обожаю с ним брать сложные английские песни. Здесь научат петь используя различные современные техники, правильному американскому произношению, Результат просто восторг! Жду следующих занятий с большим нетерпением!',
		},
		{
			id: 8,
			img: 'КатеринаШинкаренко.jpg',
			name: 'Катерина Шинкаренко',
			date: '24.06.2025',
			star: 5,
			text: 'В студии ВОКС - это любовь❤️ Здесь очень крутые преподаватели, самые настоящие профессионалы! Одна из них - просто потрясающая Оля Доронина, которая умеет объяснить сложные вещи просто и доступно! До занятий с Олей я и не подозревала, что умею петь так красиво, высоко и легко. Атмосфера на занятии всегда позитивная и комфортная. А эмоции после только 🔥🔥🔥',
		},
		{
			id: 9,
			img: 'ЕлизаветаПермикина.png',
			name: 'Елизавета Пермикина',
			date: '23.06.2025',
			star: 5,
			text: 'Мне очень понравилось, удобное местоположение 👍небольшая, очень комфортная студия🫶и конечно же педагог просто🔥🔥🔥в общем у меня все пазлы сошлись 😁 я с огромнейшим удовольствием занимаюсь и рекомендую. Не попробуешь не узнаешь🎙️',
		},
		{
			id: 10,
			img: 'ЮлияСоболевская.png',
			name: 'Юлия Соболевская',
			date: '10.02.2025',
			star: 5,
			text: 'Данил, ты просто суперпреподаватель! Спасибо за то, что ты нам даёшь, чему нас учишь. Я вижу и слышу свой прогресс! Спасибо тебе за твой талант!',
		},
		{
			id: 11,
			img: 'МаринаШванева.png',
			name: 'Марина Шванева',
			date: '23.06.2025',
			star: 5,
			text: 'Хочу поблагодарить профессионалов своего дела, Олю и Данила за их вклад и терпение, за тёплое и трепетное отношение, за наставления и обучение, за то, что как родные 🥰',
		},
	]

	return (
		<>
			<div id='reviews' className='home-reviews home-block'>
				<div className='swiper-title-pagination'>
					<div className='reviews-title'>
						<h2>Нам доверяют</h2>
						<button className='swiper-button-prev-reviews'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='34'
								height='34'
								viewBox='0 0 24 24'
							>
								<path
									fill='currentColor'
									d='M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31z'
								/>
							</svg>
						</button>
						<button className='swiper-button-next-reviews'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='34'
								height='34'
								viewBox='0 0 24 24'
							>
								<path
									fill='currentColor'
									d='M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z'
								/>
							</svg>
						</button>
					</div>
					<div className='reviews-2gis'>
						<p className='avarage-rating'>5.0</p>
						<div className='score'>
							<div className='star'>
								<div className='star-icon'>
									{Array.from({ length: 5 }).map((_, i) => (
										<Image
											key={i}
											src={'/Home/Reviews/star.svg'}
											width={22}
											height={22}
											alt='Звезда'
										/>
									))}
								</div>
								<div className='gis-logo'>
									<Image
										src={'/Home/Reviews/2gis.svg'}
										width={24}
										height={24}
										alt='2gis'
									/>{' '}
									2GIS
								</div>
							</div>
							<div className='numbers'>
								<p className='numbers-bold'>48 отзывов</p>
								<p className='numbers-bold-dot'>•</p>
								<p className='numbers-thin'>48 оценок</p>
							</div>
						</div>
						<a href='https://go.2gis.com/JgIiv' className='go-review'>
							Оставить отзыв
						</a>
					</div>
				</div>
				<Swiper
					slidesPerView={'auto'}
					spaceBetween={0}
					navigation={{
						nextEl: '.swiper-button-next-reviews',
						prevEl: '.swiper-button-prev-reviews',
					}}
					modules={[Navigation]}
					className='reviews-catalog'
				>
					{availableReviews.map(item => (
						<SwiperSlide key={item.id}>
							<div className='reviews-home-card'>
								<div className='review-profile'>
									<Image
										src={`/Home/Reviews/${item.img}`}
										width={87}
										height={87}
										alt='Отзыв о музыкальной студии ВОКС в Кемерове'
									/>
									<div className='profile-info'>
										<p className='profile-name'>{item.name}</p>
										<p className='profile-date'>{item.date}</p>
										<div className='star'>
											{Array.from({ length: item.star }).map((_, i) => (
												<Image
													key={i}
													src={'/Home/Reviews/star.svg'}
													width={30}
													height={30}
													alt='Звезда'
												/>
											))}
										</div>
									</div>
								</div>
								<p className='reviews-text'>{item.text}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}
