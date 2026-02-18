// export default function Release() {
// 	return (
// 		<section className='release max-w-480 mx-auto py-10'>
// 			<div className='max-w-360 mx-auto px-5 flex  flex-col-reverse lg:flex-row gap-x-20'>
// 				<div className='flex items-center justify-center lg:w-1/2'>
// 					<img src='/images/release/img_1.png' alt='img' />
// 				</div>
// 				<div className='relative flex flex-col justify-around lg:w-1/2'>
// 					<img
// 						src='/images/release/Frame.svg'
// 						alt='icon'
// 						className='absolute bottom-0 right-0 hidden sm:block'
// 					/>
// 					<h2 className='text-3xl xl:text-5xl lg:text-6xl font-semibold '>
// 						VOX: Твой первый релиз — уже через 3 месяца.
// 					</h2>
// 					<p className='font-medium'>
// 						{' '}
// 						Мы — единственные в Кемерово, кто не просто учит петь, а гарантирует
// 						результат.
// 					</p>
// 					<p className='font-medium'>
// 						Вы пройдете ускоренный путь от{' '}
// 						<span className='text-[#EC427E]'>
// 							урока вокала до записи и официального выпуска вашего сингла
// 						</span>{' '}
// 						на всех стриминг-площадках
// 					</p>
// 					<div className='flex flex-col gap-5 md:gap-2.5'>
// 						<p className='contact-item  md:text-xl font-medium m-0 transition-all duration-300 ease-in-out text-base md:font-medium'>
// 							Гарантия результата в договоре.
// 						</p>

// 						<p className='contact-item md:text-xl font-medium m-0 transition-all duration-300 ease-in-out  text-base md:font-medium'>
// 							Минимальный риск, максимальная мотивация.
// 						</p>

// 						<p className='contact-item  md:text-xl font-medium m-0 transition-all duration-300 ease-in-out text-base md:font-medium '>
// 							Из ученика — в артисты
// 						</p>
// 					</div>
// 					<button className=' text-white bg-linear-to-r from-[#EF286F] via-[#EF286F] to-[#E85E8F]  bg-right hover:bg-left px-8  py-3  rounded-xl  font-medium cursor-pointer hover:scale-[1.01] hover:shadow-[4px_4px_20px_hsla(339,86%,55%,0.3)] transition-all duration-400 shadow-[4px_4px_20px_rgba(0,0,0,0.2)] w-max'>
// 						ОСТАВИТЬ ЗАЯВКУ
// 					</button>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
'use client'
import Modal from '@/components/common/Modal'
import RequestForm from '@/components/common/RequestForm'
import { modalStore } from '@/store/ModalStore'
import { observer } from 'mobx-react-lite'

const Release = observer(() => {
	return (
		<>
			<section className='release max-w-480 mx-auto py-10 2xl:py-20'>
				<div className='max-w-360 mx-auto px-5 flex flex-col-reverse lg:flex-row gap-y-5 gap-x-20'>
					<div className='flex items-center justify-center  lg:w-1/2'>
						<img src='/images/release/img_1.png' alt='img' />
					</div>
					<div className='relative flex flex-col gap-5 justify-around lg:w-1/2'>
						<img
							src='/images/release/Frame.svg'
							alt='icon'
							className='absolute bottom-0 right-0 hidden sm:block'
						/>
						<h2 className='text-[36px] sm:text-[38px] md:text-[40px] xl:text-[42px] 2xl:text-[48px] font-semibold leading-10 2xl:leading-14 '>
							VOX: Твой первый релиз — уже через 3 месяца.
						</h2>
						<p className='text-lg xl:text-xl font-medium'>
							Мы — единственные в Кемерово, кто не просто учит петь, а
							гарантирует результат.
						</p>
						<p className=' text-lg xl:text-xl font-medium'>
							Вы пройдете ускоренный путь от{' '}
							<span className='text-[#EC427E]'>
								урока вокала до записи и официального выпуска вашего сингла
							</span>{' '}
							на всех стриминг-площадках
						</p>
						<div className='flex flex-col gap-5 md:gap-2.5'>
							<p className='contact-item text-lg xl:text-xl font-medium m-0 transition-all duration-300 ease-in-out  md:font-medium'>
								Гарантия результата в договоре.
							</p>
							<p className='contact-item text-lg xl:text-xl font-medium  m-0 transition-all duration-300 ease-in-out  md:font-medium'>
								Минимальный риск, максимальная мотивация.
							</p>
							<p className='contact-item text-lg xl:text-xl font-medium  m-0 transition-all duration-300 ease-in-out  md:font-medium'>
								Из ученика — в артисты
							</p>
						</div>
						<button
							onClick={modalStore.openModal}
							className='text-white bg-gradient-to-r from-[#EF286F] via-[#EF286F] to-[#E85E8F] bg-right hover:bg-left px-8 py-3 rounded-xl font-medium cursor-pointer hover:scale-[1.01] hover:shadow-[4px_4px_20px_hsla(339,86%,55%,0.3)] transition-all duration-400 shadow-[4px_4px_20px_rgba(0,0,0,0.2)] w-max'
						>
							ОСТАВИТЬ ЗАЯВКУ
						</button>
					</div>
				</div>
			</section>

			<Modal isOpen={modalStore.isOpen} onClose={modalStore.closeModal}>
				<RequestForm />
			</Modal>
		</>
	)
})

export default Release
