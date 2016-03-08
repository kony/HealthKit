/*****************************************************************
 *	Name    : saveVitaminsDetails
 *	Author  : Kony
 *	Purpose : To save vitamin details to native health app.
 ******************************************************************/
function saveVitaminsDetails() {
    var date = new Date();
    var metadata = {};
    var samDietaryBiotin = getSample(HKQuantityTypeIdentifierDietaryBiotin, HKUnit.gramUnit(), nutrition.txtDietaryBiotin.text, date, date, metadata);
    var samDietaryCaffeine = getSample(HKQuantityTypeIdentifierDietaryCaffeine, HKUnit.gramUnit(), nutrition.txtDietaryCaffeine.text, date, date, metadata);
    var samDietaryCalcium = getSample(HKQuantityTypeIdentifierDietaryCalcium, HKUnit.gramUnit(), nutrition.txtDietaryCalcium.text, date, date, metadata);
    var samDietaryCarbohydrates = getSample(HKQuantityTypeIdentifierDietaryCarbohydrates, HKUnit.gramUnit(), nutrition.txtDietaryCarbohydrates.text, date, date, metadata);
    var samDietaryChloride = getSample(HKQuantityTypeIdentifierDietaryChloride, HKUnit.gramUnit(), nutrition.txtDietaryChloride.text, date, date, metadata);
    var samDietaryCholesterol = getSample(HKQuantityTypeIdentifierDietaryCholesterol, HKUnit.gramUnit(), nutrition.txtDietaryCholesterol.text, date, date, metadata);
    var samDietaryChromium = getSample(HKQuantityTypeIdentifierDietaryChromium, HKUnit.gramUnit(), nutrition.txtDietaryChromium.text, date, date, metadata);
    var samDietaryCopper = getSample(HKQuantityTypeIdentifierDietaryCopper, HKUnit.gramUnit(), nutrition.txtDietaryCopper.text, date, date, metadata);
    var samDietaryEnergyConsumed = getSample(HKQuantityTypeIdentifierDietaryEnergyConsumed, HKUnit.jouleUnit(), nutrition.txtDietaryEnergyConsumed.text, date, date, metadata);
    var samDietaryFatMonounsaturated = getSample(HKQuantityTypeIdentifierDietaryFatMonounsaturated, HKUnit.gramUnit(), nutrition.txtDietaryFatMonounsaturated.text, date, date, metadata);
    var samDietaryFatPolyunsaturated = getSample(HKQuantityTypeIdentifierDietaryFatPolyunsaturated, HKUnit.gramUnit(), nutrition.txtDietaryFatPolyunsaturated.text, date, date, metadata);
    var samDietaryFatSaturated = getSample(HKQuantityTypeIdentifierDietaryFatSaturated, HKUnit.gramUnit(), nutrition.txtDietaryFatSaturated.text, date, date, metadata);
    var samDietaryFatTotal = getSample(HKQuantityTypeIdentifierDietaryFatTotal, HKUnit.gramUnit(), nutrition.txtDietaryFatTotal.text, date, date, metadata);
    var samDietaryFiber = getSample(HKQuantityTypeIdentifierDietaryFiber, HKUnit.gramUnit(), nutrition.txtDietaryFiber.text, date, date, metadata);
    var samDietaryFolate = getSample(HKQuantityTypeIdentifierDietaryFolate, HKUnit.gramUnit(), nutrition.txtDietaryFolate.text, date, date, metadata);
    var samDietaryIodine = getSample(HKQuantityTypeIdentifierDietaryIodine, HKUnit.gramUnit(), nutrition.txtDietaryIodine.text, date, date, metadata);
    var samDietaryIron = getSample(HKQuantityTypeIdentifierDietaryIron, HKUnit.gramUnit(), nutrition.txtDietaryIron.text, date, date, metadata);
    var samDietaryMagnesium = getSample(HKQuantityTypeIdentifierDietaryMagnesium, HKUnit.gramUnit(), nutrition.txtDietaryMagnesium.text, date, date, metadata);
    var samDietaryManganese = getSample(HKQuantityTypeIdentifierDietaryManganese, HKUnit.gramUnit(), nutrition.txtDietaryManganese.text, date, date, metadata);
    var samDietaryMolybdenum = getSample(HKQuantityTypeIdentifierDietaryMolybdenum, HKUnit.gramUnit(), nutrition.txtDietaryMolybdenum.text, date, date, metadata);
    var samDietaryNiacin = getSample(HKQuantityTypeIdentifierDietaryNiacin, HKUnit.gramUnit(), nutrition.txtDietaryNiacin.text, date, date, metadata);
    var samDietaryPantothenicAcid = getSample(HKQuantityTypeIdentifierDietaryPantothenicAcid, HKUnit.gramUnit(), nutrition.txtDietaryPantothenicAcid.text, date, date, metadata);
    var samDietaryPhosphorus = getSample(HKQuantityTypeIdentifierDietaryPhosphorus, HKUnit.gramUnit(), nutrition.txtDietaryPhosphorus.text, date, date, metadata);
    var samDietaryPotassium = getSample(HKQuantityTypeIdentifierDietaryPotassium, HKUnit.gramUnit(), nutrition.txtDietaryPotassium.text, date, date, metadata);
    var samDietaryProtein = getSample(HKQuantityTypeIdentifierDietaryProtein, HKUnit.gramUnit(), nutrition.txtDietaryProtein.text, date, date, metadata);
    var samDietaryRiboflavin = getSample(HKQuantityTypeIdentifierDietaryRiboflavin, HKUnit.gramUnit(), nutrition.txtDietaryRiboflavin.text, date, date, metadata);
    var samDietarySelenium = getSample(HKQuantityTypeIdentifierDietarySelenium, HKUnit.gramUnit(), nutrition.txtDietarySelenium.text, date, date, metadata);
    var samDietarySodium = getSample(HKQuantityTypeIdentifierDietarySodium, HKUnit.gramUnit(), nutrition.txtDietarySodium.text, date, date, metadata);
    var samDietarySugar = getSample(HKQuantityTypeIdentifierDietarySugar, HKUnit.gramUnit(), nutrition.txtDietarySugar.text, date, date, metadata);
    var samDietaryThiamin = getSample(HKQuantityTypeIdentifierDietaryThiamin, HKUnit.gramUnit(), nutrition.txtDietaryThiamin.text, date, date, metadata);
    var samDietaryVitaminA = getSample(HKQuantityTypeIdentifierDietaryVitaminA, HKUnit.gramUnit(), nutrition.txtDietaryVitaminA.text, date, date, metadata);
    var samDietaryVitaminB12 = getSample(HKQuantityTypeIdentifierDietaryVitaminB12, HKUnit.gramUnit(), nutrition.txtDietaryVitaminB12.text, date, date, metadata);
    var samDietaryVitaminB6 = getSample(HKQuantityTypeIdentifierDietaryVitaminB6, HKUnit.gramUnit(), nutrition.txtDietaryVitaminB6.text, date, date, metadata);
    var samDietaryVitaminC = getSample(HKQuantityTypeIdentifierDietaryVitaminC, HKUnit.gramUnit(), nutrition.txtDietaryVitaminC.text, date, date, metadata);
    var samDietaryVitaminD = getSample(HKQuantityTypeIdentifierDietaryVitaminD, HKUnit.gramUnit(), nutrition.txtDietaryVitaminD.text, date, date, metadata);
    var samDietaryVitaminE = getSample(HKQuantityTypeIdentifierDietaryVitaminE, HKUnit.gramUnit(), nutrition.txtDietaryVitaminE.text, date, date, metadata);
    var samDietaryVitaminK = getSample(HKQuantityTypeIdentifierDietaryVitaminK, HKUnit.gramUnit(), nutrition.txtDietaryVitaminK.text, date, date, metadata);
    var samDietaryZinc = getSample(HKQuantityTypeIdentifierDietaryZinc, HKUnit.gramUnit(), nutrition.txtDietaryZinc.text, date, date, metadata);
    var arraySamples = [samDietaryBiotin, samDietaryCaffeine, samDietaryCalcium, samDietaryCarbohydrates, samDietaryChloride, samDietaryCholesterol, samDietaryChromium, samDietaryCopper, samDietaryEnergyConsumed, samDietaryFatMonounsaturated, samDietaryFatPolyunsaturated, samDietaryFatSaturated, samDietaryFatTotal, samDietaryFiber, samDietaryFolate, samDietaryIodine, samDietaryIron, samDietaryMagnesium, samDietaryManganese, samDietaryMolybdenum, samDietaryNiacin, samDietaryPantothenicAcid, samDietaryPhosphorus, samDietaryPotassium, samDietaryProtein, samDietaryRiboflavin, samDietarySelenium, samDietarySodium, samDietarySugar, samDietaryThiamin, samDietaryVitaminA, samDietaryVitaminB12, samDietaryVitaminB6, samDietaryVitaminC, samDietaryVitaminD, samDietaryVitaminE, samDietaryVitaminK, samDietaryZinc];
    healthStore.saveObjectsWithCompletion(arraySamples, function(success, error) {
        print("3" + error)
    });
}
/*****************************************************************
 *	Name    : updateNutritionDetails
 *	Author  : Kony
 *	Purpose : To update nutrition details from native health app.
 ******************************************************************/
