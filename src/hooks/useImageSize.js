const imageSizes = [
	{ width: 372, height: 812 },
	{ width: 750, height: 1624 },
	{ width: 768, height: 956 },
	{ width: 1536, height: 1912 },
	{ width: 1180, height: 770 },
	{ width: 2360, height: 1540 },
];

// Функція для вибору підходящого зображення
const selectImage = viewport => {
	let image = null;
	let minDifference = Infinity;
	console.log(window.devicePixelRatio);
	// Перебираємо всі розміри зображень
	for (const size of imageSizes) {
		// Різниця між розмірами вьюпорта та розмірами зображення
		const widthDifference = Math.abs(viewport.width - size.width);
		const heightDifference = Math.abs(viewport.height - size.height);

		// Сумарна різниця
		const totalDifference = widthDifference + heightDifference;

		// Якщо сумарна різниця менша за поточний мінімум
		if (totalDifference < minDifference) {
			// Оновлюємо мінімальну різницю та обране зображення
			minDifference = totalDifference;
			image = size;
		}
	}
	console.log(image);
	return image;
};

export default selectImage;
