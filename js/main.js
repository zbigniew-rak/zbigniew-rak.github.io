//show password
const showButton = document.querySelector('.login-show'),
		inputPassword = document.querySelector('.login-form-password');
let	shown = 0;

$('.login-remove').click(
    function(){
        $('.login-form-text').val('');
    });


function show(){
	inputPassword.setAttribute('type','text');
	inputPassword.focus();
}
function hide(){
	inputPassword.setAttribute('type','password');
	inputPassword.focus();
}
showButton.addEventListener('click', function(){
	if (shown == 0){
		
		shown = 1;
		show();
	}else{
		
		shown=0;
		hide();
	}
});
