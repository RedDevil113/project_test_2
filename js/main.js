let menu = document.querySelector('.menu');

window.addEventListener('keydown', menuOpen);
menu.addEventListener('click', menuOpen);

function menuOpen(e) {
	if(e.type == 'click')
		menu.classList.toggle('open');
	if(e.type == 'keydown')
		if(e.code == 'Escape')
			menu.classList.remove('open');
}
