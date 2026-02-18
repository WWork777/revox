// 'use client'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'

// export default function Hero() {
// 	const [isAnimating, setIsAnimating] = useState(true)

// 	useEffect(() => {
// 		const timer = setTimeout(() => {
// 			setIsAnimating(false)
// 		}, 2000)

// 		return () => clearTimeout(timer)
// 	}, [])

// 	return (
// 		<>
// 			<section className='max-w-480 mx-auto hero h-screen bg-[url("/images/hero/hero_bg.png")] bg-fixed bg-cover bg-no-repeat relative overflow-hidden landscape'>
// 				<div
// 					className={`absolute inset-0 ${isAnimating ? 'animate-heroFon' : ''}`}
// 				>
// 					<div className='absolute inset-0 bg-blue-950/40'></div>
// 				</div>

// 				<div className='max-w-360 mx-auto px-5 relative h-full flex items-center'>
// 					<img
// 						src='/images/hero/polygon.svg'
// 						alt='polygon-image'
// 						className={`absolute z-0 top-[50%] left-0 2xl:-left-5 -translate-y-[50%] h-[70%] w-auto -ml-[2%] xl:ml-0 ${
// 							isAnimating ? 'animate-treug' : ''
// 						} hover:scale-[1.01] transition-transform duration-300`}
// 					/>

// 					<div className='text-white flex flex-col gap-8'>
// 						<h1
// 							className={`text-4xl leading-10 md:leading-16 sm:text-[42px] md:text-[56px] xl:text-[64px] font-bold relative z-10 ${
// 								isAnimating ? 'animate-slogan' : ''
// 							} text-shadow-lg`}
// 						>
// 							VOX — Музыкальный <br className='2xl:hidden' /> лейбл в Кемерово
// 						</h1>

// 						<h2
// 							className={`text-2xl leading-6 md:leading-12 md:4xl xl:text-5xl relative z-10 w-[85%] ${
// 								isAnimating ? 'animate-podslogan' : ''
// 							} text-shadow`}
// 						>
// 							Мы предоставляем возможность <br /> не только петь, но и быть{' '}
// 							<br />
// 							услышанными!
// 						</h2>

// 						<Link
// 							href={'#'}
// 							className={`mt-4 relative z-10 mx-auto sm:mx-0 ${
// 								isAnimating ? 'animate-button1' : ''
// 							}`}
// 						>
// 							<button className='bg-gradient-to-r from-[#EF286F] via-[#EF286F] to-[#E85E8F] bg-[length:200%] bg-right hover:bg-left px-8 md:px-11 py-3 md:py-5 rounded-xl text-[20px] font-medium cursor-pointer hover:scale-[1.01] hover:shadow-[4px_4px_20px_hsla(339,86%,55%,0.3)] transition-all duration-400 shadow-[4px_4px_20px_rgba(0,0,0,0.2)]'>
// 								УЗНАТЬ БОЛЬШЕ
// 							</button>
// 						</Link>
// 					</div>
// 				</div>
// 			</section>

// 			<style jsx global>{`
// 				@keyframes heroFon {
// 					0% {
// 						filter: blur(20px);
// 					}
// 					100% {
// 						filter: blur(0);
// 					}
// 				}
// 				.animate-heroFon {
// 					animation: heroFon 4s cubic-bezier(0.23, 1, 0.32, 1);
// 				}

// 				@keyframes slogan {
// 					0% {
// 						opacity: 0;
// 						transform: translateX(-5vw);
// 					}
// 					100% {
// 						opacity: 1;
// 						transform: translateX(0);
// 					}
// 				}
// 				.animate-slogan {
// 					animation: slogan 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
// 				}

// 				@keyframes podslogan {
// 					0% {
// 						opacity: 0;
// 						transform: translateY(-100%);
// 					}
// 					38% {
// 						opacity: 0;
// 						transform: translateY(-100%);
// 					}
// 					100% {
// 						opacity: 1;
// 						transform: translateY(0);
// 					}
// 				}
// 				.animate-podslogan {
// 					animation: podslogan 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
// 				}

// 				@keyframes button1 {
// 					0% {
// 						opacity: 0;
// 						transform: translateX(-5vw);
// 					}
// 					50% {
// 						opacity: 0;
// 						transform: translateX(-5vw);
// 					}
// 					100% {
// 						opacity: 1;
// 						transform: translateX(0);
// 					}
// 				}
// 				.animate-button1 {
// 					animation: button1 1.5s cubic-bezier(0.175, 0.885, 0.32, 2);
// 				}

// 				@keyframes treug {
// 					0% {
// 						opacity: 0;
// 						transform: translateX(-10vw) rotate(-0.25turn) scale(0.5);
// 					}
// 					100% {
// 						opacity: 1;
// 						transform: translateX(0) rotate(0) scale(1);
// 					}
// 				}
// 				.animate-treug {
// 					animation: treug 1.5s cubic-bezier(0.23, 1, 0.32, 1);
// 				}

// 				.text-shadow {
// 					text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.247);
// 				}
// 				.text-shadow-lg {
// 					text-shadow: 0px 0px 4px hsla(357, 64%, 52%, 0.3);
// 				}
// 			`}</style>
// 		</>
// 	)
// }

