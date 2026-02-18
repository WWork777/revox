'use client'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'

export default function Projects() {
	const availableProjects = [
		{
			id: 1,
			img: '/images/projects/img_1.png',
			name: 'Валерия Дёмина',
			specialization: 'Запись вокала, продюсирование',
		},
		{
			id: 2,
			img: '/images/projects/img_1.png',
			name: 'Валерия Дёмина',
			specialization: 'Запись вокала, продюсирование',
		},
		{
			id: 3,
			img: '/images/projects/img_1.png',
			name: 'Валерия Дёмина',
			specialization: 'Запись вокала, продюсирование',
		},
	]

	return (
		<div
			id='projects'
			className='bg-[#FCFFFF] max-w-480 mx-auto overflow-hidden py-10 2xl:py-20'
		>
			{/* Заголовок и информация */}
			<div className='max-w-360 mx-auto px-5 flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6 xl:gap-8 mb-8 xl:mb-12'>
				{/* Заголовок и кнопки навигации */}
				<div className='flex flex-col  gap-4'>
					<h2 className='text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-semibold'>
						Проекты
					</h2>
					<p className='font-medium'>
						Проекты, которые мы вырастили от идеи до релиза. <br /> Каждая
						работа — это чья-то реализованная мечта <br /> и наш
						профессиональный почерк.
					</p>
					{/* <div className='hidden xl:flex gap-3'>
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
					</div> */}
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
							},
							640: {
								slidesPerView: 1.5,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 1.5,
								spaceBetween: 25,
							},
							1024: {
								slidesPerView: 1.5,
								spaceBetween: 15,
							},
							1280: {
								slidesPerView: 1.5,
								spaceBetween: 20,
							},
						}}
					>
						{availableProjects.map(item => (
							<SwiperSlide key={item.id} className='w-full min-h-90!'>
								<div className='bg-[#EEF3F3] rounded-2xl border border-[#d1dbdb] h-[inherit]  hover:shadow-lg transition-shadow'>
									{/* Профиль */}
									<div className='flex flex-col lg:flex-row  gap-5 h-[inherit] p-6'>
										<div className='w-full lg:w-1/3	 flex items-center justify-center '>
											<Image
												src={item.img}
												width={300}
												height={300}
												className='xl:w-full xl:h-full rounded-3xl'
												alt={item.name}
											/>
										</div>
										<div className='w-full xl:w-2/3 flex flex-col gap-3 sm:justify-between'>
											<p className='text-base md:text-lg lg:text-xl 2xl:text-3xl font-semibold'>
												ПОПРОБУЙ УСЛЫШАТЬ |{' '}
												<span className='text-[#EC427E]'>{item.name}</span>
											</p>
											<p className='sm:text-xl 2xl:text-2xl  font-semibold'>
												{item.specialization}
											</p>
											<p className='2xl:text-xl font-semibold'>
												Автор принес{' '}
												<span className='text-[#EC427E]'>
													только текст и настроение
												</span>
											</p>
											<p className='2xl:text-xl font-semibold'>
												Наша команда создала атмосферную <br /> аранжировку,
												записала партии и выпустила трек
											</p>

											<div className='flex items-center gap-2 mt-5 2xl:mt-0'>
												<Link href={'#'}>
													<img
														src='/images/projects/icon_1.png'
														alt='icon'
														className='w-12 h-12 xl:w-full xl:h-full'
													/>
												</Link>
												<Link href={'#'}>
													<img
														src='/images/projects/icon_2.png'
														alt='icon'
														className='w-12 h-12 xl:w-full xl:h-full'
													/>
												</Link>
												<Link href={'#'}>
													<img
														src='/images/projects/icon_3.png'
														alt='icon'
														className='w-12 h-12 xl:w-full xl:h-full'
													/>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			{/* Мобильная навигация (дублируем для мобильных устройств) */}
			{/* <div className='flex justify-center gap-4 mt-6 xl:hidden'>
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
			</div> */}
		</div>
	)
}
