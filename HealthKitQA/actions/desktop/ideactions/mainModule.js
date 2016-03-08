var healthStore = HKHealthStore.alloc().jsinit();

/*****************************************************************
*	Name    : onRowClick_FrmHomeMenu
*	Author  : Kony 
*	Purpose : Based on the row index , Navigate to respective form.
******************************************************************/
function onRowClick_FrmHomeMenu(rowIndex)
{
	var selectedIndex = rowIndex;
	if(selectedIndex == 0)
		body.show();
	else if(selectedIndex == 1)
		fitness.show();
	else if (selectedIndex == 2)
		vitalsigns.show();
	else if (selectedIndex == 3) 
		results.show();
	else if(selectedIndex == 4)
		nutrition.show();
	else
		characteristics.show();	

}

/*****************************************************************
*	Name    : initAuthBody
*	Author  : Kony 
*	Purpose : This method requesta authorization from Native Health app to read/share body measurements.
******************************************************************/
function initAuthBody() {
    var available = HKHealthStore.isHealthDataAvailable();
    var heightType = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierHeight);
    var weightType = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBodyMass);
    var bodyMassIndex = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBodyMassIndex);
    var bodyFatPercentage = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBodyFatPercentage);
    var leanBodyMass = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierLeanBodyMass);
    var dataTypesToRead = [heightType, weightType, bodyMassIndex, bodyFatPercentage, leanBodyMass];
    var dataTypes = NSSet.setWithArray(dataTypesToRead);
    if (available) {
        healthStore.requestAuthorizationToShareTypesReadTypesCompletion(dataTypes, dataTypes, authCallback);
    }
}

/*****************************************************************
*	Name    : initNutritionAuth
*	Author  : Kony 
*	Purpose : This method requesta authorization from Mative Health app to read/share nutrition details.
******************************************************************/
function initNutritionAuth() {
    var available = HKHealthStore.isHealthDataAvailable();
    var idDietaryBiotin = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryBiotin);
    var idDietaryCaffeine = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryCaffeine);
    var idDietaryCalcium = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryCalcium);
    var idDietaryCarbohydrates = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryCarbohydrates);
    var idDietaryChloride = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryChloride);
    var idDietaryCholesterol = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryCholesterol);
    var idDietaryChromium = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryChromium);
    var idDietaryCopper = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryCopper);
    var idDietaryEnergyConsumed = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryEnergyConsumed);
    var idDietaryFatMonounsaturated = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryFatMonounsaturated);
    var idDietaryFatPolyunsaturated = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryFatPolyunsaturated);
    var idDietaryFatSaturated = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryFatSaturated);
    var idDietaryFatTotal = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryFatTotal);
    var idDietaryFiber = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryFiber);
    var idDietaryFolate = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryFolate);
    var idDietaryIodine = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryIodine);
    var idDietaryIron = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryIron);
    var idDietaryMagnesium = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryMagnesium);
    var idDietaryManganese = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryManganese);
    var idDietaryMolybdenum = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryMolybdenum);
    var idDietaryNiacin = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryNiacin);
    var idDietaryPantothenicAcid = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryPantothenicAcid);
    var idDietaryPhosphorus = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryPhosphorus);
    var idDietaryPotassium = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryPotassium);
    var idDietaryProtein = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryProtein);
    var idDietaryRiboflavin = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryRiboflavin);
    var idDietarySelenium = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietarySelenium);
    var idDietarySodium = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietarySodium);
    var idDietarySugar = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietarySugar);
    var idDietaryThiamin = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryThiamin);
    var idDietaryVitaminA = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryVitaminA);
    var idDietaryVitaminB12 = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryVitaminB12);
    var idDietaryVitaminB6 = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryVitaminB6);
    var idDietaryVitaminC = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryVitaminC);
    var idDietaryVitaminD = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryVitaminD);
    var idDietaryVitaminE = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryVitaminE);
    var idDietaryVitaminK = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryVitaminK);
    var idDietaryZinc = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDietaryZinc);
    var dataTypesToRead = [idDietaryBiotin, idDietaryCaffeine, idDietaryCalcium, idDietaryCarbohydrates, idDietaryChloride, idDietaryCholesterol, idDietaryChromium, idDietaryCopper, idDietaryEnergyConsumed, idDietaryFatMonounsaturated, idDietaryFatPolyunsaturated, idDietaryFatSaturated, idDietaryFatTotal, idDietaryFiber, idDietaryFolate, idDietaryIodine, idDietaryIron, idDietaryMagnesium, idDietaryManganese, idDietaryMolybdenum, idDietaryNiacin, idDietaryPantothenicAcid, idDietaryPhosphorus, idDietaryPotassium, idDietaryProtein, idDietaryRiboflavin, idDietarySelenium, idDietarySodium, idDietarySugar, idDietaryThiamin, idDietaryVitaminA, idDietaryVitaminB12, idDietaryVitaminB6, idDietaryVitaminC, idDietaryVitaminD, idDietaryVitaminE, idDietaryVitaminK, idDietaryZinc];
    var dataTypes = NSSet.setWithArray(dataTypesToRead);
    if (available) {
        healthStore.requestAuthorizationToShareTypesReadTypesCompletion(dataTypes, dataTypes, authCallback);
    }
}

