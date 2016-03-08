
function p2kwiet140781533100_body_postshow_seq0(eventobject){

initAuthBody.call(this);

};


function p2kwiet140781533100_bmSubmit_onClick_seq0(eventobject){

saveDetailsBody.call(this);

};


function p2kwiet140781533100_button17218328913545_onClick_seq0(eventobject){

readBodyDetails.call(this);

};


function p2kwiet140781533107_characteristics_postshow_seq0(eventobject){

initAuthCharacteristics.call(this);

};


function p2kwiet140781533134_fitness_postshow_seq0(eventobject){

initAuthFitness.call(this);

};


function p2kwiet140781533134_bmSubmit_onClick_seq0(eventobject){

saveFitnessDetails.call(this);

};


function p2kwiet140781533134_button17218328913545_onClick_seq0(eventobject){

readFitnessDetails.call(this);

};


function p2kwiet140781533139_frmHome_postshow_seq0(eventobject){

nutrition.destroy();
results.destroy();
vitalsigns.destroy();
characteristics.destroy();

};


function p2kwiet140781533139_segHealthMenu_onRowClick_seq0(eventobject,    sectionNumber,    rowNumber){

onRowClick_FrmHomeMenu.call(this,rowNumber);

};


function p2kwiet140781533147_nutrition_postshow_seq0(eventobject){

drawWidgets.call(this,nutritionObjs,    nutrition.flNut,    null);
initNutritionAuth.call(this);

};


function p2kwiet140781533147_button17218328914349_onClick_seq0(eventobject){

saveVitaminsDetails.call(this);

};


function p2kwiet140781533147_button17218328914391_onClick_seq0(eventobject){

readNutritionDetails.call(this);

};


function p2kwiet140781533154_results_postshow_seq0(eventobject){

drawWidgets.call(this,resultsObjs,    results.flNut,    null);
initAuthResults.call(this);

};


function p2kwiet140781533154_results_init_seq0(eventobject){

results.btnDummyResults.opacity = 0;

};


function p2kwiet140781533154_button17218328914349_onClick_seq0(eventobject){

saveDetailsResults.call(this);

};


function p2kwiet140781533154_button17218328914391_onClick_seq0(eventobject){

readResultsDetails.call(this);

};


function p2kwiet140781533160_vitalsigns_postshow_seq0(eventobject){

drawWidgets.call(this,vitalSignsObjs,    vitalsigns.flNut,    null);
initAuthVitalSigns.call(this);

};


function p2kwiet140781533160_button17218328914349_onClick_seq0(eventobject){

saveDetailsVitalSigns.call(this);

};


function p2kwiet140781533160_button17218328914391_onClick_seq0(eventobject){

readVitalSignsDetails.call(this);

};

