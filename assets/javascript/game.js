$(document).ready(function() {

//crystal random number generation must be between 1 - 12//
var blueCrystalV = 100;
var greenCrystalV = 5;
var yellowCrystalV = 10;
var redCrystalV = 3;
var crystalCountTotal  = 0;
var totalCount = 0;
var crystalTargetRandNumV = 200;


function fnPlayerCrystalCount() {
	//Adds player's crytal count//                                     
	totalCount = blueCrystalV + greenCrystalV+ yellowCrystalV + redCrystalV
	$("p#cCount").html(totalCount);
	return totalCount;
}


function fnBlueCrystal() {

	$("p#cCount").html(crystalCountTotal);
}

function fnAvengerCrystalTargetCount() {

}

$("p#cTargetRandNum").html(crystalTargetRandNumV);

  


//$("p#cCount").html(totalCount);



$("img#blueC").click(function() {
	totalCount += blueCrystalV
	$("p#cCount").html(totalCount);
	return totalCount
});

$("img#greenC").click(function() {
	totalCount += greenCrystalV
	$("p#cCount").html(totalCount);
	return totalCount
});



$("img#yellowC").click(function() {
	totalCount += yellowCrystalV
	$("p#cCount").html(totalCount);
	return totalCount
});

$("img#redC").click(function() {
	totalCount += redCrystalV
	$("p#cCount").html(totalCount);
	return totalCount
});















 });