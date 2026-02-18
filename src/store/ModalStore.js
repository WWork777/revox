// store/ModalStore.js
import { makeAutoObservable } from 'mobx'

class ModalStore {
	isOpen = false

	constructor() {
		makeAutoObservable(this)
	}

	// Стрелочная функция сохраняет контекст
	openModal = () => {
		this.isOpen = true
		document.body.style.overflow = 'hidden'
	}

	closeModal = () => {
		this.isOpen = false
		document.body.style.overflow = 'unset'
	}
}

export const modalStore = new ModalStore()