function updateNutritionDetails(dietaryBiotinLevel, dietaryCaffeineLevel, dietaryCalciumLevel, dietaryCarbohydratesLevel, dietaryChlorideLevel, dietaryCholesterolLevel, dietaryChromiumLevel, dietaryCopperLevel, dietaryEnergyConsumedLevel, dietaryFatMonounsaturatedLevel, dietaryFatPolyunsaturatedLevel, dietaryFatSaturatedLevel, dietaryFatTotalLevel, dietaryFiberLevel, dietaryFolateLevel, dietaryIodineLevel, dietaryIronLevel, dietaryMagnesiumLevel, dietaryManganeseLevel, dietaryMolybdenumLevel, dietaryNiacinLevel, dietaryPantothenicAcidLevel, dietaryPhosphorusLevel, dietaryPotassiumLevel, dietaryProteinLevel, dietaryRiboflavinLevel, dietarySeleniumLevel, dietarySodiumLevel, dietarySugarLevel, dietaryThiaminLevel, dietaryVitaminALevel, dietaryVitaminB12Level, dietaryVitaminB6Level, dietaryVitaminCLevel, dietaryVitaminDLevel, dietaryVitaminELevel, dietaryVitaminKLevel, dietaryZincLevel) {
    nutrition.lblDietaryBiotin.text = dietaryBiotinLevel;
    nutrition.lblDietaryCaffeine.text = dietaryCaffeineLevel;
    nutrition.lblDietaryCalcium.text = dietaryCalciumLevel;
    nutrition.lblDietaryCarbohydrates.text = dietaryCarbohydratesLevel;
    nutrition.lblDietaryChloride.text = dietaryChlorideLevel;
    nutrition.lblDietaryCholesterol.text = dietaryCholesterolLevel;
    nutrition.lblDietaryChromium.text = dietaryChromiumLevel;
    nutrition.lblDietaryCopper.text = dietaryCopperLevel;
    nutrition.lblDietaryEnergyConsumed.text = dietaryEnergyConsumedLevel;
    nutrition.lblDietaryFatMonounsaturated.text = dietaryFatMonounsaturatedLevel;
    nutrition.lblDietaryFatPolyunsaturated.text = dietaryFatPolyunsaturatedLevel;
    nutrition.lblDietaryFatSaturated.text = dietaryFatSaturatedLevel;
    nutrition.lblDietaryFatTotal.text = dietaryFatTotalLevel;
    nutrition.lblDietaryFiber.text = dietaryFiberLevel;
    nutrition.lblDietaryFolate.text = dietaryFolateLevel;
    nutrition.lblDietaryIodine.text = dietaryIodineLevel;
    nutrition.lblDietaryIron.text = dietaryIronLevel;
    nutrition.lblDietaryMagnesium.text = dietaryMagnesiumLevel;
    nutrition.lblDietaryManganese.text = dietaryManganeseLevel;
    nutrition.lblDietaryMolybdenum.text = dietaryMolybdenumLevel;
    nutrition.lblDietaryNiacin.text = dietaryNiacinLevel;
    nutrition.lblDietaryPantothenicAcid.text = dietaryPantothenicAcidLevel;
    nutrition.lblDietaryPhosphorus.text = dietaryPhosphorusLevel;
    nutrition.lblDietaryPotassium.text = dietaryPotassiumLevel;
    nutrition.lblDietaryProtein.text = dietaryProteinLevel;
    nutrition.lblDietaryRiboflavin.text = dietaryRiboflavinLevel;
    nutrition.lblDietarySelenium.text = dietarySeleniumLevel;
    nutrition.lblDietarySodium.text = dietarySodiumLevel;
    nutrition.lblDietarySugar.text = dietarySugarLevel;
    nutrition.lblDietaryThiamin.text = dietaryThiaminLevel;
    nutrition.lblDietaryVitaminA.text = dietaryVitaminALevel;
    nutrition.lblDietaryVitaminB12.text = dietaryVitaminB12Level;
    nutrition.lblDietaryVitaminB6.text = dietaryVitaminB6Level;
    nutrition.lblDietaryVitaminC.text = dietaryVitaminCLevel;
    nutrition.lblDietaryVitaminD.text = dietaryVitaminDLevel;
    nutrition.lblDietaryVitaminE.text = dietaryVitaminELevel;
    nutrition.lblDietaryVitaminK.text = dietaryVitaminKLevel;
    nutrition.lblDietaryZinc.text = dietaryZincLevel;
}
/*****************************************************************
 *	Name    : resultsHandlerNutrition
 *	Author  : Kony
 *	Purpose : This callback will gets invoked each time the query is executed to fetch nutrition feild from readNutritionDetails function.
 ******************************************************************/
