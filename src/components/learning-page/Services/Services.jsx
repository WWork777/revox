'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Services.scss'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Services() {
	const availableServices = [
		{
			id: 1,
			img: 'Вокал.jpg',
			title: 'Вокал',
			text: 'Постановка голоса, расширение диапазона, изучение различных вокальных техник, разбор и отработка песен, практика и теория в веселом формате.',
			price: '1500 ₽ / 5000 ₽ 4 урока',
		},
		{
			id: 2,
			img: 'Инструментал.jpg',
			title: 'Создание инструментала',
			text: 'Напишем оригинальную минусовку: по вашим идеям, тексту или референсам. Индивидуальный подход, любой жанр, 50% предоплата.',
			price: 'от 5000 до 15000 ₽',
		},
		{
			id: 3,
			img: 'Экстрим-вокал.png',
			title: 'Экстрим-вокал',
			text: 'Уникальное направление в Кемерово — обучение скриму, гроулу, харшу и другим современным стилям экстремального вокала.',
			price: '1500 ₽',
		},
		{
			id: 4,
			img: 'Хор.jpg',
			title: 'Современный хор',
			text: 'Современный эстрадный хор — пение по голосам, развитие слуха и командный дух в дружеской атмосфере.',
			price: '700 ₽',
		},
		{
			id: 5,
			img: 'Сонграйтинг.jpg',
			title: 'Сонграйтинг',
			text: 'Помогаем писать свои песни: от идеи до полного текста. Учим выражать себя через музыку и слова.',
			price: '3000 ₽',
		},
		{
			id: 6,
			img: 'Сведение.jpg',
			title: 'Сведение и мастеринг',
			text: 'Разбираем основы звукорежиссуры, учим сводить треки и работать с голосом профессионально.',
			price: '2000 ₽',
		},
		{
			id: 7,
			img: 'Движение.jpg',
			title: 'Сценическое движение',
			text: 'Раскрепощение, уверенность, умение двигаться, чувствовать музыку и себя в ней.',
			price: '1500 ₽',
		},
		{
			id: 8,
			img: 'Встречи.jpg',
			title: 'Мастер-классы и встречи',
			text: 'Регулярные занятия по актерскому мастерству, сценическому движению, караоке-батлы и творческие вечеринки.',
			price: '1500 ₽',
		},
		{
			id: 9,
			img: 'Публикация.jpg',
			title: 'Публикация песни',
			text: 'Размещаем готовый трек на всех популярных музыкальных площадках — быстро, грамотно и без лишних хлопот.',
			price: '2000 ₽',
		},
		{
			id: 10,
			img: 'Песня.jpg',
			title: 'Песня под ключ',
			text: 'Создаём песню с нуля — текст, музыка и аранжировка под тебя и твой стиль. Работаем быстро и в любом жанре.',
			price: '20 000 ₽',
		},
	]

	return (
		<>
			<div id='services' className='home-services home-block overflow-hidden'>
				<div className='swiper-title-pagination'>
					<h2>Наши направления</h2>
					<div>
						<button className='swiper-button-prev-new'>
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
						<button className='swiper-button-next-new'>
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
					{/* <Link href={'/services'}>Все услуги <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"/></svg></Link> */}
				</div>
				<Swiper
					slidesPerView={'auto'}
					spaceBetween={0}
					navigation={{
						nextEl: '.swiper-button-next-new',
						prevEl: '.swiper-button-prev-new',
					}}
					modules={[Navigation]}
					className='promo-catalog'
				>
					{availableServices.map(item => (
						<SwiperSlide key={item.id}>
							<Image
								className='service-fon'
								src={`/Home/Services/${item.img}`}
								width={656}
								height={380}
								alt={item.title}
							/>
							<div className='services-home-card'>
								<div className='description-card'>
									<div className='price-card'>{item.price}</div>
									<p>{item.title}</p>
									<span>{item.text}</span>
									<button className='button-card' type='button'>
										<Link href='tel:+7 905 916-92-86'>Позвонить нам</Link>
									</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}
