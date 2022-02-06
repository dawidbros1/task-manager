import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import "./Modal.scss";

const Modal = ({ children, handleOnClose, shouldBeCloseOnOutsideClick }) => {
	const modalRef = useRef(null);

	// RESULT = OPEN DIALOG WINDOW
	useEffect(() => {
		if (!modalRef.current) { return }
		else {
			const { current: modal } = modalRef;
			if (modal.open === false) { modal.showModal() };
		}
	}, []);

	// RESULT = ADD/REMOVE [ listener on close window AND blur on body ]
	useEffect(() => {
		const { current: modal } = modalRef;

		modal.addEventListener('cancel', handleOnClose);
		document.querySelector('body').classList.add('blur');

		return () => {
			modal.removeEventListener('cancel', handleOnClose);
			document.querySelector('body').classList.remove('blur');
		}
	}, [handleOnClose]);

	// RESULT = CLOSE DIALOG WINDOW ON OUTSIDE CLICK
	const handleOutsideClick = ({ target }) => {
		const { current } = modalRef;

		if (shouldBeCloseOnOutsideClick && target === current) {
			handleOnClose();
		}
	}

	return ReactDOM.createPortal((
		<dialog ref={modalRef} onClick={handleOutsideClick}>
			{children}
		</dialog>
	), document.body);
};

export default Modal;