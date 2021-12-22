const sviper = document.querySelector('.sviper');
document.addEventListener('scroll', ()=>{
	var scroll = window.scrollY;
	if(scroll>300){
		sviper.classList.remove('active2')
	}else{
		sviper.classList.add('active2')
	}
})