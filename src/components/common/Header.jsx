// // 'use client'
// // import Link from 'next/link'
// // import { useEffect, useRef, useState } from 'react'

// // export default function Header() {
// // 	const links = [
// // 		{ title: 'О НАС', path: '/about' },
// // 		{ title: 'УСЛУГИ', path: '/services' },
// // 		{ title: 'ПРОЕКТЫ', path: '/projects' },
// // 		{ title: 'ОБУЧЕНИЕ', path: '/learning' },
// // 		{ title: 'КОМАНДА', path: '/teem' },
// // 		{ title: 'КОНТАКТЫ', path: '/contacts' },
// // 	]
// // 	const [isOpen, setIsOpen] = useState(false)
// // 	const menuRef = useRef(null)
// // 	const buttonRef = useRef(null)

// // 	// Блокировка прокрутки при открытом меню
// // 	useEffect(() => {
// // 		if (isOpen) {
// // 			document.body.style.overflow = 'hidden'
// // 		} else {
// // 			document.body.style.overflow = 'unset'
// // 		}

// // 		// Очистка при размонтировании
// // 		return () => {
// // 			document.body.style.overflow = 'unset'
// // 		}
// // 	}, [isOpen])

// // 	// Закрытие меню при клике вне
// // 	useEffect(() => {
// // 		const handleClickOutside = event => {
// // 			if (
// // 				menuRef.current &&
// // 				!menuRef.current.contains(event.target) &&
// // 				buttonRef.current &&
// // 				!buttonRef.current.contains(event.target)
// // 			) {
// // 				setIsOpen(false)
// // 			}
// // 		}

// // 		document.addEventListener('mousedown', handleClickOutside)
// // 		return () => {
// // 			document.removeEventListener('mousedown', handleClickOutside)
// // 		}
// // 	}, [])

// // 	return (
// // 		<header className='fixed z-20 top-0 left-0 w-full py-2 backdrop-blur-md lg:backdrop-blur-sm bg-white/20 lg:bg-white/0'>
// // 			<div className='container max-w-360 mx-auto px-5 flex items-center text-white text-[12px] md:text-[14px] lg:text-base '>
// // 				<div className='hidden sm:flex items-center justify-end 2xl:justify-start gap-4 w-2/5	'>
// // 					{links.slice(0, 3).map((item, i) => (
// // 						<Link href={item.path} key={i}>
// // 							{item.title}
// // 						</Link>
// // 					))}
// // 				</div>
// // 				<div className='w-full flex items-center justify-between sm:w-auto sm:mx-auto'>
// // 					<Link href={'/'}>
// // 						<img
// // 							src='/images/logo/logo3.png'
// // 							alt='logo'
// // 							className='w-15 md:w-20 lg:w-25 2xl:w-30'
// // 						/>
// // 					</Link>
// // 					<Link href={'tel:+79059169286'} className='text-lg sm:hidden'>
// // 						+7 905 916-92-86
// // 					</Link>

// // 					<button
// // 						ref={buttonRef}
// // 						className='flex flex-col justify-between w-7 h-5 bg-transparent sm:hidden z-40 relative'
// // 						onClick={() => setIsOpen(!isOpen)}
// // 						aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
// // 					>
// // 						<span
// // 							className={`
// // 								w-full h-0.5 bg-white rounded-1 transition-all duration-300 ease-in-out
// // 								${isOpen ? 'rotate-45 translate-y-2.5' : ''}
// // 							`}
// // 						></span>
// // 						<span
// // 							className={`
// // 								w-full h-0.5 bg-white rounded-1 transition-all duration-300 ease-in-out
// // 								${isOpen ? 'opacity-0' : 'opacity-100'}
// // 							`}
// // 						></span>
// // 						<span
// // 							className={`
// // 								w-full h-0.5 bg-white rounded-1 transition-all duration-300 ease-in-out
// // 								${isOpen ? '-rotate-45 -translate-y-2' : ''}
// // 							`}
// // 						></span>
// // 					</button>
// // 				</div>
// // 				<div className='hidden sm:flex items-center 2xl:justify-end gap-4 w-2/5'>
// // 					{links.slice(3, 6).map((item, i) => (
// // 						<Link href={item.path} key={i}>
// // 							{item.title}
// // 						</Link>
// // 					))}
// // 				</div>
// // 			</div>

