var dcURL = "s1.ariba.com";
let screenInd = 0;
console.log(screenInd.value);

window.onload = function() {
  document.getElementById('avWeb').style.display = "none";
  document.getElementById('smButton').disabled = true;
};

function selectSM() {
  document.getElementById('smButton').disabled = true;
  document.getElementById('avButton').disabled = false;
  document.getElementById('smAPI').style.display = "block";
  document.getElementById('avWeb').style.display = "none";
  screenInd = 0;
}

function selectAPI() {
  document.getElementById('smButton').disabled = false;
  document.getElementById('avButton').disabled = true;
  document.getElementById('smAPI').style.display = "none";
  document.getElementById('avWeb').style.display = "block";
  screenInd = 1;
}

function genURL() {
	let usURL = "s1.ariba.com";
  let prod3URL = "s1.ariba.com";
  let euURL = "s1-eu.ariba.com";  
  let ksaURL = "s1.mn2.ariba.com";
  let uaeURL = "s1.mn1.ariba.com";
  let cnURL = "s1.sapariba.cn";
  let jpURL = "s1.jp.cloud.ariba.com";
  let auURL = "s1.au.cloud.ariba.com";
  let inURL = "s1.in.cloud.ariba.com"
  let ksaprvURL = "s1.ksaprv.cloud.ariba.com"
  
  if (dataCenter.value === "US") {
	dcURL = usURL;
  }
  
  else if (dataCenter.value === "prod3") {
	dcURL = prod3URL;
  }
  
  else if (dataCenter.value === "EU") {
	dcURL = euURL;
  }

  else if (dataCenter.value === "KSA") {
	dcURL = ksaURL;
  }
  
  else if (dataCenter.value === "UAE") {
	dcURL = uaeURL;
  }
  
  else if (dataCenter.value === "CN") {
	dcURL = cnURL;
  }
  
  else if (dataCenter.value === "JP") {
	dcURL = jpURL;
  }
  
  else if (dataCenter.value === "AU") {
	dcURL = auURL;
  }

  else if (dataCenter.value === "KSAPRV") {
	dcURL = ksaprvURL;
  }

  else if (dataCenter.value === "IN") {
	dcURL = inURL;
  }
  
  if (screenInd == 0){
  let URL = "https://" + dcURL + "/SM/rest/syncVendor?realm=" + realmName.value + "&smVendorId=" + smID.value;
  urlDisplay.value = URL;
  }

  else if (screenInd == 1){
  let URL = "https://" + dcURL + "/Sourcing/Main/ad/viewDocument/ariba.collaborate.appui.DirectAction?awr=&realm=" 
  + realmName.value + "&isSMPreviousWorkspaceFlow=false&adv=true&ID=" + wsID.value;
  urlDisplay.value = URL;
  }

  //https://s1.ariba.com
  ///Sourcing/Main/ad/viewDocument/ariba.collaborate.appui.DirectAction?awr=&realm=
  //&isSMPreviousWorkspaceFlow=false&adv=true&ID=

}

function copyURL() {
  let copyText = document.getElementById("urlDisplay");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}


function copyURL() {
  let copyText = document.getElementById("urlDisplay");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}