'use client'
import { modalStore } from '@/store/ModalStore'
import { observer } from 'mobx-react-lite'
const About = observer(() => {
	return (
		<section
			id='about'
			className='max-w-480 mx-auto bg-[#fcffff] lg:pt-25 pb-6 lg:pb-12 2xl:py-20'
		>
			<div className='max-w-360 mx-auto px-5 flex flex-col lg:flex-row gap-6'>
				<div className='w-full lg:w-1/2 flex flex-col gap-5 md:justify-between '>
					<h1 className='text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-semibold'>
						О нас
					</h1>
					<div>
						<p className='text-xl font-medium pb-3 xl:pb-5 leading-5'>
							VOX — это не просто студия. Это{' '}
							<span className='text-[#e85e8f]'>лейбл</span>.
						</p>
						<p className='text-lg xl:text-xl font-medium pb-2 xl:pb-5 leading-5'>
							Мы создали в Кемерово уникальную{' '}
							<span className='text-[#e85e8f]'>экосистему для музыкантов</span>{' '}
							нового поколения. Здесь обучение вокалу — это первый шаг к
							собственной музыкальной карьере.
						</p>
						<p className='text-lg xl:text-xl font-medium pb-2 xl:pb-5 leading-5'>
							Здесь поддерживают на{' '}
							<span className='text-[#e85e8f]'>любом </span>уровне — от первых
							шагов до уверенных выступлений и записи собственных треков.
						</p>
						<p className='text-lg xl:text-xl font-medium pb-2 xl:pb-5 leading-5'>
							Наша философия:{' '}
							<span className='text-[#e85e8f]'>Обучение × Реализация</span>
						</p>
						<ul className='text-lg xl:text-xl font-medium list-decimal pl-6'>
							<li>
								Мы <span className='text-[#e85e8f]'>прокачаем</span> ваши{' '}
								<span className='text-[#e85e8f]'>навыки</span>
								вокала
							</li>
							<li>
								Сведём ваш трек до{' '}
								<span className='text-[#e85e8f]'>профессионального уровня</span>{' '}
								и поможем с аранжировкой
							</li>
							<li>
								Поможем с{' '}
								<span className='text-[#e85e8f]'>выпуском сингла</span> на всех
								цифровых площадках
							</li>
							<li>И организуем живые выступления на наших концертах</li>
						</ul>
						<p className='text-lg xl:text-xl font-medium pb-5 xl:leading-5 xl:pb-10'>
							<span className='text-[#e85e8f]'>VOX.</span> Место, где рождаются
							артисты.
						</p>
					</div>
					<button
						onClick={modalStore.openModal}
						className='text-white bg-linear-to-r from-[#EF286F] via-[#EF286F] to-[#E85E8F] bg-[length:200%] bg-right hover:bg-left px-8 md:px-11 py-3 md:py-5 rounded-xl lg:text-[20px] font-medium cursor-pointer hover:scale-[1.01] hover:shadow-[4px_4px_20px_hsla(339,86%,55%,0.3)] transition-all duration-400 shadow-[4px_4px_20px_rgba(0,0,0,0.2)] w-max mx-auto sm:mx-0'
					>
						ОТКРОЙ СВОЮ МУЗЫКУ
					</button>
				</div>
				<div className=' w-full lg:w-1/2 pl-2'>
					<img
						src='/images/about/about.png'
						alt='image'
						className='w-full h-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
})
export default About
