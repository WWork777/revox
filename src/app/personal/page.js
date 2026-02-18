export const metadata = {
	title: 'Политика  обработки персональных данных',
	description:
		'Вокал, запись песен, сведение, написание музыки — всё в VOX, топ-студии Кемерова. Раскрой свой голос с командой профи!',
	alternates: {
		canonical: 'https://vox42.ru/',
	},
	keywords: [
		'вокальная студия Кемерово',
		'зал записи песен',
		'создание песен',
		'сведение',
		'мастеринг',
		'постановка голоса',
		'экстрим вокал',
		'скрим',
		'гроул',
		'харш',
		'сонграйтинг',
		'занятия по вокалу',
		'сертификат на занятия',
		'сертификат на запись',
		'школа вокала',
		'голос',
		'пение',
		'песня на заказ',
	],
	openGraph: {
		title: 'Студия звукозаписи и вокала VOX в Кемерово',
		description:
			'Вокал, запись песен, сведение, написание музыки — всё в VOX, топ-студии Кемерова. Раскрой свой голос с командой профи!',
		url: `https://vox42.ru/`,
		images: [
			{
				url: `/favicon/favicon-96x96.png`,
				alt: 'Студия звукозаписи и вокала VOX в Кемерово',
			},
		],
	},
}

export default function PersonalPage() {
	return (
		<div className='min-h-screen bg-white pt-[90px] md:pt-[150px] pb-12 px-4 sm:px-6 lg:px-8 '>
			<div className='max-w-4xl mx-auto'>
				{/* Заголовок */}
				<h1 className='text-4xl font-bold text-center mb-4 text-gray-900'>
					Политика в отношении обработки персональных данных
				</h1>

				{/* Дата */}
				<p className='text-center text-gray-500 mb-12'>
					Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
				</p>

				{/* Контент */}
				<div className='space-y-8'>
					{/* 1. Общие положения */}
					<section className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
						<h2 className='text-2xl font-semibold mb-4 text-[#EC427E]'>
							1. Общие положения
						</h2>
						<div className='space-y-3 text-gray-700 leading-relaxed'>
							<p>
								Настоящая политика составлена в соответствии с Федеральным
								законом от 27.07.2006 № 152-ФЗ "О персональных данных" и
								регулирует порядок обработки, хранения и защиты персональных
								данных посетителей сайта voxmusic.ru (далее — Сайт).
							</p>
							<p>
								Оператором персональных данных (далее — Оператор) является
								студия звукозаписи VOX.
							</p>
						</div>
					</section>

					{/* 2. Цели обработки */}
					<section className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
						<h2 className='text-2xl font-semibold mb-4 text-[#EC427E]'>
							2. Цели обработки
						</h2>
						<p className='text-gray-700 mb-3'>
							Оператор обрабатывает персональные данные пользователей для:
						</p>
						<ul className='list-disc pl-6 space-y-2 text-gray-700'>
							<li>ответов на запросы;</li>
							<li>записи на занятия и услуги;</li>
							<li>исполнения обязательств перед пользователями;</li>
							<li>аналитики и улучшения сайта.</li>
						</ul>
					</section>

					{/* 3. Информация, которую мы собираем */}
					<section className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
						<h2 className='text-2xl font-semibold mb-4 text-[#EC427E]'>
							3. Информация, которую мы собираем
						</h2>
						<p className='text-gray-700 mb-3'>
							Мы можем собирать следующие данные:
						</p>
						<ul className='list-disc pl-6 space-y-2 text-gray-700'>
							<li>имя, контактный телефон, e‑mail;</li>
							<li>информация о предпочтениях и интересах;</li>
							<li>данные об устройстве и IP‑адрес.</li>
						</ul>
					</section>

					{/* 4. Способы сбора */}
					<section className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
						<h2 className='text-2xl font-semibold mb-4 text-[#EC427E]'>
							4. Способы сбора персональных данных
						</h2>
						<ul className='list-disc pl-6 space-y-2 text-gray-700'>
							<li>
								через формы на сайте (запись на урок, получение обратной связи);
							</li>
							<li>cookie‑файлы и аналитику посещений;</li>
							<li>электронную почту и телефон.</li>
						</ul>
					</section>

					{/* 5. Принципы обработки */}
					<section className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
						<h2 className='text-2xl font-semibold mb-4 text-[#EC427E]'>
							5. Принципы обработки данных
						</h2>
						<ul className='list-disc pl-6 space-y-2 text-gray-700'>
							<li>законность и прозрачность;</li>
							<li>минимальность данных;</li>
							<li>только до достижения цели обработки;</li>
							<li>точность и своевременное обновление;</li>
							<li>конфиденциальность и безопасность.</li>
						</ul>
					</section>

					{/* 6. Передача данных */}
					<section className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
						<h2 className='text-2xl font-semibold mb-4 text-[#EC427E]'>
							6. Передача данных третьим лицам
						</h2>
						<p className='text-gray-700'>
							Оператор не передаёт данные третьим лицам без согласия, за
							исключением случаев, предусмотренных законом.
						</p>
					</section>

					{/* 7. Защита данных */}
					<section className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
						<h2 className='text-2xl font-semibold mb-4 text-[#EC427E]'>
							7. Защита данных
						</h2>
						<p className='text-gray-700 mb-3'>
							Применяются технические и организационные меры:
						</p>
						<ul className='list-disc pl-6 space-y-2 text-gray-700'>
							<li>шифрование, пароли, доступ по уровням;</li>
							<li>защита от утечек, вирусов и несанкционированного доступа.</li>
						</ul>
					</section>

					{/* 8. Сроки хранения */}
					<section className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
						<h2 className='text-2xl font-semibold mb-4 text-[#EC427E]'>
							8. Сроки хранения
						</h2>
						<p className='text-gray-700'>
							Персональные данные хранятся не дольше, чем это необходимо для
							целей обработки. После — удаляются или обезличиваются.
						</p>
					</section>

					{/* 9. Права пользователя */}
					<section className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
						<h2 className='text-2xl font-semibold mb-4 text-[#EC427E]'>
							9. Права пользователя
						</h2>
						<p className='text-gray-700 mb-3'>Пользователь вправе:</p>
						<ul className='list-disc pl-6 space-y-2 text-gray-700'>
							<li>знать об обработке своих данных;</li>
							<li>требовать исправления или удаления;</li>
							<li>отозвать согласие на обработку;</li>
							<li>подать жалобу в Роскомнадзор или суд.</li>
						</ul>
					</section>

					{/* 10. Изменения в политике */}
					<section className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
						<h2 className='text-2xl font-semibold mb-4 text-[#EC427E]'>
							10. Изменения в политике
						</h2>
						<p className='text-gray-700'>
							Оператор вправе вносить изменения в настоящую политику. Новая
							версия публикуется на сайте и вступает в силу с момента
							размещения.
						</p>
					</section>

					{/* 11. Контактная информация */}
					<section className='bg-gradient-to-r from-[#EF286F] to-[#E85E8F] rounded-2xl p-8 text-white shadow-lg'>
						<h2 className='text-2xl font-semibold mb-6'>
							11. Контактная информация
						</h2>
						<p className='mb-4'>
							По вопросам обработки персональных данных и реализации прав
							обращайтесь:
						</p>
						<div className='space-y-3'>
							<div className='flex items-center gap-3'>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
									<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
								</svg>
								<span>Email: info@voxmusic.ru</span>
							</div>
							<div className='flex items-center gap-3'>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
								</svg>
								<span>Телефон: +7 905 916-92-86</span>
							</div>
						</div>
					</section>

					{/* Ссылка на главную */}
					<div className='text-center pt-8'>
						<a
							href='/'
							className='inline-flex items-center gap-2 text-gray-600 hover:text-[#EC427E] transition-colors'
						>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M10 19l-7-7m0 0l7-7m-7 7h18'
								/>
							</svg>
							Вернуться на главную
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
