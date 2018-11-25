function clean() {
	form.calc.value = '';
}

function equal() {
    form.calc.value = eval(form.calc.value);
}

function addNumber(num) {
	form.calc.value = form.calc.value + num;
}

function backspace() {
	var mainInput = form.calc.value;
	form.calc.value = mainInput.substring(0,mainInput.length-1);
}