// // 			{/* Затемнение фона */}
// // 			<div
// // 				className={`fixed inset-0 bg-black/50 transition-opacity duration-300 sm:hidden
// // 					${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
// // 				onClick={() => setIsOpen(false)}
// // 			/>

// // 			{/* Мобильное меню с улучшенной анимацией */}
// // 			<div
// // 				ref={menuRef}
// // 				className={`
// // 					mobile-menu  flex flex-col fixed z-30 top-0 w-75 h-screen pt-20
// // 					bg-[url("/images/hero/menu_bg.png")] bg-center bg-cover
// // 					transition-all duration-500 ease-in-out transform
// // 					${isOpen ? 'translate-x-0' : 'translate-x-full'}
// // 					right-0 overflow-y-auto
// // 				`}
// // 			>
// // 				<div className='absolute inset-0 bg-blue-950/70'></div>

// // 				{/* Анимированные ссылки */}
// // 				<div className='relative z-30 flex flex-col gap-4 px-6'>
// // 					{links.map((item, i) => (
// // 						<Link
// // 							href={item.path}
// // 							key={i}
// // 							onClick={() => setIsOpen(false)}
// // 							className={`
// // 								text-white text-lg py-2 border-b border-white/20
// // 								transition-all duration-300 hover:pl-4 hover:border-white
// // 								transform
// // 								${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
// // 							`}
// // 							style={{
// // 								transitionDelay: isOpen ? `${i * 130}ms` : '0ms',
// // 							}}
// // 						>
// // 							{item.title}
// // 						</Link>
// // 					))}
// // 				</div>
// // 			</div>
// // 		</header>
// // 	)
// // }
// 'use client'
// import Link from 'next/link'
// import { useEffect, useRef, useState } from 'react'

// export default function Header() {
// 	const links = [
// 		{ title: 'О НАС', path: '/about' },
// 		{ title: 'УСЛУГИ', path: '/services' },
// 		{ title: 'ПРОЕКТЫ', path: '/projects' },
// 		{ title: 'ОБУЧЕНИЕ', path: '/learning' },
// 		{ title: 'КОМАНДА', path: '/teem' },
// 		{ title: 'КОНТАКТЫ', path: '/contacts' },
// 	]
// 	const [isOpen, setIsOpen] = useState(false)
// 	const [isScrolled, setIsScrolled] = useState(false)
// 	const menuRef = useRef(null)
// 	const buttonRef = useRef(null)

// 	// Отслеживание прокрутки
// 	useEffect(() => {
// 		const handleScroll = () => {
// 			if (window.scrollY > 800) {
// 				setIsScrolled(true)
// 			} else {
// 				setIsScrolled(false)
// 			}
// 		}

// 		window.addEventListener('scroll', handleScroll)
// 		// Проверяем начальное положение
// 		handleScroll()

// 		return () => window.removeEventListener('scroll', handleScroll)
// 	}, [])

// 	// Блокировка прокрутки при открытом меню
// 	useEffect(() => {
// 		if (isOpen) {
// 			document.body.style.overflow = 'hidden'
// 		} else {
// 			document.body.style.overflow = 'unset'
// 		}

// 		return () => {
// 			document.body.style.overflow = 'unset'
// 		}
// 	}, [isOpen])

// 	// Закрытие меню при клике вне
// 	useEffect(() => {
// 		const handleClickOutside = event => {
// 			if (
// 				menuRef.current &&
// 				!menuRef.current.contains(event.target) &&
// 				buttonRef.current &&
// 				!buttonRef.current.contains(event.target)
// 			) {
// 				setIsOpen(false)
// 			}
// 		}

// 		document.addEventListener('mousedown', handleClickOutside)
// 		return () => {
// 			document.removeEventListener('mousedown', handleClickOutside)
// 		}
// 	}, [])

// 	return (
// 		<header
// 			className={`

