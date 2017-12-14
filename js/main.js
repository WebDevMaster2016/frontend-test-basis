document.addEventListener("DOMContentLoaded", function() {

	var $inputNumberField = document.querySelector('#test-number');
	var $customBtn = document.querySelector('.custom-btn');

	function calcNumber() {

		var $inputNumberFieldValue = $inputNumberField.value;
		var $result = document.querySelector('.calc-form-result__digit');
		var $inputNumberFieldValueArr = $inputNumberFieldValue.split(' ');
		var arrRes = 0;

		if($inputNumberFieldValueArr.length === 20) {
			for(var i = 0; i < $inputNumberFieldValueArr.length; i++) {
				arrRes += Number($inputNumberFieldValueArr[i]);
			}
			$result.innerHTML = String(arrRes);
		} else {
			$result.innerHTML = "Введите пожалуйста 20 чисел"
		}
	}

	$customBtn.addEventListener('click', function() {
		calcNumber();
	});
});