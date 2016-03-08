/*****************************************************************
 *	Name    : saveDetailsBody
 *	Author  : Kony
 *	Purpose : To save body measurements to native health app.
 ******************************************************************/
function saveDetailsBody() {
    var date = new Date();
    var metadata = {};
    var weightSample = getSample(HKQuantityTypeIdentifierBodyMass, HKUnit.unitFromString("kg"), body.wt.text, date, date, metadata);
    var heightSample = getSample(HKQuantityTypeIdentifierHeight, HKUnit.inchUnit(), body.ht.text, date, date, metadata);
    var bodyMassIndexSample = getSample(HKQuantityTypeIdentifierBodyMassIndex, HKUnit.countUnit(), body.bmi.text, date, date, metadata);
    var bodyFatPercentageSample = getSample(HKQuantityTypeIdentifierBodyFatPercentage, HKUnit.percentUnit(), body.bfp.text, date, date, metadata);
    var leanBodyMassSample = getSample(HKQuantityTypeIdentifierLeanBodyMass, HKUnit.unitFromString("lb"), body.lmb.text, date, date, metadata);
    healthStore.saveObjectWithCompletion(heightSample, function(success, error) {
        print(error)
    });
    healthStore.saveObjectWithCompletion(weightSample, function(success, error) {
        print(error)
    });
    var arraySamples = [bodyMassIndexSample, bodyFatPercentageSample, leanBodyMassSample];
    healthStore.saveObjectsWithCompletion(arraySamples, function(success, error) {
        print(error)
    });
}
/*****************************************************************
 *	Name    : updateBodyMeasurements
 *	Author  : Kony
 *	Purpose : To update body measurements from native health app.
 ******************************************************************/
function updateBodyMeasurements(usersHeight, usersWeight, bodyMassIndexLevel, bodyFatPercentageLevel, lbmLevel) {
    body.htr.text = usersHeight + " inches";
    body.wtr.text = usersWeight.toString() + " pounds";
    body.bmir.text = bodyMassIndexLevel;
    body.bfpr.text = bodyFatPercentageLevel;
    body.lbmr.text = lbmLevel;
}
/*****************************************************************
 *	Name    : resultsHandlerBody
 *	Author  : Kony
 *	Purpose : This callback will be invoked on each query which will try to fetch the body measurement feild from readBodyDetails funtion.
 ******************************************************************/
function resultsHandlerBody(query, results, error) {
    print("resultsHandler invoked : " + results);
    print("resultsHandler query sampletype is: " + query.sampleType.identifier);
    if (results) {
        var quantitySample = results[0];
        // pull out the quantity from the sample
        var quantity = quantitySample.quantity;
        if (HKQuantityTypeIdentifierHeight == query.sampleType.identifier) {
            var heightUnit = HKUnit.inchUnit();
            usersHeight = "" + quantity.doubleValueForUnit(heightUnit);
            print("User height is: " + usersHeight);
        } else if (HKQuantityTypeIdentifierBodyMass == query.sampleType.identifier) {
            var weightUnit = HKUnit.poundUnit();
            usersWeight = "" + quantity.doubleValueForUnit(weightUnit);
            var indexOfdot = usersWeight.indexOf(".");
            if (indexOfdot !== -1) usersWeight = usersWeight.substring(0, indexOfdot + 1);
            print("User weight is: " + usersWeight);
        } else if (HKQuantityTypeIdentifierBodyMassIndex == query.sampleType.identifier) {
            var bodyMassIndexUnit = HKUnit.countUnit();
            bodyMassIndexLevel = "" + quantity.doubleValueForUnit(bodyMassIndexUnit);
            print("User bodyMassIndexLevel is: " + bodyMassIndexLevel);
        } else if (HKQuantityTypeIdentifierBodyFatPercentage == query.sampleType.identifier) {
            var bodyFatPercentage = HKUnit.percentUnit();
            bodyFatPercentageLevel = "" + quantity.doubleValueForUnit(bodyFatPercentage);
            print("User bodyFatPercentageLevel is: " + bodyFatPercentageLevel);
        } else if (HKQuantityTypeIdentifierLeanBodyMass == query.sampleType.identifier) {
            var lbmUnit = HKUnit.unitFromString("lb");
            lbmLevel = "" + quantity.doubleValueForUnit(lbmUnit);
            print("User lbmLevel is: " + lbmLevel);
        } else {
            print("received data for " + query.sampleType.identifier);
        }
        var args = [usersHeight, usersWeight, bodyMassIndexLevel, bodyFatPercentageLevel, lbmLevel];
        kony.runOnMainThread(updateBodyMeasurements, args);
    } else {
        print("Error " + error + " in retrieving results for :" + query.sampleType.identifier);
        return;
    }
}
/*****************************************************************
 *	Name    : readBodyDetails
 *	Author  : Kony
 *	Purpose : To read body measurements from native health app.
 ******************************************************************/
function readBodyDetails() {
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierHeight, false, HKSampleSortIdentifierEndDate, resultsHandlerBody);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierBodyMass, false, HKSampleSortIdentifierEndDate, resultsHandlerBody);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierBodyMassIndex, false, HKSampleSortIdentifierEndDate, resultsHandlerBody);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierBodyFatPercentage, false, HKSampleSortIdentifierEndDate, resultsHandlerBody);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierLeanBodyMass, false, HKSampleSortIdentifierEndDate, resultsHandlerBody);
}