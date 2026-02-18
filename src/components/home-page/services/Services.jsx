'use client'
import ServicesSLider from '@/components/sliders/services-slider/ServicesSlider'
import { useRef } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

export default function Services() {
	const sliderRef = useRef(null)

	const handlePrevClick = () => {
		sliderRef.current?.slidePrev()
	}

	const handleNextClick = () => {
		sliderRef.current?.slideNext()
	}
	return (
		<section
			id='services'
			className='max-w-480 mx-auto bg-[#eef3f3] py-10 overflow-hidden 2xl:py-20'
		>
			<div className='max-w-360 mx-auto px-5 sm:pl-5 sm:pr-0 overflow-visible'>
				<div className='max-w-360 mx-auto sm:pr-5 pb-6 flex items-center justify-between'>
					<h1 className='text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-semibold'>
						Услуги
					</h1>
					<div className='flex items-center gap-2'>
						<div
							className='rounded-full w-11 h-11 bg-black flex items-center justify-center cursor-pointer'
							onClick={handlePrevClick}
						>
							<IoIosArrowRoundBack color={'#fff'} size={25} />
						</div>
						<div
							className='rounded-full w-11 h-11 bg-black flex items-center justify-center cursor-pointer'
							onClick={handleNextClick}
						>
							<IoIosArrowRoundForward color={'#fff'} size={25} />
						</div>
					</div>
				</div>
				<div className='w-full 2xl:w-[1760px]'>
					<ServicesSLider ref={sliderRef} />
				</div>
			</div>
		</section>
	)
}
