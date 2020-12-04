
function check(form)
{
 
 if(form.answer.value == "20")
  {
	document.getElementById('richtig').style="visibility:visible";
  }
  else if (form.answer.value == "20!") 
  {
  document.getElementById('richtig').style="visibility:visible";
  }
  else if (form.answer.value == "20 ") 
  {
  document.getElementById('richtig').style="visibility:visible";
  }
 else
 {
   alert("Versuchs noch mal!")
  }
  document.getElementById("richtig").innerHTML = txt;
}
