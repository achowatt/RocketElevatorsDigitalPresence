	//addition function
	var addNumbers = function (num1, num2) {
        var addResults = Math.ceil(num1 + num2);
        return addResults;
    };

	//division function
	var divNumbers = function (num1, num2){
		var divResults = Math.ceil(num1 / num2);
		return divResults;
    };

	//multiplication function
	var multNumbers = function (num1, num2) {
		var multResults = Math.ceil(num1 * num2);
        return multResults;
    };

    //FUNCTION FOR DISPLAYING FORMS / HIDING FORMS
    function showStuff(id, other1, other2, other3, other4, other5, other6,other7) {
        document.getElementById(id).style.display = 'block';
        document.getElementById(id).style.position = 'relative';
        // hide other forms
        document.getElementById(other1).style.display = 'none';
        document.getElementById(other2).style.display = 'none';
        document.getElementById(other3).style.display = 'none';
        document.getElementById(other4).style.display = 'none';
        document.getElementById(other5).style.display = 'none';
        document.getElementById(other6).style.display = 'none';
        document.getElementById(other7).style.display = 'none';

        //scrolls down to the form
        document.getElementById(id).scrollIntoView();
    }

    function showStuff2(id, other1) {
        document.getElementById(id).style.display = 'block';
        document.getElementById(id).style.position = 'relative';
        // hide other forms
        document.getElementById(other1).style.display = 'none';
        //scrolls down to the form
        document.getElementById(id).scrollIntoView();
    }

    function showAllStuff(id, other1) {
        document.getElementById(id).style.display = 'block';
        document.getElementById(id).style.position = 'relative';
        // hide other forms
        document.getElementById(other1).style.display = 'none';
    }

 /*********Residential building math************************/
    var calcResidentialBuilding = function (numOfApts,numOfFloors){
    
        var numOfAptsPerFloor = divNumbers(numOfApts, numOfFloors);
	    var numOfElevators = divNumbers(numOfAptsPerFloor, 6);
	    var totalElevators;

	    if (numOfFloors > 20) {
	    var extraColumn = Math.ceil(numOfFloors/20);
	    totalElevators = Math.ceil(extraColumn * numOfElevators);
	    } else {
	    totalElevators = numOfElevators;    
	    }
        return totalElevators;
    };

   /*********Commercial building math***********************/
    var calcCommercialBuilding = function (numOfElevators){
       
        var totalElevators = numOfElevators;
	    return totalElevators;
    };
        
   /*********Corporate/Hybrid building math*********************/

    var calcCorporateHybridBuilding = function (numOfFloors,numOfBasements,numOfOccupantsPerFloor){
        var totalNumOfOccupants = multNumbers(numOfOccupantsPerFloor, addNumbers(numOfFloors,numOfBasements)); 	
	    var numOfElevators = Math.ceil(totalNumOfOccupants/1000);
	    var numOfColumns = Math.ceil(divNumbers(addNumbers(numOfFloors, numOfBasements), 20));
	    var totalElevators = Math.ceil(multNumbers(numOfColumns, Math.ceil(divNumbers(numOfElevators,numOfColumns))));
	
	    return totalElevators;
    }

/**************!!EVENT LISTENER ON RESIDENTIAL BUTTON!!************/
    
var residentialButtonClick= function() {
       showStuff("residential-form","commercial-form", "corporate-form", "hybrid-form","installation-form","installation-form2","installation-form3","installation-form4");
};

document.getElementById("residential-button").addEventListener("click",residentialButtonClick)


/**************!!EVENT LISTENER ON COMMERCIAL BUTTON!!************/

var commercialButtonClick= function() {
    showStuff("commercial-form","residential-form","corporate-form", "hybrid-form","installation-form","installation-form2","installation-form3","installation-form4");
};

document.getElementById("commercial-button").addEventListener("click",commercialButtonClick)


/**************!!EVENT LISTENER ON CORPORATE BUTTON!!************/

var corporateButtonClick= function() {
    showStuff("corporate-form","residential-form", "commercial-form", "hybrid-form","installation-form","installation-form2","installation-form3","installation-form4");
};

document.getElementById("corporate-button").addEventListener("click",corporateButtonClick)


/**************!!EVENT LISTENER ON HYBRID BUTTON!!**************/

var hybridButtonClick= function() {
    showStuff("hybrid-form", "residential-form", "commercial-form", "corporate-form","installation-form","installation-form2","installation-form3","installation-form4");
};

