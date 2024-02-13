import { useState } from "react";

const imageSizes = [
	{ width: 372, height: 812, deviceType: "url-mob" },
	{ width: 768, height: 956, deviceType: "url-tab" },
	{ width: 1180, height: 770, deviceType: "url-desk" },
];

const imageSizesRetina = [
	{ width: 750, height: 1624, deviceType: "url-mobx2" },
	{ width: 1536, height: 1912, deviceType: "url-tabx2" },
	{ width: 2360, height: 1540, deviceType: "url-deskx2" },
];

// Функція для вибору підходящого зображення
const useSelectImage = () => {
	const [currentImage, setCurrentImage] = useState(null);

	const selectImage = viewport => {
		console.log(viewport);
		const dpr = window.devicePixelRatio;

		let sizes = dpr === 1 ? imageSizes : imageSizesRetina;

		// let selectedImage = null;
		let minDifference = Infinity;
		let selectedImage = currentImage;

		for (const size of sizes) {
			// Різниця між розмірами вьюпорта та розмірами зображення
			const widthDifference = Math.abs(viewport.width - size.width);
			const heightDifference = Math.abs(viewport.height - size.height);

			// Сумарна різниця
			const totalDifference = widthDifference + heightDifference;

			// Якщо сумарна різниця менша за поточний мінімум
			if (totalDifference < minDifference) {
				// Оновлюємо мінімальну різницю та обране зображення
				minDifference = totalDifference;
				selectedImage = size;
			}
		}
		setCurrentImage(selectedImage.deviceType);
	};

	return { currentImage, selectImage };
};

export default useSelectImage;
