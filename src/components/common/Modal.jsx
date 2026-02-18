'use client'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

const Modal = observer(({ isOpen, onClose, children }) => {
	useEffect(() => {
		const handleEsc = e => {
			if (e.key === 'Escape') onClose()
		}

		if (isOpen) {
			window.addEventListener('keydown', handleEsc)
		}

		return () => {
			window.removeEventListener('keydown', handleEsc)
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm'
			onClick={onClose}
		>
			<div
				className='relative bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto'
				onClick={e => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors'
					aria-label='Закрыть'
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M18 6L6 18M6 6L18 18'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
				</button>
				{children}
			</div>
		</div>
	)
})

export default Modal
