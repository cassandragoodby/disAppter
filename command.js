var database = firebase.database();

var storageRef = database.ref('info');

var responseArray={} //pulldowndata
var count1=0;
var key= "123";
var user = "cass";

function runOnce(){
	storageRef.on("child_added", function(snapshot){
		// console.log(snapshot.val());
			var pushThis=snapshot.val();
			// console.log(pushThis);
			responseArray[count1] = pushThis;
			// console.log(responseArray[count1]);
			// console.log(count1);
			// console.log(responseArray);
			// responseArray.size()=count++;
			count1++;
			// updateValues(responseArray);
	});
}

function buttonClicked(i){
	console.log(i);
	// console.log(responseArray);
}



$(document).ready(function(){
	// document.getElementById('patientTable').innerHTML = "<tr><th>ID</th><th>Age</th><th>Gender</th><th>Status</th></tr>";
	runOnce();
});

var hospitalInfo = {hospital1: {name: "JHU", patientsNum:"40", status:"Full"},
					hospital2: {name: "Baltimore VA Medical Center", patientsNum:"12", status:"Accepting"},
					hospital3: {name: "Mercy Medical Center", patientsNum:"20", status:"Accepting"},
					hospital4: {name: "Kennedy Krieger Institute", patientsNum:"12", status:"Accepting"},
					};
var emsInfo = {ems1: {emsNum:"122",status:"requested",agency:"Baltimore Fire", name:"Gabby Melli", location: {lat:"39.295500", long:"-76.590000"}},
				ems2: {emsNum:"345",status:"",agency:"Lifeline EMT", name:"Cassandra Goodby", location: {lat:"39.295485", long:"-76.591880"}},
				ems3: {emsNum:"128",status:"",agency:"Lifeline EMT", name:"Eric M. Thomas", location: {lat:"39.296808", long:"-76.592840"}},
				ems4: {emsNum:"348",status:"",agency:"Lifestar EMT", name:"John G. Frank", location: {lat:"39.29639", long:"-76.592565"}},
				ems5: {emsNum:"134",status:"requested",agency:"Baltimore Fire", name:"Angie L. Green", location: {lat:"39.296231", long:"-76.593887"}},
				ems6: {emsNum:"482",status:"",agency:"Baltimore Fire", name:"Carl C. Napoleon", location: {lat:"39.296884", long:"-76.592123"}},
				};

var patientInfo = {patient1: {patientId: "1",location:"loc",time:"12:30:12",heartRate: "80 bpm",location: {lat:"39.297220",long:"-76.592080"}, respiratoryRate:"40",chiefcomplaint:"Laceration",injurylocation:"leftleg",contamination:"None",status:"yellow", hospital:"",age:"25",gender:"F"},
					patient2: {patientId: "2",location:"loc",time:"12:30:45",heartRate: "40 bpm",location: {lat:"39.295500",long:"-76.589760"}, respiratoryRate:"20",chiefcomplaint:"Head Injury",injurylocation:"head",contamination:"None",status:"red",hospital:"",age:"54",gender:"F"},
					patient3: {patientId: "3",location:"loc",time:"12:32:01",heartRate: "100 bpm",location: {lat:"39.294850",long:"-76.594400"}, respiratoryRate:"45",chiefcomplaint:"Blunt Trama",injurylocation:"abdomen",contamination:"radiation",status:"yellow",hospital:"",age:"15",gender:"M"},
					patient4: {patientId: "4",location:"loc",time:"12:32:45",heartRate: "180 bpm",location: {lat:"39.295480",long:"-76.590780"}, respiratoryRate:"35",chiefcomplaint:"Burn",injurylocation:"righthand",contamination:"None",status:"Hospital",hospital:"Baltimore VA Medical Center",age:"65",gender:"F"},
					patient5: {patientId: "5",location:"loc",time:"12:33:05",heartRate: "110 bpm",location: {lat:"39.296177",long:"-76.591759"}, respiratoryRate:"30",chiefcomplaint:"Blunt Trauma",injurylocation:"head",contamination:"None",status:"Hospital",hospital:"JHU",age:"23",gender:"M"},
					patient6: {patientId: "6",location:"loc",time:"12:36:05",heartRate: "62 bpm",location: {lat:"39.296938",long:"-76.591234"}, respiratoryRate:"30",chiefcomplaint:"C-Spine",injurylocation:"spine",contamination:"None",status:"yellow",hospital:"JHU",age:"23",gender:"M"},
					patient7: {patientId: "7",location:"loc",time:"12:36:45",heartRate: "75 bpm",location: {lat:"39.295234",long:"-76.592845"}, respiratoryRate:"12",chiefcomplaint:"Amputation",injurylocation:"foot",contamination:"None",status:"red",hospital:"JHU",age:"23",gender:"M"},
					patient8: {patientId: "8",location:"loc",time:"12:40:55",heartRate: "87 bpm",location: {lat:"39.296643",long:"-76.591766"}, respiratoryRate:"39",chiefcomplaint:"Burn",injurylocation:"arm",contamination:"Chemical",status:"red",hospital:"JHU",age:"23",gender:"M"},
					patient9: {patientId: "9",location:"loc",time:"12:41:24",heartRate: "95 bpm",location: {lat:"39.295342",long:"-76.592544"}, respiratoryRate:"21",chiefcomplaint:"None",injurylocation:"N/A",contamination:"None",status:"green",hospital:"JHU",age:"23",gender:"M"},
					patient10: {patientId: "10",location:"loc",time:"12:43:12",heartRate: "111 bpm",location: {lat:"39.295232",long:"-76.591544"}, respiratoryRate:"25",chiefcomplaint:"Cardiac",injurylocation:"chest",contamination:"None",status:"red",hospital:"JHU",age:"23",gender:"M"},
					patient11: {patientId: "11",location:"loc",time:"12:48:26",heartRate: "120 bpm",location: {lat:"39.295903",long:"-76.593211"}, respiratoryRate:"0",chiefcomplaint:"None",injurylocation:"N/A",contamination:"None",status:"black",hospital:"",age:"23",gender:"M"},
					};

