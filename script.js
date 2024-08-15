// 'use strict';

// 1. Приховайте повідомлення за допомогою делегування. Є список повідомлень із кнопками видалення [x].
// Зробіть так, щоб кнопки працювали.

// const content = document.querySelector('.content');
// content.addEventListener('click', event => {
// 	if (event.target.closest('.button')) {
// 		event.target.closest('.text').remove();
// 	}
// });

// 2. Таблиця. На клік змінити колір ячейки.

// const table = document.querySelector('#bagua-table');
// let selectedTd = null;

// table.addEventListener('click', event => {
// 	if (event.target.closest('td')) {
// 		if (selectedTd) {
// 			selectedTd.classList.remove('highlight');
// 		}
// 		selectedTd = event.target.closest('td');
// 		selectedTd.classList.add('highlight');
// 	}
// });

// 3. Створіть дерево, яке показує/приховує дочірні вузли при кліці:

// let list = document.querySelector('.list');
// list.addEventListener('click', event => {
// 	let target = event.target;
// 	let span = target.closest('span');

// 	if (span) {
// 		let parentLi = span.closest('li');
// 		let nestedUl = parentLi.querySelector('ul');
// 		if (nestedUl) {
// 			nestedUl.classList.toggle('hide');
//       span.classList.toggle('closed');
// 		}
// 	}
// });

// 4. Зробіть таблицю відсортованою: кліки на елементах <th> повинні сортувати її за відповідним стовпчиком.

// const table = document.querySelector('.table');
// let sortDirection = false;

// table.addEventListener('click', event => {
// 	const th = event.target;
// 	if (th.tagName === 'TH') {
// 		const index = Array.from(th.parentElement.children).indexOf(th);
// 		const type = th.getAttribute('data-type');
// 		const rows = Array.from(table.querySelectorAll('tbody tr'));

// 		rows.sort((a, b) => {
// 			const aText = a.children[index].textContent.trim();
// 			const bText = b.children[index].textContent.trim();

// 			if (type === 'number') {
// 				return sortDirection ? bText - aText : aText - bText;
// 			} else {
// 				return sortDirection
// 					? bText.localeCompare(aText)
// 					: aText.localeCompare(bText);
// 			}
// 		});

// 		sortDirection = !sortDirection;
// 		table.querySelector('tbody').append(...rows);
// 	}
// });

// 5. Створіть JS-код для поведінки спливаючої підказки. При наведенні миші на елемент з data-tooltip,
// підказка має з’явитися над ним і ховатися при переході на інший елемент.

// const tooltip = document.querySelector('.tooltip');
// const buttons = document.querySelector('.buttons');

// buttons.addEventListener('mouseover', event => {
// 	const target = event.target;
// 	if (target.hasAttribute('data-tooltip')) {
// 		tooltip.textContent = target.getAttribute('data-tooltip');
// 		tooltip.style.opacity = '1';

// 		const rect = target.getBoundingClientRect();
// 		const tooltipRect = tooltip.getBoundingClientRect();

// 		let left =
// 			rect.left + window.scrollX + rect.width / 2 - tooltipRect.width / 2;
// 		let top = rect.top + window.scrollY;

// 		if (rect.top > tooltipRect.height + 20) {
// 			top -= tooltipRect.height + 10;
// 		} else {
// 			top += rect.height + 10;
// 		}
// 		if (left < 0) {
// 			left = 0;
// 		}
// 		if (left + tooltipRect.width > window.innerWidth) {
// 			left = window.innerWidth - tooltipRect.width;
// 		}
// 		if (top < 0) {
// 			top = rect.bottom + window.scrollY + 10;
// 		}
// 		if (top + tooltipRect.height > window.innerHeight + window.scrollY) {
// 			top = rect.top + window.scrollY - tooltipRect.height - 10;
// 		}
// 		tooltip.style.left = `${left}px`;
// 		tooltip.style.top = `${top}px`;
// 	}
// });

// buttons.addEventListener('mouseout', event => {
// 	const target = event.target;
// 	if (target.hasAttribute('data-tooltip')) {
// 		tooltip.style.opacity = '0';
// 	}
// });

// 6. Зробіть так, щоб усі посилання всередині елемента з id="contents" запитали у користувача,
// чи дійсно він хоче вийти. І якщо ні, то не переходьте за посиланням.

// const contents = document.getElementById('contents');

// contents.addEventListener('click', function (event) {
// 	const link = event.target.closest('a');
// 	if (link) {
// 		const сonfirm = confirm('Ви дійсно хочете перейти за посиланням?');
// 		if (!сonfirm) {
// 			event.preventDefault();
// 		}
// 	}
// });

// 7. Створіть галерею зображень, де основне зображення змінюється натисканням на мініатюру.

// const mainImg = document.querySelector('.main__img');
// const images = document.querySelector('.images');

// images.addEventListener('click', function (event) {
// 	const target = event.target.closest('a');
// 	event.preventDefault();
// 	mainImg.src = target.href;
// 	mainImg.alt = target.title;
// });
