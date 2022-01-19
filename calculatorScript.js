function calculateEnergy(){
						var x = document.getElementById("form1");
						var BulletWeight = x.elements["BulletWeight"].value;
						var BulletVelocity= x.elements["BulletVelocity"].value;
						var e = (BulletWeight * (BulletVelocity*BulletVelocity))/450437;
						var Energy = e.toFixed(0);
						x.elements["Energy"].value = Energy;

					}
function resetForm(){
						var x = document.getElementById("form1");
						var BulletWeight;
						var BulletVelocity;
						var Energy;
						x.elements["BulletWeight"].value = "";
						x.elements["BulletVelocity"].value = "";
						x.elements["Energy"].value = "";
					}

function calculateWound(){
						var x = document.getElementById("form2");
						var BulletWeight = x.elements["BulletWeight"].value;
						var BulletVelocity= x.elements["BulletVelocity"].value;
						var BulletDiameter= x.elements["BulletDiameter"].value;
						var w = ((BulletWeight*BulletWeight)*BulletVelocity)/(BulletDiameter*BulletDiameter)/700000;
						var Wound = w.toFixed(0);
						x.elements["Wound"].value = Wound;
					}	
function resetForm2(){
						var x = document.getElementById("form2");
						var BulletWeight;
						var BulletVelocity;
						var BulletDiameter;
						var Wound;
						x.elements["BulletWeight"].value = "";
						x.elements["BulletVelocity"].value = "";
						x.elements["BulletDiameter"].value = "";
						x.elements["Wound"].value = "";
					}
function calculateSD(){
						var x = document.getElementById("form3");
						var BulletWeight = x.elements["BulletWeight"].value;
						var BulletDiameter= x.elements["BulletDiameter"].value;
						var SD = BulletWeight/(7000*(BulletDiameter*BulletDiameter))
						var Density = SD.toFixed(3);
						x.elements["Density"].value = Density;
					}	
function resetForm3(){
						var x = document.getElementById("form3");
						x.elements["BulletWeight"].value = "";
						x.elements["BulletDiameter"].value = "";
						x.elements["Density"].value = "";
					}


function calculateStability(){
						var x = document.getElementById("form4");
						var BulletWeight = x.elements["BulletWeight"].value;
						var BulletLength= x.elements["BulletLength"].value;
						var BulletDiameter= x.elements["BulletDiameter"].value;
						var TwistRate = x.elements["TwistRate"].value;
						var t = TwistRate/BulletDiameter;
						var l = BulletLength/BulletDiameter;
						var s = (30*BulletWeight)/((t*t)*(BulletDiameter*BulletDiameter*BulletDiameter)*(l)*(1+(l*l)));
						var Stability = s.toFixed(2);
						x.elements["StabilityFactor"].value = Stability;
					}
function resetForm4(){
						var x = document.getElementById("form4");
						x.elements["BulletWeight"].value = "";
						x.elements["BulletLength"].value = "";
						x.elements["BulletDiameter"].value = "";
						x.elements["TwistRate"].value = "";
						x.elements["StabilityFactor"].value="";
					}

/*

function calculateBC(){
						var x = document.getElementById("form4");
						var BulletRange= x.elements["Range"].value;
						var BulletVelocity1= x.elements["BulletVelocity1"].value;
						var BulletVelocity2= x.elements["BulletVelocity2"].value;
						var Coefficient = (.0052834 * BulletRange) /(Math.sqrt(BulletVelocity1) - Math.sqrt(BulletVelocity2));
						x.elements["Coefficient"].value = Coefficient.toFixed(2);
					}	
function resetForm5(){
						var x = document.getElementById("form4");
						x.elements["BulletVelocity1"].value = "";
						x.elements["BulletVelocity2"].value = "";
						x.elements["Range"].value = "";
						x.elements["Coefficient"].value = "";
}
*/