document.getElementById("hybrid-button").addEventListener("click",hybridButtonClick)  

    /***********************************************************/
   /*                   RESIDENTIAL FORM SUBMIT               */
  /***********************************************************/
var totalResidential;
var submitResidential = function () {
    showStuff2("installation-form", "residential-form");
    showAllStuff("choose-one","e")
    // get values from form (find the id’s)
    var numOfApts = parseInt(document.getElementById("apartments-residential").value);
    var numOfFloors = parseInt(document.getElementById("floors-residential").value);
    totalResidential= calcResidentialBuilding(numOfApts,numOfFloors);
    document.getElementById("number_of_elevator").innerHTML = totalResidential;
};

    document.getElementById("submit-residential-button").addEventListener("click", submitResidential);
    

//Click Radio Button
var radioButtonStandard = function() {
    var grandTotalStandard = (totalResidential * 7565 * 0.10) + (totalResidential * 7565);
    var standardFees = totalResidential * 7565 * 0.10;
    var elevatorCost = totalResidential * 7565;

    showAllStuff("e", "choose-one")
    document.getElementById("grandtotal1").innerHTML = parseFloat(grandTotalStandard).toFixed(2);
    document.getElementById("installation-cost1").innerHTML = parseFloat(standardFees).toFixed(2);
    document.getElementById("elevator-cost1").innerHTML = parseFloat(elevatorCost).toFixed(2);
    document.getElementById("installation-percentage").innerHTML = " of 10%";
};

var radioButtonPremium = function () {
    var grandTotalPremium = (totalResidential * 12345 * 0.13) + (totalResidential * 12345);
    var premiumFees = totalResidential * 12345 * 0.13;
    var elevatorCost = totalResidential * 12345;

    showAllStuff("e", "choose-one")
    document.getElementById("grandtotal1").innerHTML = parseFloat(grandTotalPremium).toFixed(2);
    document.getElementById("installation-cost1").innerHTML = parseFloat(premiumFees).toFixed(2);
    document.getElementById("elevator-cost1").innerHTML = parseFloat(elevatorCost).toFixed(2);
    document.getElementById("installation-percentage").innerHTML = " of 13%";
};

var radioButtonExcelium = function () {
    var grandTotalExcelium = (totalResidential * 15400 * 0.16) + (totalResidential * 15400);
    var exceliumFees = totalResidential * 15400 * 0.16;
    var elevatorCost = totalResidential * 15400;

    showAllStuff("e", "choose-one")
    document.getElementById("grandtotal1").innerHTML = parseFloat(grandTotalExcelium).toFixed(2);
    document.getElementById("installation-cost1").innerHTML = parseFloat(exceliumFees).toFixed(2);
    document.getElementById("elevator-cost1").innerHTML = parseFloat(elevatorCost).toFixed(2);
    document.getElementById("installation-percentage").innerHTML = " of 16%";
};

    document.querySelector('input[id="standard"]').addEventListener("click", radioButtonStandard);
    document.querySelector('input[id="premium"]').addEventListener("click", radioButtonPremium);
    document.querySelector('input[id="excelium"]').addEventListener("click", radioButtonExcelium);

    //back Button
    var backBtnClick1 = function () {
        showStuff2("residential-form","installation-form4")
    };

    document.getElementById("backbtn1").addEventListener("click",backBtnClick1);



    /***********************************************************/
   /*                   COMMERCIAL FORM SUBMIT                */
  /***********************************************************/
  var totalCommercial;
  var submitCommercial = function () {
    showStuff2("installation-form2", "commercial-form")
    showAllStuff("choose-one2","e2")
    // get values from form (find the id’s)

    var numOfElevators = parseInt(document.getElementById("elevator-commercial").value);
    
    totalCommercial = calcCommercialBuilding(numOfElevators);

    document.getElementById("number_of_elevator2").innerHTML = totalCommercial;
   
};
    document.getElementById("submit-commercial-button").addEventListener("click", submitCommercial); 
   

//Click Radio Button
var radioButtonStandardC = function() {
    var grandTotalStandard = (totalCommercial * 7565 * 0.10) + (totalCommercial * 7565);
    var standardFees = totalCommercial * 7565 * 0.10;
    var elevatorCost = totalCommercial * 7565;

    showAllStuff("e2", "choose-one2")
    document.getElementById("grandtotal2").innerHTML = parseFloat(grandTotalStandard).toFixed(2);
    document.getElementById("installation-cost2").innerHTML = parseFloat(standardFees).toFixed(2);
    document.getElementById("elevator-cost2").innerHTML = parseFloat(elevatorCost).toFixed(2);
    document.getElementById("installation-percentage2").innerHTML = " of 10%";
};