storageRef.on('value', function(snapshot) {
	// console.log(snapshot.val());
	storageRef.update({patientInfo:patientInfo,emsInfo:emsInfo, hospitalInfo:hospitalInfo});
});

// window.setInterval(function(){
  storageRef.on('value', function(snapshot) {
		// var pushThis=snapshot.val();
			// console.log(pushThis);
			// responseArray[count1] = pushThis;
			// console.log(snapshot.val());
			updateValues(responseArray);
			// count1++;
	});
// }, 5000);

var hospital1count = 0;
var hospital2count = 0;
var hospital3count = 0;
var hospital4count = 0;

var staffMembers = document.getElementById('staffnum').innerHTML;
function updateValues(responseArray){
	console.log(responseArray[0]);
	// console.log(Object.keys(responseArray[0]).length); //Amount of EMT
	document.getElementById('staffnum').innerHTML=Object.keys(responseArray[0]).length;
	//add staff to table
	var maxems = Object.keys(responseArray[0]).length;
	for(i=1;i<=maxems; i++){
		if(i==1){
			// document.getElementById('stafflist').innerHTML = "<tr><th>ID</th><th>Name</th><th>Department</th></tr>";
		}
		var emsid = eval('responseArray[0].ems'+i+'.emsNum');
		var name = eval('responseArray[0].ems'+i+'.name');
		var agency = eval('responseArray[0].ems'+i+'.agency');
		document.getElementById('stafflist').innerHTML += "<tr><td>"+emsid+"</td><td>"+name+"</td><td>"+agency+"</td></tr>";
	}

	//Hospitals
	console.log(responseArray[1]);
	var maxhosp = Object.keys(responseArray[1]).length;
	for(i=1;i<=maxhosp; i++){
		// console.log("Hospital");
		var hospitalNum = "Hospital"+i;
		console.log(hospitalNum);
		console.log(responseArray[1].hospital1.name);
		var name = eval("responseArray[1].hospital"+i+".name");
		console.log(name);
		document.getElementById(hospitalNum).innerHTML=name;
		
	}
	var maxpatient = Object.keys(responseArray[2]).length;
	for(i=1;i<=maxpatient; i++){
		var hospital = eval("responseArray[2].patient" +i+ ".hospital");
		console.log(hospital);
		if(hospital =="JHU"){
			hospital1count++;
			console.log("JHU found");
		}
		else if(hospital=="Baltimore VA Medical Center"){
			hospital2count++;
			console.log("BVAMC found");
		}
		else if(hospital == "Mercy Medical Center"){
			hospital3count++;
			console.log("Mercy found");
		}
		else if(hospital == "Kennedy Krieger Institute"){
			hospital4count++;
			console.log("Kennedy found");
		}
		document.getElementById('hospital1pts').innerHTML= hospital1count;
		document.getElementById('hospital2pts').innerHTML= hospital2count;
		document.getElementById('hospital3pts').innerHTML= hospital3count;
		document.getElementById('hospital4pts').innerHTML= hospital4count;
	}

	//patients
	var redcount=0;
	var yellowcount=0;
	var blackcount=0;
	var greencount=0;
	var unspecifiedcount=0;
	var hospitalcount=0;
	console.log(responseArray[2]);
	var max = Object.keys(responseArray[2]).length;
	for(i=1;i<=max; i++){
		if(i==1){
			// document.getElementById('patientTable').innerHTML = "<tr><th>ID</th><th>Age</th><th>Gender</th><th>Status</th></tr>";
		}
		var age = eval('responseArray[2].patient'+i+'.age');
		var id= eval('responseArray[2].patient'+i+'.patientId');
		var gender = eval('responseArray[2].patient'+i+'.gender');
		var status = eval('responseArray[2].patient'+i+'.status');
		if (status=="yellow"){
			// console.log("Yellow");
			yellowcount++;
			// console.log(yellowcount);
		}
		else if(status=="red"){
			redcount++;
		}
		else if(status=="black"){
			blackcount++;
		}
		else if(status=="green"){
			greencount++;
		}
		else if(status=="Hospital"){
			hospitalcount++;
		}
		else{
			unspecifiedcount++;
		}
		var condition = "";
		if(status == "red"){
			condition = "Immediate";
		}
		else if(status == "yellow"){
			condition = "Delayed";
		}
		else if(status == "black"){
			condition = "Expectant";
		}
		else if(status == "black"){
			condition = "Expectant";
		}
		else if(status == "green"){
			condition = "Minor";
		}
		else if(status == "Hospital"){
			condition = "Hospital";
		}
		else{
			condition = "Unspecified";
		}
		console.log(age);
		document.getElementById('patientTable').innerHTML += "<tr><td>"+id+"</td><td>"+age+"</td><td>"+gender+"</td><td>"+condition+"</td></tr>"
	}	
	document.getElementById('rednum').innerHTML= redcount;
	document.getElementById('yellownum').innerHTML= yellowcount;
	document.getElementById('greennum').innerHTML= greencount;
	document.getElementById('blacknum').innerHTML= blackcount;
	document.getElementById('unspecifiednum').innerHTML= unspecifiedcount;

	//MAP
	var mymap = L.map('mapid').setView([39.296177, -76.591759], 17);
	mymap.scrollWheelZoom.disable();

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox.streets'
	}).addTo(mymap);

	var redmarkerIcon = L.icon({
	    iconUrl: 'leaflet/images/redmarker.svg',
	    // shadowUrl: 'leaflet/images/marker.svg',

	    iconSize:     [38, 95], // size of the icon
	    shadowSize:   [50, 64], // size of the shadow
	    iconAnchor:   [18, 64], // point of the icon which will correspond to marker's location
	    shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [0, -36] // point from which the popup should open relative to the iconAnchor
	});

	var yellowmarkerIcon = L.icon({
	    iconUrl: 'leaflet/images/yellowmarker.svg',
	    // shadowUrl: 'leaflet/images/marker.svg',

	    iconSize:     [38, 95], // size of the icon
	    shadowSize:   [50, 64], // size of the shadow
	    iconAnchor:   [18, 64], // point of the icon which will correspond to marker's location
	    shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [0, -36] // point from which the popup should open relative to the iconAnchor
	});

	var greenmarkerIcon = L.icon({
	    iconUrl: 'leaflet/images/greenmarker.svg',
	    // shadowUrl: 'leaflet/images/marker.svg',

	    iconSize:     [38, 95], // size of the icon
	    shadowSize:   [50, 64], // size of the shadow
	    iconAnchor:   [18, 64], // point of the icon which will correspond to marker's location
	    shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [0, -36] // point from which the popup should open relative to the iconAnchor
	});

	var blackmarkerIcon = L.icon({
	    iconUrl: 'leaflet/images/blackmarker.svg',
	    // shadowUrl: 'leaflet/images/marker.svg',

	    iconSize:     [38, 95], // size of the icon
	    shadowSize:   [50, 64], // size of the shadow
	    iconAnchor:   [18, 64], // point of the icon which will correspond to marker's location
	    shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [0, -36] // point from which the popup should open relative to the iconAnchor
	});
	var greymarkerIcon = L.icon({
	    iconUrl: 'leaflet/images/greymarker.svg',
	    // shadowUrl: 'leaflet/images/marker.svg',

	    iconSize:     [38, 95], // size of the icon
	    shadowSize:   [50, 64], // size of the shadow
	    iconAnchor:   [18, 64], // point of the icon which will correspond to marker's location
	    shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [0, -36] // point from which the popup should open relative to the iconAnchor
	});

	var HospitalmarkerIcon = L.icon({
	    iconUrl: 'leaflet/images/hospitalmarker.svg',
	    // shadowUrl: 'leaflet/images/marker.svg',

	    iconSize:     [0, 0], // size of the icon
	    shadowSize:   [50, 64], // size of the shadow
	    iconAnchor:   [18, 64], // point of the icon which will correspond to marker's location
	    shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [0, -36] // point from which the popup should open relative to the iconAnchor
	});

	//PATIENT MARKERS
	var max2 = Object.keys(responseArray[2]).length;
	for(i=1;i<=max2; i++){
		console.log(responseArray[2]);
		var id= eval('responseArray[2].patient'+i+'.patientId');
		var status = eval('responseArray[2].patient'+i+'.status');
		var locationlat= eval('responseArray[2].patient'+i+'.location.lat');
		var locationlong= eval('responseArray[2].patient'+i+'.location.long');
		var icon = eval(status+'markerIcon');
		//app, chiefcomplaint, contamination, gender, heartrate, hospital, injuryLocation, location (lat long), patient id, respiratoryRate, status, time
		var age = eval('responseArray[2].patient'+i+'.age');
		var chiefcomplaint = eval('responseArray[2].patient'+i+'.chiefcomplaint');
		var contamination = eval('responseArray[2].patient'+i+'.contamination');
		var gender = eval('responseArray[2].patient'+i+'.gender');
		var heartRate = eval('responseArray[2].patient'+i+'.heartRate');
		var hospital = eval('responseArray[2].patient'+i+'.hospital');
		var injurylocation = eval('responseArray[2].patient'+i+'.injurylocation');
		var patientId = eval('responseArray[2].patient'+i+'.patientId');
		var respiratoryRate = eval('responseArray[2].patient'+i+'.respiratoryRate');
		var status = eval('responseArray[2].patient'+i+'.status');
		var time = eval('responseArray[2].patient'+i+'.time');
		// var marker = eval('marker'+i)
		//name, weight, height, address, pulse, mental status(conscious, responsive, unconscious),treatment(meds,interventions)
		//Popup ID, classification, injury summary, gender, age
		//more info
		//Immediate, delayed, minor, expectant
		var condition = "";
		if(status == "red"){
			condition = "Immediate";
		}
		else if(status == "yellow"){
			condition = "Delayed";
		}
		else if(status == "black"){
			condition = "Expectant";
		}
		else if(status == "black"){
			condition = "Expectant";
		}
		else if(status == "green"){
			condition = "Minor";
		}
		else{
			condition = "Unspecified";
		}
		var marker1 = L.marker([locationlat, locationlong], {icon: icon}).addTo(mymap).addTo(mymap);
		var popupinfo = "<b>Patient ID: "+patientId+"</b><br>Age: "+age + "<br>Gender: "+gender + "<br>Injury Summary: "+patientId + "<br>Condition: "+condition + "<br><button onclick='buttonClicked("+i+")''>All Info</button>" ;


		marker1.bindPopup(popupinfo).closePopup();
	}



	//EMS markers
	var maxems = Object.keys(responseArray[0]).length;
	console.log(responseArray[0]);
	for(i=1;i<=maxems; i++){
		var emsNum= eval('responseArray[0].ems'+i+'.emsNum');
		var agency = eval('responseArray[0].ems'+i+'.agency');
		var locationlat= eval('responseArray[0].ems'+i+'.location.lat');
		var locationlong= eval('responseArray[0].ems'+i+'.location.long');
		var name= eval('responseArray[0].ems'+i+'.name');
		var status= eval('responseArray[0].ems'+i+'.status');
		console.log(status);
		// var circle = L.circle([locationlat, locationlong], {
		//     color: '#3762f5',
		//     fillColor: '#3762f5',
		//     fillOpacity: 0.5,
		//     radius: 6
		// }).addTo(mymap);
		if(status == "requested"){
			var popupinfoems = "<b>EMS #"+emsNum+"</b><br>Name: "+name+"<br>Agency: "+agency+"<br>Status: "+status;
			var circle = L.circle([locationlat, locationlong], {
			    color: '#3762f5',
			    fillColor: '#3762f5',
			    fillOpacity: 0.5,
			    radius: 10,
			    className: 'blinking'
			}).addTo(mymap);
		}
		else{
			var popupinfoems = "<b>EMS #"+emsNum+"</b><br>Name: "+name+"<br>Agency: "+agency+"<br>";
			var circle = L.circle([locationlat, locationlong], {
			    color: '#3762f5',
			    fillColor: '#3762f5',
			    fillOpacity: 0.5,
			    radius: 6
			}).addTo(mymap);
		}
		circle.bindPopup(popupinfoems).closePopup();
	}

	// var marker1 = L.marker([39.296177, -76.591759], {icon: greymarkerIcon}).addTo(mymap).addTo(mymap);
	//ems color #3762f5
	
	
}