// 				fixed z-20 top-0 left-0 w-full py-2
// 				transition-all duration-500 ease-in-out
// 				backdrop-blur-md lg:backdrop-blur-sm
// 				${
// 					isScrolled
// 						? 'bg-pink-950/60 lg:bg-[url("/images/hero/header_bg.png")] bg-cover'
// 						: 'bg-pink-950/60 lg:bg-transparent'
// 				}
// 			`}
// 		>
// 			<div className='container max-w-360 mx-auto px-5 flex items-center text-white text-[12px] md:text-[14px] lg:text-base '>
// 				<div className='hidden sm:flex items-center justify-end 2xl:justify-start gap-4 w-2/5	'>
// 					{links.slice(0, 3).map((item, i) => (
// 						<Link href={item.path} key={i}>
// 							{item.title}
// 						</Link>
// 					))}
// 				</div>
// 				<div className='w-full flex items-center justify-between sm:w-auto sm:mx-auto'>
// 					<Link href={'/'}>
// 						<img
// 							src='/images/logo/logo3.png'
// 							alt='logo'
// 							className='w-15 md:w-20 lg:w-25 2xl:w-30 transition-all duration-500'
// 						/>
// 					</Link>
// 					<Link href={'tel:+79059169286'} className='text-lg sm:hidden'>
// 						+7 905 916-92-86
// 					</Link>

// 					<button
// 						ref={buttonRef}
// 						className='flex flex-col justify-between w-7 h-5 bg-transparent sm:hidden z-40 relative'
// 						onClick={() => setIsOpen(!isOpen)}
// 						aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
// 					>
// 						<span
// 							className={`
// 								w-full h-0.5 bg-white rounded-1 transition-all duration-300 ease-in-out
// 								${isOpen ? 'rotate-45 translate-y-2.5' : ''}
// 							`}
// 						></span>
// 						<span
// 							className={`
// 								w-full h-0.5 bg-white rounded-1 transition-all duration-300 ease-in-out
// 								${isOpen ? 'opacity-0' : 'opacity-100'}
// 							`}
// 						></span>
// 						<span
// 							className={`
// 								w-full h-0.5 bg-white rounded-1 transition-all duration-300 ease-in-out
// 								${isOpen ? '-rotate-45 -translate-y-2' : ''}
// 							`}
// 						></span>
// 					</button>
// 				</div>
// 				<div className='hidden sm:flex items-center 2xl:justify-end gap-4 w-2/5'>
// 					{links.slice(3, 6).map((item, i) => (
// 						<Link href={item.path} key={i}>
// 							{item.title}
// 						</Link>
// 					))}
// 				</div>
// 			</div>

// 			{/* Затемнение фона */}
// 			<div
// 				className={`fixed inset-0 bg-black/50 transition-opacity duration-300 sm:hidden
// 					${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
// 				onClick={() => setIsOpen(false)}
// 			/>

// 			{/* Мобильное меню */}
// 			<div
// 				ref={menuRef}
// 				className={`
// 					mobile-menu flex flex-col fixed z-30 top-0 w-75 h-screen pt-20
// 					bg-[url("/images/hero/menu_bg.png")] bg-center bg-cover
// 					transition-all duration-500 ease-in-out transform
// 					${isOpen ? 'translate-x-0' : 'translate-x-full'}
// 					right-0 overflow-y-auto
// 				`}
// 			>
// 				<div className='absolute inset-0 bg-blue-950/70'></div>

