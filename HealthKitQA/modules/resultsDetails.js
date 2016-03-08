/*****************************************************************
*	Name    : saveDetailsResults
*	Author  : Kony 
*	Purpose : To save results to native health app.
******************************************************************/
function saveDetailsResults() {
    var date = new Date();
    var metadata = {};
    var samOxygenSaturation = getSample(HKQuantityTypeIdentifierOxygenSaturation, HKUnit.percentUnit(), results.txtOxygenSaturation.text, date, date, metadata);
    var samPeripheralPerfusionIndex = getSample(HKQuantityTypeIdentifierPeripheralPerfusionIndex, HKUnit.percentUnit(), results.txtPPIndex.text, date, date, metadata);
    var samBloodGlucose = getSample(HKQuantityTypeIdentifierBloodGlucose, HKUnit.unitFromString('mg/dL'), results.txtBloodGlucose.text, date, date, metadata);
    var samNumberOfTimesFallen = getSample(HKQuantityTypeIdentifierNumberOfTimesFallen, HKUnit.countUnit(), results.txtNumberOfTimesFallen.text, date, date, metadata);
    var samElectrodermalActivity = getSample(HKQuantityTypeIdentifierElectrodermalActivity, HKUnit.siemenUnit(), results.txtElectrodermalActivity.text, date, date, metadata);
    var samInhalerUsage = getSample(HKQuantityTypeIdentifierInhalerUsage, HKUnit.countUnit(), results.txtInhalerUsage.text, date, date, metadata);
    var samBloodAlcoholContent = getSample(HKQuantityTypeIdentifierBloodAlcoholContent, HKUnit.percentUnit(), results.txtBloodAlcoholContent.text, date, date, metadata);
    var samForcedVitalCapacity = getSample(HKQuantityTypeIdentifierForcedVitalCapacity, HKUnit.literUnit(), results.txtForcedVitalCapacity.text, date, date, metadata);
    var samForcedExpiratoryVolume1 = getSample(HKQuantityTypeIdentifierForcedExpiratoryVolume1, HKUnit.literUnit(), results.txtForcedExpiratoryVolume1.text, date, date, metadata);
    var samPeakExpiratoryFlowRate = getSample(HKQuantityTypeIdentifierPeakExpiratoryFlowRate, HKUnit.unitFromString('L/s'), results.txtPeakExpiratoryFlowRate.text, date, date, metadata);

    var arraySamples = [samOxygenSaturation, samPeripheralPerfusionIndex, samBloodGlucose, samNumberOfTimesFallen, samElectrodermalActivity, samInhalerUsage, samBloodAlcoholContent, samForcedVitalCapacity, samForcedExpiratoryVolume1, samPeakExpiratoryFlowRate];
    healthStore.saveObjectsWithCompletion(arraySamples, function(success, error) {
        print(error)
    });
}