/*****************************************************************
*	Name    : initAuthFitness
*	Author  : Kony 
*	Purpose : This method requesta authorization from Mative Health app to read/share fitness details.
******************************************************************/
function initAuthFitness() {
    print("Im Here");
    var available = HKHealthStore.isHealthDataAvailable();
    var stepCount = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierStepCount);
    var walking = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDistanceWalkingRunning);
    var cycling = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierDistanceCycling);
    var basalEnergy = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBasalEnergyBurned);
    var activeEnergy = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierActiveEnergyBurned);
    var flightsClimbed = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierFlightsClimbed);
    print("Im Here 1");
    var nikeFuel = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierNikeFuel);
    var dataTypesToRead = [stepCount, walking, cycling, basalEnergy, activeEnergy, flightsClimbed];
    var dataTypesToWrite = [stepCount, walking, cycling, basalEnergy, activeEnergy, flightsClimbed, nikeFuel];
    var dataTypesR = NSSet.setWithArray(dataTypesToRead);
    var dataTypesW = NSSet.setWithArray(dataTypesToWrite);
    print("Im Here 2");
    if (available) {
        healthStore.requestAuthorizationToShareTypesReadTypesCompletion(dataTypesR, dataTypesW, authCallback);
    }
    print("Im Here 3");
}

/*****************************************************************
*	Name    : initAuthVitalSigns
*	Author  : Kony 
*	Purpose : This method requesta authorization from Mative Health app to read/share vital sign details.
******************************************************************/
function initAuthVitalSigns() {
    print("Im Init Auth VitalSigns");
    var available = HKHealthStore.isHealthDataAvailable();
    var idHeartRate = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierHeartRate);
    var idBodyTemperature = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBodyTemperature);
    var idBloodPressureSystolic = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBloodPressureSystolic);
    var idBloodPressureDiastolic = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBloodPressureDiastolic);
    var idRespiratoryRate = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierRespiratoryRate);
    var dataTypesToRead = [idHeartRate, idBodyTemperature, idBloodPressureSystolic, idBloodPressureDiastolic, idRespiratoryRate];
    var dataTypes = NSSet.setWithArray(dataTypesToRead);
    if (available) {
        healthStore.requestAuthorizationToShareTypesReadTypesCompletion(dataTypes, dataTypes, authCallback);
    }
}

/*****************************************************************
*	Name    : initAuthResults
*	Author  : Kony 
*	Purpose : This method requesta authorization from Mative Health app to read/share result details.
******************************************************************/
function initAuthResults() {
    print("Im Init Auth Result");
    var available = HKHealthStore.isHealthDataAvailable();
    var idOxygenSaturation = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierOxygenSaturation);
    var idPeripheralPerfusionIndex = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierPeripheralPerfusionIndex);
    var idBloodGlucose = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBloodGlucose);
    var idNumberOfTimesFallen = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierNumberOfTimesFallen);
    var idElectrodermalActivity = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierElectrodermalActivity);
    var idInhalerUsage = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierInhalerUsage);
    var idBloodAlcoholContent = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierBloodAlcoholContent);
    var idForcedVitalCapacity = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierForcedVitalCapacity);
    var idForcedExpiratoryVolume1 = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierForcedExpiratoryVolume1);
    var idPeakExpiratoryFlowRate = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierPeakExpiratoryFlowRate);

    var dataTypesToRead = [idOxygenSaturation, idPeripheralPerfusionIndex, idBloodGlucose, idNumberOfTimesFallen, idElectrodermalActivity, idInhalerUsage, idBloodAlcoholContent, idForcedVitalCapacity, idForcedExpiratoryVolume1, idPeakExpiratoryFlowRate];
    var dataTypes = NSSet.setWithArray(dataTypesToRead);
    if (available) {
        healthStore.requestAuthorizationToShareTypesReadTypesCompletion(dataTypes, dataTypes, authCallback);
    }
}


