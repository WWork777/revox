import Image from 'next/image'

export default function Cta() {
	return (
		<div className='relative flex flex-col items-center justify-center w-full  py-20 bg-linear-to-r from-[#EF286F] via-[#EF286F] to-[#E85E8F] text-white '>
			<Image
				src={'/images/cta/Group.svg'}
				width={848}
				height={385}
				alt='music heart'
				className='absolute h-[90%]  w-full mx-auto z-0'
			/>

			<span className=' md:text-6xl font-[650] z-10 text-2xl pb-3'>
				Хочешь с нами?
			</span>

			<span className='md:text-3xl font-[550] text-center leading-tight z-10 text-base'>
				Начни петь качественно, стильно и свободно{' '}
				<br className='hidden md:block' />
				уже сегодня!
			</span>

			{/* <button
				type='button'
				data-bs-toggle='modal'
				data-bs-target='#exampleModal'
				className='bg-black text-white border-none px-[60px] py-6 text-xl font-semibold uppercase mt-12 rounded-[20px] shadow-[4px_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-[4px_4px_20px_rgba(255,255,255,0.4)] hover:bg-white hover:text-black z-10 md:px-[15px] md:py-3 md:w-full md:text-sm md:mt-5 md:rounded-[15px] animate-[button1_2s_cubic-bezier(0.175,0.885,0.32,1.275)]'
			>
				Записаться на бесплатное занятие
			</button> */}
		</div>
	)
}
