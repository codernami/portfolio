const openIcon = document.getElementById('icon-open');
const navMenu = document.getElementById('menu')
const closeIcon = document.getElementById('icon-close')



openIcon.addEventListener('click', () => {
	navMenu.classList.add('show')
	closeIcon.classList.toggle('show')
	openIcon.classList.toggle('hide')
	
})

closeIcon.addEventListener('click', () => {
	navMenu.classList.remove('show')
	closeIcon.classList.toggle('show')	
	openIcon.classList.toggle('hide')
})