function resultsHandlerNutrition(query, results, error) {
    print("resultsHandler invoked : " + results);
    print("resultsHandler query sampletype is: " + query.sampleType.identifier);
    if (results) {
        var quantitySample = results[0];
        // pull out the quantity from the sample
        var quantity = quantitySample.quantity;
        if (HKQuantityTypeIdentifierDietaryBiotin == query.sampleType.identifier) {
            var dietaryBiotin = HKUnit.gramUnit();
            dietaryBiotinLevel = quantity.doubleValueForUnit(dietaryBiotin);
            print("User dietaryBiotinLevel is: " + dietaryBiotinLevel);
        } else if (HKQuantityTypeIdentifierDietaryCaffeine == query.sampleType.identifier) {
            var dietaryCaffeine = HKUnit.gramUnit();
            dietaryCaffeineLevel = quantity.doubleValueForUnit(dietaryCaffeine);
            print("User dietaryCaffeineLevel is: " + dietaryCaffeineLevel);
        } else if (HKQuantityTypeIdentifierDietaryCalcium == query.sampleType.identifier) {
            var dietaryCalcium = HKUnit.gramUnit();
            dietaryCalciumLevel = quantity.doubleValueForUnit(dietaryCalcium);
            print("User dietaryCalciumLevel is: " + dietaryCalciumLevel);
        } else if (HKQuantityTypeIdentifierDietaryCarbohydrates == query.sampleType.identifier) {
            var dietaryCarbohydrates = HKUnit.gramUnit();
            dietaryCarbohydratesLevel = quantity.doubleValueForUnit(dietaryCarbohydrates);
            print("User dietaryCarbohydratesLevel is: " + dietaryCarbohydratesLevel);
        } else if (HKQuantityTypeIdentifierDietaryChloride == query.sampleType.identifier) {
            var dietaryChloride = HKUnit.gramUnit();
            dietaryChlorideLevel = quantity.doubleValueForUnit(dietaryChloride);
            print("User dietaryChlorideLevel is: " + dietaryChlorideLevel);
        } else if (HKQuantityTypeIdentifierDietaryCholesterol == query.sampleType.identifier) {
            var dietaryCholesterol = HKUnit.gramUnit();
            dietaryCholesterolLevel = quantity.doubleValueForUnit(dietaryCholesterol);
            print("User dietaryCholesterolLevel is: " + dietaryCholesterolLevel);
        } else if (HKQuantityTypeIdentifierDietaryChromium == query.sampleType.identifier) {
            var dietaryChromium = HKUnit.gramUnit();
            dietaryChromiumLevel = quantity.doubleValueForUnit(dietaryChromium);
            print("User dietaryChromiumLevel is: " + dietaryChromiumLevel);
        } else if (HKQuantityTypeIdentifierDietaryCopper == query.sampleType.identifier) {
            var dietaryCopper = HKUnit.gramUnit();
            dietaryCopperLevel = quantity.doubleValueForUnit(dietaryCopper);
            print("User dietaryCopperLevel is: " + dietaryCopperLevel);
        } else if (HKQuantityTypeIdentifierDietaryEnergyConsumed == query.sampleType.identifier) {
            var dietaryEnergyConsumed = HKUnit.jouleUnit();
            dietaryEnergyConsumedLevel = quantity.doubleValueForUnit(dietaryEnergyConsumed);
            print("User dietaryEnergyConsumedLevel is: " + dietaryEnergyConsumedLevel);
        } else if (HKQuantityTypeIdentifierDietaryFatMonounsaturated == query.sampleType.identifier) {
            var dietaryFatMonounsaturated = HKUnit.gramUnit();
            dietaryFatMonounsaturatedLevel = quantity.doubleValueForUnit(dietaryFatMonounsaturated);
            print("User dietaryFatMonounsaturatedLevel is: " + dietaryFatMonounsaturatedLevel);
        } else if (HKQuantityTypeIdentifierDietaryFatPolyunsaturated == query.sampleType.identifier) {
            var dietaryFatPolyunsaturated = HKUnit.gramUnit();
            dietaryFatPolyunsaturatedLevel = quantity.doubleValueForUnit(dietaryFatPolyunsaturated);
            print("User dietaryFatPolyunsaturatedLevel is: " + dietaryFatPolyunsaturatedLevel);
        } else if (HKQuantityTypeIdentifierDietaryFatSaturated == query.sampleType.identifier) {
            var dietaryFatSaturated = HKUnit.gramUnit();
            dietaryFatSaturatedLevel = quantity.doubleValueForUnit(dietaryFatSaturated);
            print("User dietaryFatSaturatedLevel is: " + dietaryFatSaturatedLevel);
        } else if (HKQuantityTypeIdentifierDietaryFatTotal == query.sampleType.identifier) {
            var dietaryFatTotal = HKUnit.gramUnit();
            dietaryFatTotalLevel = quantity.doubleValueForUnit(dietaryFatTotal);
            print("User dietaryFatTotalLevel is: " + dietaryFatTotalLevel);
        } else if (HKQuantityTypeIdentifierDietaryFiber == query.sampleType.identifier) {
            var dietaryFiber = HKUnit.gramUnit();
            dietaryFiberLevel = quantity.doubleValueForUnit(dietaryFiber);
            print("User dietaryFiberLevel is: " + dietaryFiberLevel);
        } else if (HKQuantityTypeIdentifierDietaryFolate == query.sampleType.identifier) {
            var dietaryFolate = HKUnit.gramUnit();
            dietaryFolateLevel = quantity.doubleValueForUnit(dietaryFolate);
            print("User dietaryFolateLevel is: " + dietaryFolateLevel);
        } else if (HKQuantityTypeIdentifierDietaryIodine == query.sampleType.identifier) {
            var dietaryIodine = HKUnit.gramUnit();
            dietaryIodineLevel = quantity.doubleValueForUnit(dietaryIodine);
            print("User dietaryIodineLevel is: " + dietaryIodineLevel);
        } else if (HKQuantityTypeIdentifierDietaryIron == query.sampleType.identifier) {
            var dietaryIron = HKUnit.gramUnit();
            dietaryIronLevel = quantity.doubleValueForUnit(dietaryIron);
            print("User dietaryIronLevel is: " + dietaryIronLevel);
        } else if (HKQuantityTypeIdentifierDietaryMagnesium == query.sampleType.identifier) {
            var dietaryMagnesium = HKUnit.gramUnit();
            dietaryMagnesiumLevel = quantity.doubleValueForUnit(dietaryMagnesium);
            print("User dietaryMagnesiumLevel is: " + dietaryMagnesiumLevel);
        } else if (HKQuantityTypeIdentifierDietaryManganese == query.sampleType.identifier) {
            var dietaryManganese = HKUnit.gramUnit();
            dietaryManganeseLevel = quantity.doubleValueForUnit(dietaryManganese);
            print("User dietaryManganeseLevel is: " + dietaryManganeseLevel);
        } else if (HKQuantityTypeIdentifierDietaryMolybdenum == query.sampleType.identifier) {
            var dietaryMolybdenum = HKUnit.gramUnit();
            dietaryMolybdenumLevel = quantity.doubleValueForUnit(dietaryMolybdenum);
            print("User dietaryMolybdenumLevel is: " + dietaryMolybdenumLevel);
        } else if (HKQuantityTypeIdentifierDietaryNiacin == query.sampleType.identifier) {
            var dietaryNiacin = HKUnit.gramUnit();
            dietaryNiacinLevel = quantity.doubleValueForUnit(dietaryNiacin);
            print("User dietaryNiacinLevel is: " + dietaryNiacinLevel);
        } else if (HKQuantityTypeIdentifierDietaryPantothenicAcid == query.sampleType.identifier) {
            var dietaryPantothenicAcid = HKUnit.gramUnit();
            dietaryPantothenicAcidLevel = quantity.doubleValueForUnit(dietaryPantothenicAcid);
            print("User dietaryPantothenicAcidLevel is: " + dietaryPantothenicAcidLevel);
        } else if (HKQuantityTypeIdentifierDietaryPhosphorus == query.sampleType.identifier) {
            var dietaryPhosphorus = HKUnit.gramUnit();
            dietaryPhosphorusLevel = quantity.doubleValueForUnit(dietaryPhosphorus);
            print("User dietaryPhosphorusLevel is: " + dietaryPhosphorusLevel);
        } else if (HKQuantityTypeIdentifierDietaryPotassium == query.sampleType.identifier) {
            var dietaryPotassium = HKUnit.gramUnit();
            dietaryPotassiumLevel = quantity.doubleValueForUnit(dietaryPotassium);
            print("User dietaryPotassiumLevel is: " + dietaryPotassiumLevel);
        } else if (HKQuantityTypeIdentifierDietaryProtein == query.sampleType.identifier) {
            var dietaryProtein = HKUnit.gramUnit();
            dietaryProteinLevel = quantity.doubleValueForUnit(dietaryProtein);
            print("User dietaryProteinLevel is: " + dietaryProteinLevel);
        } else if (HKQuantityTypeIdentifierDietaryRiboflavin == query.sampleType.identifier) {
            var dietaryRiboflavin = HKUnit.gramUnit();
            dietaryRiboflavinLevel = quantity.doubleValueForUnit(dietaryRiboflavin);
            print("User dietaryRiboflavinLevel is: " + dietaryRiboflavinLevel);
        } else if (HKQuantityTypeIdentifierDietarySelenium == query.sampleType.identifier) {
            var dietarySelenium = HKUnit.gramUnit();
            dietarySeleniumLevel = quantity.doubleValueForUnit(dietarySelenium);
            print("User dietarySeleniumLevel is: " + dietarySeleniumLevel);
        } else if (HKQuantityTypeIdentifierDietarySodium == query.sampleType.identifier) {
            var dietarySodium = HKUnit.gramUnit();
            dietarySodiumLevel = quantity.doubleValueForUnit(dietarySodium);
            print("User dietarySodiumLevel is: " + dietarySodiumLevel);
        } else if (HKQuantityTypeIdentifierDietarySugar == query.sampleType.identifier) {
            var dietarySugar = HKUnit.gramUnit();
            dietarySugarLevel = quantity.doubleValueForUnit(dietarySugar);
            print("User dietarySugarLevel is: " + dietarySugarLevel);
        } else if (HKQuantityTypeIdentifierDietaryThiamin == query.sampleType.identifier) {
            var dietaryThiamin = HKUnit.gramUnit();
            dietaryThiaminLevel = quantity.doubleValueForUnit(dietaryThiamin);
            print("User dietaryThiaminLevel is: " + dietaryThiaminLevel);
        } else if (HKQuantityTypeIdentifierDietaryVitaminA == query.sampleType.identifier) {
            var dietaryVitaminA = HKUnit.gramUnit();
            dietaryVitaminALevel = quantity.doubleValueForUnit(dietaryVitaminA);
            print("User dietaryVitaminALevel is: " + dietaryVitaminALevel);
        } else if (HKQuantityTypeIdentifierDietaryVitaminB12 == query.sampleType.identifier) {
            var dietaryVitaminB12 = HKUnit.gramUnit();
            dietaryVitaminB12Level = quantity.doubleValueForUnit(dietaryVitaminB12);
            print("User dietaryVitaminB12Level is: " + dietaryVitaminB12Level);
        } else if (HKQuantityTypeIdentifierDietaryVitaminB6 == query.sampleType.identifier) {
            var dietaryVitaminB6 = HKUnit.gramUnit();
            dietaryVitaminB6Level = quantity.doubleValueForUnit(dietaryVitaminB6);
            print("User dietaryVitaminB6Level is: " + dietaryVitaminB6Level);
        } else if (HKQuantityTypeIdentifierDietaryVitaminC == query.sampleType.identifier) {
            var dietaryVitaminC = HKUnit.gramUnit();
            dietaryVitaminCLevel = quantity.doubleValueForUnit(dietaryVitaminC);
            print("User dietaryVitaminCLevel is: " + dietaryVitaminCLevel);
        } else if (HKQuantityTypeIdentifierDietaryVitaminD == query.sampleType.identifier) {
            var dietaryVitaminD = HKUnit.gramUnit();
            dietaryVitaminDLevel = quantity.doubleValueForUnit(dietaryVitaminD);
            print("User dietaryVitaminDLevel is: " + dietaryVitaminDLevel);
        } else if (HKQuantityTypeIdentifierDietaryVitaminE == query.sampleType.identifier) {
            var dietaryVitaminE = HKUnit.gramUnit();
            dietaryVitaminELevel = quantity.doubleValueForUnit(dietaryVitaminE);
            print("User dietaryVitaminELevel is: " + dietaryVitaminELevel);
        } else if (HKQuantityTypeIdentifierDietaryVitaminK == query.sampleType.identifier) {
            var dietaryVitaminK = HKUnit.gramUnit();
            dietaryVitaminKLevel = quantity.doubleValueForUnit(dietaryVitaminK);
            print("User dietaryVitaminKLevel is: " + dietaryVitaminKLevel);
        } else if (HKQuantityTypeIdentifierDietaryZinc == query.sampleType.identifier) {
            var dietaryZinc = HKUnit.gramUnit();
            dietaryZincLevel = quantity.doubleValueForUnit(dietaryZinc);
            print("User dietaryZincLevel is: " + dietaryZincLevel);
        } else {
            print("received data for " + query.sampleType.identifier);
        }
        var args = [dietaryBiotinLevel, dietaryCaffeineLevel, dietaryCalciumLevel, dietaryCarbohydratesLevel, dietaryChlorideLevel, dietaryCholesterolLevel, dietaryChromiumLevel, dietaryCopperLevel, dietaryEnergyConsumedLevel, dietaryFatMonounsaturatedLevel, dietaryFatPolyunsaturatedLevel, dietaryFatSaturatedLevel, dietaryFatTotalLevel, dietaryFiberLevel, dietaryFolateLevel, dietaryIodineLevel, dietaryIronLevel, dietaryMagnesiumLevel, dietaryManganeseLevel, dietaryMolybdenumLevel, dietaryNiacinLevel, dietaryPantothenicAcidLevel, dietaryPhosphorusLevel, dietaryPotassiumLevel, dietaryProteinLevel, dietaryRiboflavinLevel, dietarySeleniumLevel, dietarySodiumLevel, dietarySugarLevel, dietaryThiaminLevel, dietaryVitaminALevel, dietaryVitaminB12Level, dietaryVitaminB6Level, dietaryVitaminCLevel, dietaryVitaminDLevel, dietaryVitaminELevel, dietaryVitaminKLevel, dietaryZincLevel];
        kony.runOnMainThread(updateNutritionDetails, args);
    } else {
        print("Error " + error + " in retrieving results for :" + query.sampleType.identifier);
    }
}
/*****************************************************************
 *	Name    : readNutritionDetails
 *	Author  : Kony
 *	Purpose : To read nutrition details from native health app.
 ******************************************************************/
function readNutritionDetails() {
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryBiotin, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryCaffeine, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryCalcium, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryCarbohydrates, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryChloride, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryCholesterol, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryChromium, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryCopper, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryEnergyConsumed, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryFatMonounsaturated, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryFatPolyunsaturated, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryFatSaturated, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryFatTotal, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryFiber, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryFolate, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryIodine, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryIron, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryMagnesium, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryManganese, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryMolybdenum, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryNiacin, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryPantothenicAcid, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryPhosphorus, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryPotassium, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryProtein, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryRiboflavin, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietarySelenium, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietarySodium, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietarySugar, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryThiamin, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryVitaminA, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryVitaminB12, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryVitaminB6, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryVitaminC, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryVitaminD, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryVitaminE, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryVitaminK, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
    executeQueryLimitSortDescriptors(HKQuantityTypeIdentifierDietaryZinc, false, HKSampleSortIdentifierEndDate, resultsHandlerNutrition);
}