/*****************************************************************
*	Name    : initAuthCharacteristics
*	Author  : Kony 
*	Purpose : This method requesta authorization from Native Health app to read/share characteristics.
******************************************************************/
function initAuthCharacteristics() {
    print("Im Init Auth Characteristics");
    var available = HKHealthStore.isHealthDataAvailable();
    var s1 = HKObjectType.characteristicTypeForIdentifier(HKCharacteristicTypeIdentifierBiologicalSex);
    var s2 = HKObjectType.characteristicTypeForIdentifier(HKCharacteristicTypeIdentifierBloodType);
    var s3 = HKObjectType.characteristicTypeForIdentifier(HKCharacteristicTypeIdentifierDateOfBirth);
    var dataTypesToRead = [s1,s2,s3];
    var dataTypes = NSSet.setWithArray(dataTypesToRead);
    if (available) {
        healthStore.requestAuthorizationToShareTypesReadTypesCompletion(null, dataTypes, authCallback);
    }
}

/*****************************************************************
*	Name    : authCallback
*	Author  : Kony 
*	Purpose : This callback will get invoked on all authorization requests like body measurements etc.
******************************************************************/
function authCallback(success, errorObj) {
    if (success) {
        kony.print("Healthkit permissions granted");
    } else {
        kony.print("Sorry! You do not have permissions to access Healthkit data: " + errorObj.error);
    }
}

/*****************************************************************
*	Name    : getSample
*	Author  : Kony 
*	Purpose : To get sample of a particular field for example height
******************************************************************/
function getSample(hkQuantityIdentifier, unitType, unitValue, startDate, endDate, metaData) {
    var identifierType = HKObjectType.quantityTypeForIdentifier(hkQuantityIdentifier);
    var identifierQuantity = HKQuantity.quantityWithUnitDoubleValue(unitType, unitValue);
    return HKQuantitySample.quantitySampleWithTypeQuantityStartDateEndDateMetadata(identifierType, identifierQuantity, startDate, endDate, metaData);
}

function getSampleCategory(hkQuantityIdentifier, unitType, startDate, endDate, metaData) {
	print("2");
    var identifierType = HKObjectType.categoryTypeForIdentifier(hkQuantityIdentifier);
    print("3");
    //var identifierQuantity = HKQuantity.quantityWithUnitDoubleValue(unitType, unitValue);
    print("4");
    return HKCategorySample.categorySampleWithTypeValueStartDateEndDateMetadata(identifierType, unitType, startDate, endDate, metaData);
}


/*****************************************************************
*	Name    : executeQueryLimitSortDescriptors
*	Author  : Kony 
*	Purpose : Execute query to read a field value from native health app for example height.
******************************************************************/
function executeQueryLimitSortDescriptors(hkQuantityIdentifier, isAscend, sortIdentifierEndDate, resultHandler) {
    var identifierType = HKQuantityType.quantityTypeForIdentifier(hkQuantityIdentifier);
    // Since we are interested in retrieving the user's latest sample
    // we sort the samples in descending order by end date
    // and set the limit to 1
    var timeSortDescriptor = NSSortDescriptor.alloc().initWithKeyAscending(sortIdentifierEndDate, isAscend);
    var sortDescriptors = [timeSortDescriptor];
    // construct the query & since we are not filtering the data the predicate is set to null
    var query = HKSampleQuery.alloc().initWithSampleTypePredicateLimitSortDescriptorsResultsHandler(identifierType, null, 1, sortDescriptors, resultHandler);
    // do not forget to execute the query after its constructed
    healthStore.executeQuery(query);
}

function executeQueryLimitSortDescriptorsCategory(hkQuantityIdentifier, isAscend, sortIdentifierEndDate, resultHandler) {
    var identifierType = HKQuantityType.categoryTypeForIdentifier(hkQuantityIdentifier);
    // Since we are interested in retrieving the user's latest sample
    // we sort the samples in descending order by end date
    // and set the limit to 1
    var timeSortDescriptor = NSSortDescriptor.alloc().initWithKeyAscending(sortIdentifierEndDate, isAscend);
    var sortDescriptors = [timeSortDescriptor];
    print("executeQueryLimitSortDescriptorsCategory")
    // construct the query & since we are not filtering the data the predicate is set to null
    var query = HKSampleQuery.alloc().initWithSampleTypePredicateLimitSortDescriptorsResultsHandler(identifierType, null, 1, sortDescriptors, resultHandler);
    // do not forget to execute the query after its constructed
	print("2"+healthStore)
    healthStore.executeQuery(query);
}