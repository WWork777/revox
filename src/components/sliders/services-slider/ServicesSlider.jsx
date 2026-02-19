'use client'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ServicesSLider = observer(
	forwardRef(({ className }, ref) => {
		const swiperRef = useRef(null)

		useImperativeHandle(ref, () => ({
			slidePrev: () => {
				swiperRef.current?.swiper.slidePrev()
			},
			slideNext: () => {
				swiperRef.current?.swiper.slideNext()
			},
		}))

		const slides = [
			{
				id: 1,
				src: '/images/services/img_1.png',
				title: 'Продюсирование артиста',
				desc: 'От идеи и записи до релиза и концертов. Стратегия, звук, образ и продвижение — мы берем на себя, чтобы вы могли сосредоточиться на творчестве.',
				price: 1500,
			},
			{
				id: 2,
				src: '/images/services/img_2.png',
				title: 'Запись песен ',
				desc: 'Профессиональная запись вокала и инструментов, сведение и мастеринг. Превращаем вашу идею в готовый трек студийного качества для релиза на всех площадках.',
				price: 1500,
			},
			{
				id: 3,
				src: '/images/services/img_3.png',
				title: 'Обучение вокалу',
				desc: 'Постановка голоса, развитие техники дыхания, работа с зажимами и неуверенностью, освоение импровизации и подача.',
				price: 1500,
			},
			{
				id: 4,
				src: '/images/services/img_4.jpg',
				title: 'Современный хор',
				desc: 'Современный эстрадный хор — пение по голосам, развитие слуха и командный дух в дружеской атмосфере.',
				price: 700,
			},
			{
				id: 5,
				src: '/images/services/img_5.jpg',
				title: 'Сонграйтинг',
				desc: 'Помогаем писать свои песни: от идеи до полного текста. Учим выражать себя через музыку и слова.',
				price: 3000,
			},
			{
				id: 6,
				src: '/images/services/img_6.jpg',
				title: 'Сведение и мастеринг',
				desc: 'Разбираем основы звукорежиссуры, учим сводить треки и работать с голосом профессионально.',
				price: 2000,
			},
			{
				id: 7,
				src: '/images/services/img_7.jpg',
				title: 'Сценическое движение',
				desc: 'Раскрепощение, уверенность, умение двигаться, чувствовать музыку и себя в ней.',
				price: 1500,
			},
			{
				id: 8,
				src: '/images/services/img_8.jpg',
				title: 'Мастер-классы и встречи',
				desc: 'Регулярные занятия по актерскому мастерству, сценическому движению, караоке-батлы и творческие вечеринки.',
				price: 1500,
			},
			{
				id: 9,
				src: '/images/services/img_9.jpg',
				title: 'Публикация песни',
				desc: 'Размещаем готовый трек на всех популярных музыкальных площадках — быстро, грамотно и без лишних хлопот.',
				price: 2000,
			},
			{
				id: 10,
				src: '/images/services/img_10.jpg',
				title: 'Песня под ключ',
				desc: 'Создаём песню с нуля — текст, музыка и аранжировка под тебя и твой стиль. Работаем быстро и в любом жанре.',
				price: 20000,
			},
			{
				id: 11,
				src: '/images/services/img_11.jpg',
				title: 'Создание инструментала',
				desc: 'Напишем оригинальную минусовку: по вашим идеям, тексту или референсам. Индивидуальный подход, любой жанр, 50% предоплата.',
				price: 'от 5000 до 15000',
			},
			{
				id: 12,
				src: '/images/services/img_12.png',
				title: 'Экстрим-вокал',
				desc: 'Уникальное направление в Кемерово — обучение скриму, гроулу, харшу и другим современным стилям экстремального вокала.',
				price: 1500,
			},
		]

		return (
			<div className={className}>
				<Swiper
					ref={swiperRef}
					loop={true}
					grabCursor={true}
					centeredSlides={false}
					pagination={false}
					navigation={false}
					speed={1000}
					modules={[Navigation, Pagination, Autoplay]}
					className='overflow-visible'
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
							slidesPerView: 1.5,
							spaceBetween: 25,
						},
						1024: {
							slidesPerView: 2.5,
							spaceBetween: 15,
						},
						1280: {
							slidesPerView: 2.5,
							spaceBetween: 20,
						},
					}}
				>
					{slides.map((slide, index) => (
						<SwiperSlide
							key={index}
							className='relative text-white border-gray-300 rounded-2xl  min-h-100  '
							style={{
								backgroundImage: `url(${slide.src})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<div className='absolute  inset-0   bg-black/50 rounded-2xl p-5  xl:p-10 flex flex-col justify-between	'>
								<div className=' flex justify-end'>
									<p className='text-lg font-medium '>{slide.price} руб.</p>
								</div>
								<div>
									<h3 className='font-bebas text-2xl xl:text-3xl font-medium leading-6 xl:leading-10'>
										{slide.title}
									</h3>
									<p className='pt-4 pr-1 text-xl lg:text-lg xl:text-xl font-normal leading-5'>
										{slide.desc}
									</p>
								</div>
								<Link href={'tel:+79059169286'}>
									{' '}
									<button
										// onClick={modalStore.openModal}
										className='text-white bg-linear-to-r from-[#EF286F] via-[#EF286F] to-[#E85E8F]  bg-right hover:bg-left px-8  py-3  rounded-xl  font-medium cursor-pointer hover:scale-[1.01] hover:shadow-[4px_4px_20px_hsla(339,86%,55%,0.3)] transition-all duration-400 shadow-[4px_4px_20px_rgba(0,0,0,0.2)] w-max'
									>
										ЗАПИСАТЬСЯ
									</button>
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		)
	}),
)

ServicesSLider.displayName = 'ServicesSLider'

export default ServicesSLider