'use client'
import { modalStore } from '@/store/ModalStore'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Hero = observer(() => {
	const [isAnimating, setIsAnimating] = useState(true)
	const [isBgLoaded, setIsBgLoaded] = useState(false)

	useEffect(() => {
		// Предзагрузка фонового изображения
		const bgImage = new Image()
		bgImage.src = '/images/hero/hero_bg.png'
		bgImage.onload = () => {
			setIsBgLoaded(true)
		}

		const timer = setTimeout(() => {
			setIsAnimating(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			<section className='max-w-480 mx-auto hero h-screen bg-no-repeat relative overflow-hidden landscape'>
				{/* Градиентный фон, имитирующий изображение (сразу виден) */}
				<div className='absolute inset-0 bg-gradient-to-r from-[#4A0D22] via-[#6A1333] to-[#8A1A44] opacity-90' />

				{/* Фон с изображением (появляется плавно) */}
				<div
					className={`
						absolute inset-0 bg-cover bg-fixed bg-center
						transition-opacity duration-700 ease-in-out
						${isBgLoaded ? 'opacity-100' : 'opacity-0'}
					`}
					style={{
						backgroundImage: `url('/images/hero/hero_bg.png')`,
					}}
				>
					<div className='absolute inset-0 bg-blue-950/40'></div>
				</div>

				{/* Эффект размытия (оригинальная анимация) */}
				<div
					className={`absolute inset-0 ${isAnimating ? 'animate-heroFon' : ''}`}
				/>

				<div className='max-w-360 mx-auto px-5 relative h-full flex items-center'>
					<img
						src='/images/hero/polygon.svg'
						alt='polygon-image'
						className={`absolute z-0 top-[50%] left-0 2xl:-left-5 -translate-y-[50%] h-[70%] w-auto -ml-[2%] xl:ml-0 ${
							isAnimating ? 'animate-treug' : ''
						} hover:scale-[1.01] transition-transform duration-300`}
					/>

					<div className='text-white flex flex-col gap-8'>
						<h1
							className={`text-4xl leading-10 md:leading-16 sm:text-[42px] md:text-[56px] xl:text-[64px] font-bold relative z-10 ${
								isAnimating ? 'animate-slogan' : ''
							} text-shadow-lg`}
						>
							VOX — Музыкальный <br className='2xl:hidden' /> лейбл в Кемерово
						</h1>

						<h2
							className={`text-2xl leading-6 md:leading-12 md:4xl xl:text-5xl relative z-10 w-[85%] ${
								isAnimating ? 'animate-podslogan' : ''
							} text-shadow`}
						>
							Мы предоставляем возможность <br /> не только петь, но и быть{' '}
							<br />
							услышанными!
						</h2>

						<Link
							href={'#'}
							className={`mt-4 relative z-10 mx-auto sm:mx-0 ${
								isAnimating ? 'animate-button1' : ''
							}`}
						>
							<button
								onClick={modalStore.openModal}
								className='bg-gradient-to-r from-[#EF286F] via-[#EF286F] to-[#E85E8F] bg-[length:200%] bg-right hover:bg-left px-8 md:px-11 py-3 md:py-5 rounded-xl text-[20px] font-medium cursor-pointer hover:scale-[1.01] hover:shadow-[4px_4px_20px_hsla(339,86%,55%,0.3)] transition-all duration-400 shadow-[4px_4px_20px_rgba(0,0,0,0.2)]'
							>
								УЗНАТЬ БОЛЬШЕ
							</button>
						</Link>
					</div>
				</div>
			</section>

			<style jsx global>{`
				@keyframes heroFon {
					0% {
						filter: blur(20px);
					}
					100% {
						filter: blur(0);
					}
				}
				.animate-heroFon {
					animation: heroFon 4s cubic-bezier(0.23, 1, 0.32, 1);
				}

				@keyframes slogan {
					0% {
						opacity: 0;
						transform: translateX(-5vw);
					}
					100% {
						opacity: 1;
						transform: translateX(0);
					}
				}
				.animate-slogan {
					animation: slogan 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
				}

				@keyframes podslogan {
					0% {
						opacity: 0;
						transform: translateY(-100%);
					}
					38% {
						opacity: 0;
						transform: translateY(-100%);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-podslogan {
					animation: podslogan 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
				}

				@keyframes button1 {
					0% {
						opacity: 0;
						transform: translateX(-5vw);
					}
					50% {
						opacity: 0;
						transform: translateX(-5vw);
					}
					100% {
						opacity: 1;
						transform: translateX(0);
					}
				}
				.animate-button1 {
					animation: button1 1.5s cubic-bezier(0.175, 0.885, 0.32, 2);
				}

				@keyframes treug {
					0% {
						opacity: 0;
						transform: translateX(-10vw) rotate(-0.25turn) scale(0.5);
					}
					100% {
						opacity: 1;
						transform: translateX(0) rotate(0) scale(1);
					}
				}
				.animate-treug {
					animation: treug 1.5s cubic-bezier(0.23, 1, 0.32, 1);
				}

				.text-shadow {
					text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.247);
				}
				.text-shadow-lg {
					text-shadow: 0px 0px 4px hsla(357, 64%, 52%, 0.3);
				}
			`}</style>
		</>
	)
})
export default Hero