var radioButtonPremiumC = function () {
    var grandTotalPremium = (totalCommercial * 12345 * 0.13) + (totalCommercial * 12345);
    var premiumFees = totalCommercial * 12345 * 0.13;
    var elevatorCost = totalCommercial * 12345;

    showAllStuff("e2", "choose-one2")
    document.getElementById("grandtotal2").innerHTML = parseFloat(grandTotalPremium).toFixed(2);
    document.getElementById("installation-cost2").innerHTML = parseFloat(premiumFees).toFixed(2);
    document.getElementById("elevator-cost2").innerHTML = parseFloat(elevatorCost).toFixed(2);
    document.getElementById("installation-percentage2").innerHTML = " of 13%";
};

var radioButtonExceliumC = function () {
    var grandTotalExcelium = (totalCommercial * 15400 * 0.16) + (totalCommercial * 15400);
    var exceliumFees = totalCommercial * 15400 * 0.16;
    var elevatorCost = totalCommercial * 15400;

    showAllStuff("e2", "choose-one2")
    document.getElementById("grandtotal2").innerHTML = parseFloat(grandTotalExcelium).toFixed(2);
    document.getElementById("installation-cost2").innerHTML = parseFloat(exceliumFees).toFixed(2);
    document.getElementById("elevator-cost2").innerHTML = parseFloat(elevatorCost).toFixed(2);
    document.getElementById("installation-percentage2").innerHTML = " of 16%";
};

document.querySelector('input[id="standard2"]').addEventListener("click", radioButtonStandardC);
document.querySelector('input[id="premium2"]').addEventListener("click", radioButtonPremiumC);
document.querySelector('input[id="excelium2"]').addEventListener("click", radioButtonExceliumC);

    //back Button
    var backBtnClick2 = function () {
        showStuff2("commercial-form","installation-form2")
    };

    document.getElementById("backbtn2").addEventListener("click",backBtnClick2);


    /***********************************************************/
   /*                   CORPORATE FORM SUBMIT                 */
  /***********************************************************/
  var totalCorporate;

  var submitCorporate = function () {
    showStuff2("installation-form3", "corporate-form")
    showAllStuff("choose-one3","e3")

    // get values from form (find the id’s)
    var numOfFloors = parseInt(document.getElementById("floors-corporate").value);
    var numOfBasements = parseInt(document.getElementById("basements-corporate").value);
    var numOfOccupantsPerFloor = parseInt(document.getElementById("occupants-corporate").value);

    totalCorporate = calcCorporateHybridBuilding(numOfFloors,numOfBasements,numOfOccupantsPerFloor);
    document.getElementById("number_of_elevator3").innerHTML = totalCorporate;
 };

    document.getElementById("submit-corporate-button").addEventListener("click", submitCorporate);

    //Click Radio Button
var radioButtonStandardCo = function() {
    var grandTotalStandard = (totalCorporate * 7565 * 0.10) + (totalCorporate * 7565);
    var standardFees = totalCorporate * 7565 * 0.10;
    var elevatorCost = totalCorporate * 7565;

    showAllStuff("e3", "choose-one3")
    document.getElementById("grandtotal3").innerHTML = parseFloat(grandTotalStandard).toFixed(2);
    document.getElementById("installation-cost3").innerHTML = parseFloat(standardFees).toFixed(2);
    document.getElementById("elevator-cost3").innerHTML = parseFloat(elevatorCost).toFixed(2);
    document.getElementById("installation-percentage3").innerHTML = " of 10%";
};

var radioButtonPremiumCo = function () {
    var grandTotalPremium = (totalCorporate * 12345 * 0.13) + (totalCorporate * 12345);
    var premiumFees = totalCorporate * 12345 * 0.13;
    var elevatorCost = totalCorporate * 12345;

    showAllStuff("e3", "choose-one3")
    document.getElementById("grandtotal3").innerHTML = parseFloat(grandTotalPremium).toFixed(2);
    document.getElementById("installation-cost3").innerHTML = parseFloat(premiumFees).toFixed(2);
    document.getElementById("elevator-cost3").innerHTML = parseFloat(elevatorCost).toFixed(2);
    document.getElementById("installation-percentage3").innerHTML = " of 13%";
};

