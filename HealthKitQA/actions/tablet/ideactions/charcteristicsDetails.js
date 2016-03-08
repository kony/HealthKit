/*****************************************************************
*	Name    : readCharacteristicsDetails
*	Author  : Kony 
*	Purpose : To read characteristics from native health app and update in kony app.
******************************************************************/
function readCharacteristicsDetails() {
	var healthStore = HKHealthStore.alloc().jsinit();
	var biologicalSex = healthStore.biologicalSexWithError(null);
    if (biologicalSex != null) {
        switch (biologicalSex.biologicalSex) {
            case HKBiologicalSexFemale:
                //print("female");
				characteristics.lblIdentifierBiologicalSex.text =  "Sex: Female";
                break;
            case HKBiologicalSexMale:
                //print("male");
				characteristics.lblIdentifierBiologicalSex.text = "Sex: Male";
                break;
           
            case HKBiologicalSexNotSet:
                //print("male");
				characteristics.lblIdentifierBiologicalSex.text = "Sex: Not Set";
            	break;
        }
    }

    var birthdate = healthStore.dateOfBirthWithError(null);
       if (birthdate != null) {
        print(birthdate);
        var dateFormatter = NSDateFormatter.alloc().jsinit();
        dateFormatter.dateFormat = "dd-MM-yyyy";
        characteristics.lblIdentifierDateOfBirth.text = "Date of birth : "+dateFormatter.stringFromDate(birthdate);
    }
    
    var bloodGroup = healthStore.bloodTypeWithError(null);
    if (bloodGroup != null) {
        switch (bloodGroup.bloodType) {
            case HKBloodTypeNotSet:
				characteristics.lblIdentifierBloodType.text = "Blood group : Not Set";
                break;
            case HKBloodTypeAPositive:
				characteristics.lblIdentifierBloodType.text = "Blood group : A+";
                break;
            case HKBloodTypeANegative:
				characteristics.lblIdentifierBloodType.text =  "Blood group : A-";
                break;
            case HKBloodTypeBPositive:
				characteristics.lblIdentifierBloodType.text = "Blood group : B+";
                break;
            case HKBloodTypeBNegative:
				characteristics.lblIdentifierBloodType.text =  "Blood group : B-";
                break;
            case HKBloodTypeABPositive:
				characteristics.lblIdentifierBloodType.text = "Blood group : AB+";
                break;
            case HKBloodTypeABNegative:
				characteristics.lblIdentifierBloodType.text =  "Blood group : AB-";
                break;
            case HKBloodTypeOPositive:
				characteristics.lblIdentifierBloodType.text =  "Blood group : O+";
                break;
            case HKBloodTypeONegative:
				characteristics.lblIdentifierBloodType.text = "Blood group : O-";
                break;
            default:
                break;
        }
    }
}