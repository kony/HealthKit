var widgets = {};

//The below objects will be used create widgets with specific IDs etc..for example lblDietaryBiotin, txtDietaryBiotin in nutrition form.

var nutritionObjs = ["DietaryBiotin", "DietaryCaffeine", "DietaryCalcium", "DietaryCarbohydrates", "DietaryChloride", "DietaryCholesterol", "DietaryChromium", "DietaryCopper", "DietaryEnergyConsumed", "DietaryFatMonounsaturated", "DietaryFatPolyunsaturated", "DietaryFatSaturated", "DietaryFatTotal", "DietaryFiber", "DietaryFolate", "DietaryIodine", "DietaryIron", "DietaryMagnesium", "DietaryManganese", "DietaryMolybdenum", "DietaryNiacin", "DietaryPantothenicAcid", "DietaryPhosphorus", "DietaryPotassium", "DietaryProtein", "DietaryRiboflavin", "DietarySelenium", "DietarySodium", "DietarySugar", "DietaryThiamin", "DietaryVitaminA", "DietaryVitaminB12", "DietaryVitaminB6", "DietaryVitaminC", "DietaryVitaminD", "DietaryVitaminE", "DietaryVitaminK", "DietaryZinc"];
var vitalSignsObjs = ["HeartRate", "BodyTemperature", "BloodPressureSystolic", "BloodPressureDiastolic", "RespiratoryRate"];
var resultsObjs = ["OxygenSaturation", "PPIndex", "BloodGlucose", "NumberOfTimesFallen", "ElectrodermalActivity", "InhalerUsage", "BloodAlcoholContent", "ForcedVitalCapacity", "ForcedExpiratoryVolume1", "PeakExpiratoryFlowRate"];


function print(msg){
	kony.print(msg)
}

/*****************************************************************
*	Name    : createTextbox
*	Author  : Kony 
*	Purpose : create and return a textbox widget
******************************************************************/
function createTextbox(id, text, left, top, width, height, visible) {
	print(">>>>"+text+":"+visible);
    return new kony.ui.TextBox2({
        "id": id,
        "isVisible": visible,
        "text": text,
        "skin": "sknTbxKonyThemeNormal",
        "focusSkin": "sknTbxKonyThemeFocus",
        "left": left,
        "top": top,
        "width": width,
        "height": height
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {})
}

/*****************************************************************
*	Name    : createLabel
*	Author  : Kony 
*	Purpose : create and return a label widget
******************************************************************/
function createLabel(id, text, left, top, width, height) 
{
    return new kony.ui.Label({
        "id": id,
        "isVisible": true,
        "text": text,
        "skin": "sknLblKonyThemeNormal",
        "left": left,
        "top": top,
        "width": width,
        "height": height
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {})
}


/*****************************************************************
*	Name    : drawWidgets
*	Author  : Kony 
*	Purpose : Adding widgets(label,textbox,label in a row) to nutrition,results,vital sign etc forms.
******************************************************************/
function drawWidgets(ids, flexCont, readOnly) 
{
	print(">>> Draw Widgets"+ids.length);
    for (var i = 0; i < ids.length; i++) 
    {
    	var top;
    	if(i==0)
    		top = "4%";
    	else
        	top = ((i * 12)+4) + "%";
        flexCont.add(createLabel("l" + ids[i], ids[i], "4%", top, "57%", "8%"));
        flexCont.add(createTextbox("txt" + ids[i], i, "60%", top, "19%", "8%", readOnly));
        flexCont.add(createLabel("lbl" + ids[i], "", "81%", top, "20%", "8%"));
    }
}

function smallLetter(string) {
    var s = string.substring(24, string.length)
    return s.charAt(0).toLowerCase() + s.slice(1);
}