// 				{/* Анимированные ссылки */}
// 				<div className='relative z-30 flex flex-col gap-4 px-6'>
// 					{links.map((item, i) => (
// 						<Link
// 							href={item.path}
// 							key={i}
// 							onClick={() => setIsOpen(false)}
// 							className={`
// 								text-white text-lg py-2 border-b border-white/20
// 								transition-all duration-300 hover:pl-4 hover:border-white
// 								transform
// 								${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
// 							`}
// 							style={{
// 								transitionDelay: isOpen ? `${i * 130}ms` : '0ms',
// 							}}
// 						>
// 							{item.title}
// 						</Link>
// 					))}
// 				</div>
// 			</div>
// 		</header>
// 	)
// }
'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
	const links = [
		{ title: 'О НАС', path: '/#about' },
		{ title: 'УСЛУГИ', path: '/#services' },
		{ title: 'ПРОЕКТЫ', path: '/#projects' },
		{ title: 'ОБУЧЕНИЕ', path: '/learning' },
		{ title: 'КОМАНДА', path: '/#team' },
		{ title: 'КОНТАКТЫ', path: '/#contacts' },
	]
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const menuRef = useRef(null)
	const buttonRef = useRef(null)

	// Анимация появления хедера при загрузке
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true)
		}, 100) // Небольшая задержка для плавности

		return () => clearTimeout(timer)
	}, [])

	// Отслеживание прокрутки
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 800) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Блокировка прокрутки при открытом меню
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	// Закрытие меню при клике вне
	useEffect(() => {
		const handleClickOutside = event => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target) &&
				buttonRef.current &&
				!buttonRef.current.contains(event.target)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<header
			className={`
				fixed z-20 top-0 left-0 w-full py-2 
				transition-all duration-700 ease-out
				backdrop-blur-md lg:backdrop-blur-sm
				${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
				${
					isScrolled
						? 'bg-pink-950/60 lg:bg-[url("/images/hero/header_bg.png")] bg-cover'
						: 'bg-pink-950/60 lg:bg-transparent'
				}
			`}
		>
			<div className='container max-w-360 mx-auto px-5 flex items-center text-white text-[12px] md:text-[14px] lg:text-base '>
				<div className='hidden sm:flex items-center justify-end 2xl:justify-start gap-4 w-2/5	'>
					{links.slice(0, 3).map((item, i) => (
						<Link
							href={item.path}
							key={i}
							className={`
								transition-all duration-500
								${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}
							`}
							style={{
								transitionDelay: isVisible ? `${i * 100}ms` : '0ms',
							}}
						>
							{item.title}
						</Link>
					))}
				</div>

				<div className='w-full flex items-center justify-between sm:w-auto sm:mx-auto'>
					<Link href={'/'}>
						<img
							src='/images/logo/logo3.png'
							alt='logo'
							className={`
								w-15 md:w-20 lg:w-25 2xl:w-30 
								transition-all duration-700
								${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}
							`}
							style={{
								transitionDelay: isVisible ? '200ms' : '0ms',
							}}
						/>
					</Link>

					<Link
						href={'tel:+79059169286'}
						className={`
							text-lg sm:hidden transition-all duration-500
							${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}
						`}
						style={{
							transitionDelay: isVisible ? '400ms' : '0ms',
						}}
					>
						+7 905 916-92-86
					</Link>

					<button
						ref={buttonRef}
						className={`
							flex flex-col justify-between w-7 h-5 bg-transparent sm:hidden z-40 relative
							transition-all duration-500
							${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}
						`}
						style={{
							transitionDelay: isVisible ? '500ms' : '0ms',
						}}
						onClick={() => setIsOpen(!isOpen)}
						aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
					>
						<span
							className={`
								w-full h-0.5 bg-white rounded-1 transition-all duration-300 ease-in-out
								${isOpen ? 'rotate-45 translate-y-2.5' : ''}
							`}
						></span>
						<span
							className={`
								w-full h-0.5 bg-white rounded-1 transition-all duration-300 ease-in-out
								${isOpen ? 'opacity-0' : 'opacity-100'}
							`}
						></span>
						<span
							className={`
								w-full h-0.5 bg-white rounded-1 transition-all duration-300 ease-in-out
								${isOpen ? '-rotate-45 -translate-y-2' : ''}
							`}
						></span>
					</button>
				</div>

				<div className='hidden sm:flex items-center 2xl:justify-end gap-4 w-2/5'>
					{links.slice(3, 6).map((item, i) => (
						<Link
							href={item.path}
							key={i}
							className={`
								transition-all duration-500
								${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}
							`}
							style={{
								transitionDelay: isVisible ? `${(i + 3) * 100}ms` : '0ms',
							}}
						>
							{item.title}
						</Link>
					))}
				</div>
			</div>

			{/* Затемнение фона */}
			<div
				className={`fixed inset-0 bg-black/50 transition-opacity duration-300 sm:hidden
					${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
				onClick={() => setIsOpen(false)}
			/>

			{/* Мобильное меню */}
			<div
				ref={menuRef}
				className={`
					mobile-menu flex flex-col fixed z-30 top-0 w-75 h-screen pt-20 
					bg-[url("/images/hero/menu_bg.png")] bg-center bg-cover 
					transition-all duration-500 ease-in-out transform
					${isOpen ? 'translate-x-0' : 'translate-x-full'}
					right-0 overflow-y-auto
				`}
			>
				<div className='absolute inset-0 bg-blue-950/70'></div>

				{/* Анимированные ссылки */}
				<div className='relative z-30 flex flex-col gap-4 px-6'>
					{links.map((item, i) => (
						<Link
							href={item.path}
							key={i}
							onClick={() => setIsOpen(false)}
							className={`
								text-white text-lg py-2 border-b border-white/20 
								transition-all duration-300 hover:pl-4 hover:border-white
								transform 
								${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
							`}
							style={{
								transitionDelay: isOpen ? `${i * 130}ms` : '0ms',
							}}
						>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		</header>
	)
}