/*****************************************************************
*	Name    : updateResults
*	Author  : Kony 
*	Purpose : To update results to native health app.
******************************************************************/
function updateResults(oxygenSaturationLevel,peripheralPerfusionIndexLevel,bloodGlucoseLevel,numberOfTimesFallenLevel,electrodermalActivityLevel,inhalerUsageLevel,bloodAlcoholContentLevel,forcedVitalCapacityLevel,forcedExpiratoryVolume1Level,peakExpiratoryFlowRateLevel)
{
	results.lblOxygenSaturation.text = oxygenSaturationLevel;
	results.lblPPIndex.text = peripheralPerfusionIndexLevel;
	results.lblBloodGlucose.text = bloodGlucoseLevel;
	results.lblNumberOfTimesFallen.text = numberOfTimesFallenLevel;
	results.lblElectrodermalActivity.text = electrodermalActivityLevel;
	results.lblInhalerUsage.text = inhalerUsageLevel;
	results.lblBloodAlcoholContent.text = bloodAlcoholContentLevel;
	results.lblForcedVitalCapacity.text = forcedVitalCapacityLevel;
	results.lblForcedExpiratoryVolume1.text = forcedExpiratoryVolume1Level;
	results.lblPeakExpiratoryFlowRate.text = peakExpiratoryFlowRateLevel;
	
}
/*****************************************************************
*	Name    : resultsHandlerResults
*	Author  : Kony 
*	Purpose : This callback gets invoked on all queries executed in readResultsDetails function.
******************************************************************/
function resultsHandlerResults(query, resultsHdlr, error) {
    print("resultsHandler invoked : " + results);
    print("resultsHandler query sampletype is: " + query.sampleType.identifier);

    if (resultsHdlr) 
    {
        var quantitySample = resultsHdlr[0];
        // pull out the quantity from the sample
        var quantity = quantitySample.quantity;
        if (HKQuantityTypeIdentifierOxygenSaturation == query.sampleType.identifier) {
            var oxygenSaturation = HKUnit.percentUnit();
            oxygenSaturationLevel = quantity.doubleValueForUnit(oxygenSaturation);
        } else if (HKQuantityTypeIdentifierPeripheralPerfusionIndex == query.sampleType.identifier) {
            var peripheralPerfusionIndex = HKUnit.percentUnit();
            peripheralPerfusionIndexLevel = quantity.doubleValueForUnit(peripheralPerfusionIndex);
        } else if (HKQuantityTypeIdentifierBloodGlucose == query.sampleType.identifier) {
            var bloodGlucose = HKUnit.unitFromString('mg/dL');
            bloodGlucoseLevel = quantity.doubleValueForUnit(bloodGlucose);
        } else if (HKQuantityTypeIdentifierNumberOfTimesFallen == query.sampleType.identifier) {
            var numberOfTimesFallen = HKUnit.countUnit();
            numberOfTimesFallenLevel = quantity.doubleValueForUnit(numberOfTimesFallen);
        } else if (HKQuantityTypeIdentifierElectrodermalActivity == query.sampleType.identifier) {
            var electrodermalActivity = HKUnit.siemenUnit();
            electrodermalActivityLevel = quantity.doubleValueForUnit(electrodermalActivity);
        } else if (HKQuantityTypeIdentifierInhalerUsage == query.sampleType.identifier) {
            var inhalerUsage = HKUnit.countUnit();
            inhalerUsageLevel = quantity.doubleValueForUnit(inhalerUsage);
        } else if (HKQuantityTypeIdentifierBloodAlcoholContent == query.sampleType.identifier) {
            var bloodAlcoholContent = HKUnit.percentUnit();
            bloodAlcoholContentLevel = quantity.doubleValueForUnit(bloodAlcoholContent);
        } else if (HKQuantityTypeIdentifierForcedVitalCapacity == query.sampleType.identifier) {
            var forcedVitalCapacity = HKUnit.literUnit();
            forcedVitalCapacityLevel = quantity.doubleValueForUnit(forcedVitalCapacity);
        } else if (HKQuantityTypeIdentifierForcedExpiratoryVolume1 == query.sampleType.identifier) {
            var forcedExpiratoryVolume1 = HKUnit.literUnit();
            forcedExpiratoryVolume1Level = quantity.doubleValueForUnit(forcedExpiratoryVolume1);
        } else if (HKQuantityTypeIdentifierPeakExpiratoryFlowRate == query.sampleType.identifier) {
            var peakExpiratoryFlowRate = HKUnit.unitFromString('L/s');
            peakExpiratoryFlowRateLevel = quantity.doubleValueForUnit(peakExpiratoryFlowRate);
        } 
        else {
            print("received data for " + query.sampleType.identifier);
        } 
        var args = [oxygenSaturationLevel,peripheralPerfusionIndexLevel,bloodGlucoseLevel,numberOfTimesFallenLevel,electrodermalActivityLevel,inhalerUsageLevel,bloodAlcoholContentLevel,forcedVitalCapacityLevel,forcedExpiratoryVolume1Level,peakExpiratoryFlowRateLevel];
    	kony.runOnMainThread(updateResults,args);
    }
    else 
    {
        print("Error " + error + " in retrieving results for :" + query.sampleType.identifier);
    }

}

/*****************************************************************
*	Name    : readResultsDetails
*	Author  : Kony 
*	Purpose : To read results from native health app.
******************************************************************/
function readResultsDetails() {
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierOxygenSaturation, false, HKSampleSortIdentifierEndDate, resultsHandlerResults);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierPeripheralPerfusionIndex, false, HKSampleSortIdentifierEndDate, resultsHandlerResults);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierBloodGlucose, false, HKSampleSortIdentifierEndDate, resultsHandlerResults);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierNumberOfTimesFallen, false, HKSampleSortIdentifierEndDate, resultsHandlerResults);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierElectrodermalActivity, false, HKSampleSortIdentifierEndDate, resultsHandlerResults);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierInhalerUsage, false, HKSampleSortIdentifierEndDate, resultsHandlerResults);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierBloodAlcoholContent, false, HKSampleSortIdentifierEndDate, resultsHandlerResults);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierForcedVitalCapacity, false, HKSampleSortIdentifierEndDate, resultsHandlerResults);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierForcedExpiratoryVolume1, false, HKSampleSortIdentifierEndDate, resultsHandlerResults);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierPeakExpiratoryFlowRate, false, HKSampleSortIdentifierEndDate, resultsHandlerResults);
}