/*****************************************************************
 *	Name    : saveFitnessDetails
 *	Author  : Kony
 *	Purpose : To save fitness details to native health app.
 ******************************************************************/
function saveFitnessDetails() {
    var date = new Date();
    var metadata = {};
    var stepsCount = getSample(HKQuantityTypeIdentifierStepCount, HKUnit.countUnit(), fitness.steps.text, date, date, metadata);
    var ditanceWalked = getSample(HKQuantityTypeIdentifierDistanceWalkingRunning, HKUnit.meterUnitWithMetricPrefix(HKMetricPrefixKilo), fitness.walk.text, date, date, metadata);
    var distanceCycling = getSample(HKQuantityTypeIdentifierDistanceCycling, HKUnit.meterUnitWithMetricPrefix(HKMetricPrefixKilo), fitness.cycling.text, date, date, metadata);
    var basalEnergySample = getSample(HKQuantityTypeIdentifierBasalEnergyBurned, HKUnit.kilocalorieUnit(), fitness.basal.text, date, date, metadata);
    var activeEnergySample = getSample(HKQuantityTypeIdentifierActiveEnergyBurned, HKUnit.jouleUnitWithMetricPrefix(HKMetricPrefixKilo), fitness.active.text, date, date, metadata);
    var flightsSample = getSample(HKQuantityTypeIdentifierFlightsClimbed, HKUnit.countUnit(), fitness.flights.text, date, date, metadata);
    //var nikeFuelSample = getSample(HKQuantityTypeIdentifierNikeFuel, HKUnit.countUnit(), fitness.nikefuel.text, date, date, metadata);
    healthStore.saveObjectWithCompletion(stepsCount, function(success, error) {
        print("1" + error)
    });
    healthStore.saveObjectWithCompletion(ditanceWalked, function(success, error) {
        print("2" + error)
    });
    var arraySamples = [distanceCycling, basalEnergySample, activeEnergySample, flightsSample];
    healthStore.saveObjectsWithCompletion(arraySamples, function(success, error) {
        print("3" + error)
    });
}
/*****************************************************************
 *	Name    : updateFitnessDetails
 *	Author  : Kony
 *	Purpose : To update fitness details from native health app.
 ******************************************************************/
function updateFitnessDetails(stepCountLevel, distanceWalkingLevel, distanceCyclingLevel, basalEnergyLevel, activeEnergyLevel, flightsClimbedLevel) {
    fitness.stepsr.text = stepCountLevel;
    fitness.walkr.text = distanceWalkingLevel;
    fitness.cycler.text = distanceCyclingLevel;
    fitness.basalr.text = basalEnergyLevel;
    fitness.activer.text = activeEnergyLevel;
    fitness.flightsr.text = flightsClimbedLevel;
    //fitness.nikefuelr.text = nikeFuelLevel;
}
/*****************************************************************
 *	Name    : resultsHandlerFitness
 *	Author  : Kony
 *	Purpose :  This callback will be invoked on each query which will try to fetch the fitness feild from readFitnessDetails funtion.
 ******************************************************************/
function resultsHandlerFitness(query, results, error) {
    print("resultsHandler invoked : " + results);
    print("resultsHandler query sampletype is: " + query.sampleType.identifier);
    if (results) {
        var quantitySample = results[0];
        // pull out the quantity from the sample
        var quantity = quantitySample.quantity;
        if (HKQuantityTypeIdentifierStepCount == query.sampleType.identifier) {
            var stepCount = HKUnit.countUnit();
            stepCountLevel = "" + quantity.doubleValueForUnit(stepCount);
        } else if (HKQuantityTypeIdentifierDistanceWalkingRunning == query.sampleType.identifier) {
            var distanceWalking = HKUnit.meterUnitWithMetricPrefix(HKMetricPrefixKilo);
            distanceWalkingLevel = "" + quantity.doubleValueForUnit(distanceWalking);
        } else if (HKQuantityTypeIdentifierDistanceCycling == query.sampleType.identifier) {
            var distanceCycling = HKUnit.meterUnitWithMetricPrefix(HKMetricPrefixKilo);
            distanceCyclingLevel = "" + quantity.doubleValueForUnit(distanceCycling);
        } else if (HKQuantityTypeIdentifierBasalEnergyBurned == query.sampleType.identifier) {
            var basalEnergy = HKUnit.kilocalorieUnit();
            basalEnergyLevel = "" + quantity.doubleValueForUnit(basalEnergy);
        } else if (HKQuantityTypeIdentifierActiveEnergyBurned == query.sampleType.identifier) {
            var activeEnergy = HKUnit.jouleUnitWithMetricPrefix(HKMetricPrefixKilo);
            activeEnergyLevel = "" + quantity.doubleValueForUnit(activeEnergy);
        } else if (HKQuantityTypeIdentifierFlightsClimbed == query.sampleType.identifier) {
            var flightsClimbed = HKUnit.countUnit();
            flightsClimbedLevel = "" + quantity.doubleValueForUnit(flightsClimbed);
        }
        /*else if (HKQuantityTypeIdentifierNikeFuel == query.sampleType.identifier) {
            var nikeFuelType = HKUnit.countUnit();
            nikeFuelLevel = ""+quantity.doubleValueForUnit(nikeFuelType);
            
        } */
        else {
            print("received data for " + query.sampleType.identifier);
        }
        var args = [stepCountLevel, distanceWalkingLevel, distanceCyclingLevel, basalEnergyLevel, activeEnergyLevel, flightsClimbedLevel];
        kony.runOnMainThread(updateFitnessDetails, args);
    } else {
        print("Error " + error + " in retrieving results for :" + query.sampleType.identifier);
    }
}
/*****************************************************************
 *	Name    : readFitnessDetails
 *	Author  : Kony
 *	Purpose : To read fitness details from native health app.
 ******************************************************************/
function readFitnessDetails() {
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierStepCount, false, HKSampleSortIdentifierEndDate, resultsHandlerFitness);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDistanceWalkingRunning, false, HKSampleSortIdentifierEndDate, resultsHandlerFitness);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDistanceCycling, false, HKSampleSortIdentifierEndDate, resultsHandlerFitness);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierBasalEnergyBurned, false, HKSampleSortIdentifierEndDate, resultsHandlerFitness);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierActiveEnergyBurned, false, HKSampleSortIdentifierEndDate, resultsHandlerFitness);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierFlightsClimbed, false, HKSampleSortIdentifierEndDate, resultsHandlerFitness);
    //executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierNikeFuel, false, HKSampleSortIdentifierEndDate, resultsHandlerFitness);
}