var radioButtonExceliumCo = function () {
    var grandTotalExcelium = (totalCorporate * 15400 * 0.16) + (totalCorporate * 15400);
    var exceliumFees = totalCorporate * 15400 * 0.16;
    var elevatorCost = totalCorporate * 15400;

    showAllStuff("e3", "choose-one3")
    document.getElementById("grandtotal3").innerHTML = parseFloat(grandTotalExcelium).toFixed(2);
    document.getElementById("installation-cost3").innerHTML = parseFloat(exceliumFees).toFixed(2);
    document.getElementById("elevator-cost3").innerHTML = parseFloat(elevatorCost).toFixed(2);
    document.getElementById("installation-percentage3").innerHTML = " of 16%";
};

    document.querySelector('input[id="standard3"]').addEventListener("click", radioButtonStandardCo);
    document.querySelector('input[id="premium3"]').addEventListener("click", radioButtonPremiumCo);
    document.querySelector('input[id="excelium3"]').addEventListener("click", radioButtonExceliumCo);

    //back Button
    var backBtnClick3 = function () {
        showStuff2("corporate-form","installation-form3")
    };

    document.getElementById("backbtn3").addEventListener("click",backBtnClick3);


    /***********************************************************/
   /*                   HYBRID FORM SUBMIT                    */
  /***********************************************************/
    var totalHybrid;
    var submitHybrid = function () {
        showStuff2("installation-form4", "hybrid-form")
        showAllStuff("choose-one4","e4")

        numOfFloors = parseInt(document.getElementById("floors-hybrid").value);
        numOfBasements = parseInt(document.getElementById("basements-hybrid").value);
        numOfOccupantsPerFloor = parseInt(document.getElementById("occupants-hybrid").value);

        totalHybrid = calcCorporateHybridBuilding(numOfFloors,numOfBasements,numOfOccupantsPerFloor);
        document.getElementById("number_of_elevator4").innerHTML = totalHybrid;
    };

    document.getElementById("submit-hybrid-button").addEventListener("click", submitHybrid);

    //Click Radio Button
    var radioButtonStandardH = function() {
        var grandTotalStandard = (totalHybrid * 7565 * 0.10) + (totalHybrid * 7565);
        var standardFees = totalHybrid * 7565 * 0.10;
        var elevatorCost = totalHybrid * 7565;
    
        showAllStuff("e4", "choose-one4")
        document.getElementById("grandtotal4").innerHTML = parseFloat(grandTotalStandard).toFixed(2);
        document.getElementById("installation-cost4").innerHTML = parseFloat(standardFees).toFixed(2);
        document.getElementById("elevator-cost4").innerHTML = parseFloat(elevatorCost).toFixed(2);
        document.getElementById("installation-percentage4").innerHTML = " of 10%";
    };

    var radioButtonPremiumH = function () {
        var grandTotalPremium = (totalHybrid * 12345 * 0.13) + (totalHybrid * 12345);
        var premiumFees = totalHybrid * 12345 * 0.13;
        var elevatorCost = totalHybrid * 12345;
    
        showAllStuff("e4", "choose-one4")
        document.getElementById("grandtotal4").innerHTML = parseFloat(grandTotalPremium).toFixed(2);
        document.getElementById("installation-cost4").innerHTML = parseFloat(premiumFees).toFixed(2);
        document.getElementById("elevator-cost4").innerHTML = parseFloat(elevatorCost).toFixed(2);
        document.getElementById("installation-percentage4").innerHTML = " of 13%";
    };

    var radioButtonExceliumH = function () {
        var grandTotalExcelium = (totalHybrid * 15400 * 0.16) + (totalHybrid * 15400);
        var exceliumFees = totalHybrid * 15400 * 0.16;
        var elevatorCost = totalHybrid * 15400;
    
        showAllStuff("e4", "choose-one4")
        document.getElementById("grandtotal4").innerHTML = parseFloat(grandTotalExcelium).toFixed(2);
        document.getElementById("installation-cost4").innerHTML = parseFloat(exceliumFees).toFixed(2);
        document.getElementById("elevator-cost4").innerHTML = parseFloat(elevatorCost).toFixed(2);
        document.getElementById("installation-percentage4").innerHTML = " of 16%";
    };

    document.querySelector('input[id="standard4"]').addEventListener("click", radioButtonStandardH);
    document.querySelector('input[id="premium4"]').addEventListener("click", radioButtonPremiumH);
    document.querySelector('input[id="excelium4"]').addEventListener("click", radioButtonExceliumH);

    //back Button
    var backBtnClick4 = function () {
        showStuff2("hybrid-form","installation-form4")
    };

    document.getElementById("backbtn4").addEventListener("click",backBtnClick4);

