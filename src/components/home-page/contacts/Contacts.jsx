import YMap from '@/components/YMap/YMap'

export default function Contacts() {
	return (
		<div className='max-w-480 mx-auto bg-[#FCFFFF]'>
			<div
				id='contacts'
				className='max-w-360 mx-auto w-full px-5 py-10 flex flex-col-reverse lg:flex-row gap-20 justify-center items-center bg-[#FCFFFF] 2xl:py-20'
			>
				<div className='ymap w-full lg:max-w-1/2 h-full min-h-100 rounded-2xl overflow-hidden shadow-xl'>
					<YMap coordinates={[55.36312, 86.069582]} />
				</div>

				<div className='flex flex-col gap-5 h-fit w-full lg:max-w-1/2 '>
					<h2 className='text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-semibold'>
						Как нас найти
					</h2>

					<h3 className='text-lg xl:text-xl font-medium'>
						Мы находимся в&nbsp;центре Кемерово — легко добраться из&nbsp;любой
						точки города. Приезжай на&nbsp;пробное занятие, приходи в&nbsp;гости
						или&nbsp;просто загляни познакомиться.
					</h3>

					<div className='flex flex-col gap-5 md:gap-2.5'>
						<p className='contact-item  text-lg xl:text-xl font-medium m-0 transition-all duration-300 ease-in-out hover:[&_a]:text-[#FFB6C1]  md:font-medium'>
							г. Кемерово, улица Николая Островского, 7А
						</p>

						<p className='contact-item text-lg xl:text-xl font-medium m-0 transition-all duration-300 ease-in-out hover:[&_a]:text-[#FFB6C1]  md:font-medium'>
							Работаем ежедневно с 10:00 до 21:00
						</p>

						<p className='contact-item  text-lg xl:text-xl font-mediumm-0 transition-all duration-300 ease-in-out hover:[&_a]:text-[#FFB6C1]  md:font-medium '>
							<a
								href='tel:+7 905 916-92-86'
								className='transition-all duration-300 ease-in-out'
							>
								+7 905 916-92-86
							</a>
						</p>

						<p className='contact-item  md:text-xl font-medium m-0 transition-all duration-300 ease-in-out hover:[&_a]:text-[#FFB6C1] text-base md:font-medium '>
							<a
								href='mailto:voxmusickemerovo@gmail.com'
								className='transition-all duration-300 ease-in-out'
							>
								voxmusickemerovo@gmail.com
							</a>
						</p>

						<div className='flex flex-row gap-5 mt-2.5 md:gap-2.5'>
							<a
								href='https://vk.com/voxkemerovo'
								className='text-black hover:text-[#FF69B4] transition-colors duration-300'
							>
								<svg
									width='40'
									height='40'
									viewBox='0 0 100 100'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='md:w-[50px] md:h-[50px]'
								>
									<path
										d='M0 48C0 25.3726 0 14.0589 7.02944 7.02944C14.0589 0 25.3726 0 48 0H52C74.6274 0 85.9411 0 92.9706 7.02944C100 14.0589 100 25.3726 100 48V52C100 74.6274 100 85.9411 92.9706 92.9706C85.9411 100 74.6274 100 52 100H48C25.3726 100 14.0589 100 7.02944 92.9706C0 85.9411 0 74.6274 0 52V48Z'
										fill='currentColor'
									/>
									<path
										d='M53.2082 72.042C30.4165 72.042 17.4167 56.417 16.875 30.417H28.2916C28.6666 49.5003 37.0831 57.5836 43.7498 59.2503V30.417H54.5001V46.8752C61.0835 46.1669 67.9993 38.667 70.3326 30.417H81.083C79.2913 40.5837 71.7913 48.0836 66.4579 51.1669C71.7913 53.6669 80.3334 60.2086 83.5834 72.042H71.7497C69.208 64.1253 62.8751 58.0003 54.5001 57.1669V72.042H53.2082Z'
										fill='#FCFFFF'
									/>
								</svg>
							</a>

							<a
								href='https://max.ru/u/f9LHodD0cOJmPBBdUdy9hLWIqth6GRdMMCQoi12WlYV5B5T71-HaIkAENzY'
								className='text-black hover:text-[#FF69B4] transition-colors duration-300'
							>
								<svg
									width='40'
									height='40'
									viewBox='0 0 320 320'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='md:w-[50px] md:h-[50px]'
								>
									<rect width='320' height='320' rx='153.6' fill='none' />
									<g transform='translate(0.000000,320.000000) scale(0.100000,-0.100000)' fill='currentColor' stroke='none'>
										<path d='M1450 3184 c-14 -2 -68 -11 -120 -20 -506 -85 -965 -434 -1180 -899 -114 -245 -157 -505 -139 -832 12 -214 43 -392 123 -704 69 -268 90 -382 101 -539 4 -59 13 -105 23 -123 79 -133 443 -60 634 127 l37 36 86 -56 c169 -110 294 -151 498 -163 221 -14 435 12 624 74 124 41 329 147 433 225 312 234 528 566 610 937 16 74 20 128 20 341 0 219 -3 265 -21 349 -134 620 -603 1090 -1221 1225 -71 15 -140 21 -288 23 -107 2 -206 2 -220 -1z m348 -799 c305 -71 552 -326 616 -637 76 -369 -138 -754 -499 -899 -222 -88 -452 -75 -660 39 l-70 39 -75 -62 c-87 -70 -134 -93 -159 -78 -48 30 -95 151 -127 328 -26 141 -26 465 -1 583 72 337 266 575 540 667 43 14 104 30 135 35 71 11 217 4 300 -15z' />
									</g>
								</svg>
							</a>

							{/* <a
								href='https://t.me/voxmusickemerovo'
								className='text-black hover:text-[#FF69B4] transition-colors duration-300'
							>
								<svg
									width='40'
									height='40'
									viewBox='0 0 1000 1000'
									version='1.1'
									xmlns='http://www.w3.org/2000/svg'
									className='md:w-[50px] md:h-[50px]'
								>
									<g
										id='Artboard'
										stroke='none'
										strokeWidth='1'
										fill='none'
										fillRule='evenodd'
									>
										<circle
											id='Oval'
											fill='currentColor'
											cx='500'
											cy='500'
											r='500'
										></circle>
										<path
											d='M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z'
											id='Path-3'
											fill='#FCFFFF'
										></path>
									</g>
								</svg>
							</a> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
