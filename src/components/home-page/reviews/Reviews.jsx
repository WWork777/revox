'use client'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

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
			text: 'В студии Vox - это любовь❤️ Здесь очень крутые преподаватели, самые настоящие профессионалы! Одна из них - просто потрясающая Оля Доронина, которая умеет объяснить сложные вещи просто и доступно! До занятий с Олей я и не подозревала, что умею петь так красиво, высоко и легко. Атмосфера на занятии всегда позитивная и комфортная. А эмоции после только 🔥🔥🔥',
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
		<div
			id='reviews'
			className='bg-[#FCFFFF] max-w-480 mx-auto overflow-hidden py-10 2xl:py-20'
		>
			{/* Заголовок и информация */}
			<div className='max-w-360 mx-auto px-5 flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6 xl:gap-8 mb-8 xl:mb-12'>
				{/* Заголовок и кнопки навигации */}
				<div className='flex items-center gap-4'>
					<h2 className='text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-semibold'>
						Нам доверяют
					</h2>
					<div className='hidden xl:flex  items-center gap-3'>
						<button className='swiper-button-prev-reviews w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full hover:scale-95 transition-transform disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31z' />
							</svg>
						</button>
						<button className='swiper-button-next-reviews w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full hover:scale-95 transition-transform disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z' />
							</svg>
						</button>
					</div>
				</div>

				{/* Блок с рейтингом */}
				<div className='flex flex-wrap items-center gap-4 md:gap-6'>
					<span className='text-4xl md:text-5xl font-medium'>5.0</span>

					<div className='flex flex-col'>
						<div className='flex items-center gap-2 md:gap-4'>
							<div className='flex gap-1'>
								{Array.from({ length: 5 }).map((_, i) => (
									<Image
										key={i}
										src='/images/reviews/star.svg'
										width={18}
										height={18}
										className='md:w-5 md:h-5 lg:w-6 lg:h-6'
										alt='Звезда'
									/>
								))}
							</div>
							<div className='flex items-center gap-1 text-sm md:text-base font-medium'>
								<Image
									src='/images/reviews/2gis.svg'
									width={20}
									height={20}
									className='md:w-6 md:h-6'
									alt='2gis'
								/>
								<span>2GIS</span>
							</div>
						</div>

						<div className='flex gap-2 text-xs md:text-sm mt-1'>
							<span className='font-medium'>48 отзывов</span>
							<span className='font-black'>•</span>
							<span className='font-normal'>48 оценок</span>
						</div>
					</div>

					<a
						href='https://go.2gis.com/JgIiv'
						className='px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base border border-[#FFA6D0] rounded-xl hover:bg-[#FFA6D0] hover:text-white transition-colors whitespace-nowrap'
					>
						Оставить отзыв
					</a>
				</div>
			</div>

			<div className='max-w-360 mx-auto px-5 sm:pl-5 sm:pr-0 overflow-visible'>
				<div className='w-full 2xl:w-[1760px]'>
					{/* Слайдер отзывов */}
					<Swiper
						loop={true}
						grabCursor={true}
						centeredSlides={false}
						spaceBetween={16}
						navigation={{
							nextEl: '.swiper-button-next-reviews',
							prevEl: '.swiper-button-prev-reviews',
						}}
						modules={[Navigation]}
						breakpoints={{
							320: {
								slidesPerView: 1,
								spaceBetween: 15,
							},
							640: {
								slidesPerView: 1.5,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 2.5,
								spaceBetween: 25,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 15,
							},
							1280: {
								slidesPerView: 3.5,
								spaceBetween: 20,
							},
						}}
					>
						{availableReviews.map(item => (
							<SwiperSlide key={item.id} className='w-full !h-auto'>
								<div className='bg-[#EEF3F3] p-5 md:p-6 lg:p-8 rounded-2xl border border-[#d1dbdb] h-full flex flex-col gap-4 hover:shadow-lg transition-shadow'>
									{/* Профиль */}
									<div className='flex gap-4'>
										<Image
											src={`/images/reviews/${item.img}`}
											width={60}
											height={60}
											className='w-12 h-12 md:w-16 md:h-16 lg:w-[87px] lg:h-[87px] rounded-full object-cover'
											alt={`Отзыв от ${item.name}`}
										/>
										<div className='flex flex-col justify-between'>
											<p className='text-base md:text-lg lg:text-xl font-medium'>
												{item.name}
											</p>
											<p className='text-xs md:text-sm text-gray-600'>
												{item.date}
											</p>
											<div className='flex gap-1 mt-1'>
												{Array.from({ length: item.star }).map((_, i) => (
													<Image
														key={i}
														src='/images/reviews/star.svg'
														width={20}
														height={20}
														className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'
														alt='Звезда'
													/>
												))}
											</div>
										</div>
									</div>

									{/* Текст отзыва */}
									<p className='text-sm md:text-base font-medium line-clamp-4'>
										{item.text}
									</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			{/* Мобильная навигация (дублируем для мобильных устройств) */}
			<div className='flex justify-center gap-4 mt-6 xl:hidden'>
				<button className='swiper-button-prev-reviews w-10 h-10 bg-black text-white rounded-full hover:scale-95 transition-transform disabled:opacity-60 flex items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 24 24'
						fill='currentColor'
					>
						<path d='M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31z' />
					</svg>
				</button>
				<button className='swiper-button-next-reviews w-10 h-10 bg-black text-white rounded-full hover:scale-95 transition-transform disabled:opacity-60 flex items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 24 24'
						fill='currentColor'
					>
						<path d='M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z' />
					</svg>
				</button>
			</div>
		</div>
	)
}
