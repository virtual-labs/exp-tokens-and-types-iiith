function selectCorpus()
{
var corp = document.getElementById("corp_opt");
theIndx=corp.selectedIndex;
corp_id=corp.options[theIndx].value;
if(corp_id=="-1")
	{
		alert("Select a corpus");
		return;
	}

id=corp_id.split("*");
var cno=parseFloat(id[1]);
var lno=parseFloat(id[0]);
$('#opt').load('CLExperiment3-1.php?ind='+cno+'&lang='+lno);

}
