'use client'
import { modalStore } from '@/store/ModalStore'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

const RequestForm = observer(() => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		agreement: false,
	})
	const [errors, setErrors] = useState({})

	const validateForm = () => {
		const newErrors = {}

		if (!formData.name.trim()) {
			newErrors.name = 'Введите имя'
		}

		const phoneRegex = /^\+?[0-9\s\-\(\)]{10,}$/
		if (!formData.phone.trim()) {
			newErrors.phone = 'Введите телефон'
		} else if (!phoneRegex.test(formData.phone)) {
			newErrors.phone = 'Введите корректный номер телефона'
		}

		if (!formData.agreement) {
			newErrors.agreement = true
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (validateForm()) {
			// Здесь логика отправки формы
			console.log('Form submitted:', formData)
			// Очищаем форму и закрываем модалку
			setFormData({ name: '', phone: '', agreement: false })
			modalStore.closeModal()
			// Можно показать уведомление об успехе
			alert('Заявка успешно отправлена!')
		}
	}

	const handleChange = e => {
		const { name, value, type, checked } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}))
		// Очищаем ошибку при вводе
		if (errors[name]) {
			setErrors(prev => ({ ...prev, [name]: undefined }))
		}
	}

	return (
		<div className='p-6 sm:p-8'>
			<h2 className='text-2xl font-semibold text-center mb-2'>
				Оставить заявку
			</h2>
			<p className='text-gray-600 text-center mb-6'>
				Заполните форму и мы свяжемся с вами в ближайшее время
			</p>

			<form onSubmit={handleSubmit} className='space-y-5'>
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>
						Имя <span className='text-[#EC427E]'>*</span>
					</label>
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
						placeholder='Введите ваше имя'
						className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
							errors.name
								? 'border-red-500 focus:ring-red-200'
								: 'border-gray-300 focus:ring-[#EC427E]/20 focus:border-[#EC427E]'
						}`}
					/>
					{errors.name && (
						<p className='mt-1 text-sm text-red-500'>{errors.name}</p>
					)}
				</div>

				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>
						Телефон <span className='text-[#EC427E]'>*</span>
					</label>
					<input
						type='tel'
						name='phone'
						value={formData.phone}
						onChange={handleChange}
						placeholder='+7 (___) ___-__-__'
						className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
							errors.phone
								? 'border-red-500 focus:ring-red-200'
								: 'border-gray-300 focus:ring-[#EC427E]/20 focus:border-[#EC427E]'
						}`}
					/>
					{errors.phone && (
						<p className='mt-1 text-sm text-red-500'>{errors.phone}</p>
					)}
				</div>

				<div className='flex items-start gap-2'>
					<input
						type='checkbox'
						name='agreement'
						id='agreement'
						checked={formData.agreement}
						onChange={handleChange}
						className='mt-1 w-4 h-4 text-[#EC427E] border-gray-300 rounded focus:ring-[#EC427E]'
					/>
					<label
						htmlFor='agreement'
						className={`text-sm ${
							errors.agreement ? 'text-red-500' : 'text-gray-600'
						}`}
					>
						Я согласен на обработку персональных данных{' '}
						<span className='text-[#EC427E]'>*</span>
					</label>
				</div>

				<button
					type='submit'
					className='w-full text-white bg-gradient-to-r from-[#EF286F] to-[#E85E8F] px-8 py-3 rounded-xl font-medium cursor-pointer hover:scale-[1.01] hover:shadow-[4px_4px_20px_hsla(339,86%,55%,0.3)] transition-all duration-400 shadow-[4px_4px_20px_rgba(0,0,0,0.2)]'
				>
					ОТПРАВИТЬ
				</button>
			</form>
		</div>
	)
})

export default RequestForm
