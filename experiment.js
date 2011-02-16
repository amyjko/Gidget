GIDGET.experiment = {

<<<<<<< HEAD
	condition: "control"	// control, male, female

=======
	condition: "control",	// control, male, female
	
	isControl: function() {
	
		if (this.condition === "control")
			return true;
		
		return false;
	
	},
	
	isMale: function() {	
	
		if (this.condition === "male")
			return true;
		
		return false;
	
	},
	
	isFemale: function() {	
	
		if (this.condition === "female")
			return true;
		
		return false;
	
	},
	
	isExperimental: function() {
		
		if ((this.condition === "male") || (this.condition === "female"))
			return true;
		
		return false;
	
	},
	
>>>>>>> 54cfee88ed4698aece5a0a48a5ae33f8f35c6222
};