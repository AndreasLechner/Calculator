// JavaScript Document by Andreas Lechner SID:13245344
function start() {
  clr();
}
function set(x) {
	document.getElementById("out").value=document.getElementById("out").value+x;
}
function calc() {
	var term = document.getElementById("out").value;
	if(term == eval(term)) {
		document.getElementById("out").value=checklength(term);
	}
	else {
		var res=eval(term);
			document.getElementById("out").value=checklength(res);
	}
}

function del() {
	var val=document.getElementById('out').value;
	document.getElementById('out').value=val.substring(0,val.length-1);
}

function clr() {
	document.getElementById('out').value="";
}

function m_in(memory) {
	var val=document.getElementById('out').value;
	var res=0;
	if(val.indexOf("=")>0)
		res=val.substring(val.indexOf("=")-(-1),val.length);
	else
		res=val;
	while(res!=res.replace(" ",""))
		res=res.replace(" ","");
	document.getElementById(memory).value=res;
}

function m_out(memory) {
	var val=document.getElementById('out').value;
	var let=val.substr(val.length-1,1);
	if(let=="+"||let=="-"||let=="*"||let=="/")
		document.getElementById('out').value=val+document.getElementById("memory").value;
	else
		document.getElementById('out').value=document.getElementById("memory").value;
}
function clr_mem(memory) {
	document.getElementById('memory').value="";
}
function checklength(input) {
	var x = input;
	var length = x.length;
	var maxlength = 10;
	if (length > maxlength)
		return "out of range";
	return x;	
	
}



