/*****************************************************************
*	Name    : saveDetailsVitalSigns
*	Author  : Kony 
*	Purpose : To save vital signs to native health app.
******************************************************************/
function saveDetailsVitalSigns() {
    
    var date = new Date();
    var metadata = {};
    var samHeartRate = getSample(HKQuantityTypeIdentifierHeartRate, HKUnit.unitFromString('count/min'), vitalsigns.txtHeartRate.text, date, date, metadata);
    var samBodyTemperature = getSample(HKQuantityTypeIdentifierBodyTemperature, HKUnit.degreeFahrenheitUnit(), vitalsigns.txtBodyTemperature.text, date, date, metadata);
    var samBloodPressureSystolic = getSample(HKQuantityTypeIdentifierBloodPressureSystolic, HKUnit.unitFromString("mmHg"), vitalsigns.txtBloodPressureSystolic.text, date, date, metadata);
    var samBloodPressureDiastolic = getSample(HKQuantityTypeIdentifierBloodPressureDiastolic, HKUnit.unitFromString("mmHg"), vitalsigns.txtBloodPressureDiastolic.text, date, date, metadata);
    var samRespiratoryRate = getSample(HKQuantityTypeIdentifierRespiratoryRate, HKUnit.unitFromString('count/min'), vitalsigns.txtRespiratoryRate.text, date, date, metadata);

    var arraySamples = [samHeartRate, samBodyTemperature, samBloodPressureSystolic, samBloodPressureDiastolic, samRespiratoryRate];
    healthStore.saveObjectsWithCompletion(arraySamples, function(success, error) {
        print(error)
    });
}

/*****************************************************************
*	Name    : updateVitalSigns
*	Author  : Kony 
*	Purpose : To update vital signs from native health app.
******************************************************************/
function updateVitalSigns(heartRateLevel,bodyTemperatureLevel,bloodPressureSystolicLevel,bloodPressureDiastolicLevel,respiratoryRateLevel)
{
	var indexOfDotInSys = bloodPressureSystolicLevel.indexOf(".");
	if(indexOfDotInSys !== -1)
		bloodPressureSystolicLevel = bloodPressureSystolicLevel.substring(0, indexOfDotInSys+2);
		
	var indexOfDotInDia = bloodPressureDiastolicLevel.indexOf(".");
	if(indexOfDotInDia !== -1)
		bloodPressureDiastolicLevel = bloodPressureDiastolicLevel.substring(0, indexOfDotInDia+2);
		
	vitalsigns.lblHeartRate.text = heartRateLevel;
	vitalsigns.lblBodyTemperature.text = bodyTemperatureLevel+"Celsius";
	vitalsigns.lblBloodPressureSystolic.text = bloodPressureSystolicLevel+"kPa";
	vitalsigns.lblBloodPressureDiastolic.text = bloodPressureDiastolicLevel+"kPa";
	vitalsigns.lblRespiratoryRate.text = respiratoryRateLevel;
}
/*****************************************************************
*	Name    : resultsHandlerVitalsigns
*	Author  : Kony 
*	Purpose : This callback gets invoked on each query executed in readVitalSignsDetails function.
******************************************************************/
function resultsHandlerVitalsigns(query, results, error) {
    print("resultsHandler invoked : " + results);
    print("resultsHandler query sampletype is: " + query.sampleType.identifier);

    if (results) {
        var quantitySample = results[0];
        // pull out the quantity from the sample
        var quantity = quantitySample.quantity;
        if (HKQuantityTypeIdentifierHeartRate == query.sampleType.identifier) {
            var heartRate = HKUnit.unitFromString('count/min');			//Changed to per sec
            heartRateLevel = quantity.doubleValueForUnit(heartRate);
            print("User heartRateLevel is: " + heartRateLevel);
        } else if (HKQuantityTypeIdentifierBodyTemperature == query.sampleType.identifier) {
            var bodyTemperature = HKUnit.degreeCelsiusUnit();
            bodyTemperatureLevel = ""+quantity.doubleValueForUnit(bodyTemperature);
            var indexOfDot = bodyTemperatureLevel.indexOf(".");
            if(indexOfDot !== -1)
            	bodyTemperatureLevel = bodyTemperatureLevel.substring(0, indexOfDot);
            print("User bodyTemperatureLevel is: " + bodyTemperatureLevel);
        } else if (HKQuantityTypeIdentifierBloodPressureSystolic == query.sampleType.identifier) {
            var bloodPressureSystolic = HKUnit.pascalUnit();
            bloodPressureSystolicLevel = (quantity.doubleValueForUnit(bloodPressureSystolic))/1000.0;
            bloodPressureSystolicLevel = ""+bloodPressureSystolicLevel;
            var indexOfdot = bloodPressureSystolicLevel.indexOf(".");
            if(indexOfDot !== -1)
            	bloodPressureSystolicLevel = bloodPressureSystolicLevel.substring(0, indexOfDot);
            print("User bloodPressureSystolicLevel is: " + bloodPressureSystolicLevel);
        } else if (HKQuantityTypeIdentifierBloodPressureDiastolic == query.sampleType.identifier) {
            var bloodPressureDiastolic = HKUnit.pascalUnit();
            bloodPressureDiastolicLevel = (quantity.doubleValueForUnit(bloodPressureDiastolic))/1000.0;
            bloodPressureDiastolicLevel = ""+bloodPressureDiastolicLevel;
             var indexOfdot = bloodPressureDiastolicLevel.indexOf(".");
             kony.print("indexOfdot"+indexOfdot)
            if(indexOfDot !== -1)
            	bloodPressureDiastolicLevel = bloodPressureDiastolicLevel.substring(0, indexOfDot);
            print("User bloodPressureDiastolicLevel is: " + bloodPressureDiastolicLevel);
        } else if (HKQuantityTypeIdentifierRespiratoryRate == query.sampleType.identifier) {
            var respiratoryRate = HKUnit.unitFromString('count/min');
            respiratoryRateLevel = quantity.doubleValueForUnit(respiratoryRate);
            print("User respiratoryRateLevel is: " + respiratoryRateLevel);
        } else {
            print("received data for " + query.sampleType.identifier);
        }
        var args = [heartRateLevel,bodyTemperatureLevel,bloodPressureSystolicLevel,bloodPressureDiastolicLevel,respiratoryRateLevel];
    	kony.runOnMainThread(updateVitalSigns,args);
    } else {
        print("Error " + error + " in retrieving results for :" + query.sampleType.identifier);
    }
}
/*****************************************************************
*	Name    : readVitalSignsDetails
*	Author  : Kony 
*	Purpose : To read vital signs from native health app.
******************************************************************/
function readVitalSignsDetails() {
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierHeartRate, false, HKSampleSortIdentifierEndDate, resultsHandlerVitalsigns);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierBodyTemperature, false, HKSampleSortIdentifierEndDate, resultsHandlerVitalsigns);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierBloodPressureSystolic, false, HKSampleSortIdentifierEndDate, resultsHandlerVitalsigns);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierBloodPressureDiastolic, false, HKSampleSortIdentifierEndDate, resultsHandlerVitalsigns);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierRespiratoryRate, false, HKSampleSortIdentifierEndDate, resultsHandlerVitalsigns);
}