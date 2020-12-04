# geburtstagsseite.github.io
<!DOCTYPE html>
<html lang="de">
<head>
<title id="Timer"></title>
<meta charset="utf-8">
<link href="Spiel.css" rel="stylesheet" type="text/css">

<script type="text/javascript">

function searchKeyPress(e)
{
    e = e || window.event;
    if (e.keyCode === 13)
    {
        document.getElementById('Knopf').click();
        return false;
    }
    return true;
}

</script>

<script type="text/javascript">

         var minuten = 44;

         var sekunden = 59;

         var tmp = setInterval(function(){ Timer_min() }, 60000);
         var tmp2 = setInterval(function(){ Timer_sek() }, 1000);

         function Timer_min() {
             if(minuten === 0)
                 alert("Deine Zeit ist leider abgelaufen!");
             minuten -= 1;
         }

         function Timer_sek() {
             if(sekunden === 0)
                 sekunden += 60;
             sekunden -= 1;
             document.getElementById("Timer").innerHTML = minuten + " : " + sekunden;
             document.getElementById("Timer2").innerHTML = minuten + " : " + sekunden;
         }

</script>

<script language="javascript">

function check(form)
{
 if(form.userid.value === "Nina" && form.pswrd.value == "2012")
    {
        open('Startseite.html')
    }
 else if(form.userid.value === "Nina " && form.pswrd.value == "2012")
    {
        open('Startseite.html')
    }
 else if (form.userid.value === "nina" && form.pswrd.value == "2012") {
     open('Startseite.html')
 }
    else if(form.userid.value === "Stefan" && form.pswrd.value == "1934")
    {
        open('Startseite.html')
    }
    else if(form.userid.value === "Stefan " && form.pswrd.value == "1934")
    {
        open('Startseite.html')
    }
    else if (form.userid.value === "stefan" && form.pswrd.value == "1934") {
        open('Startseite.html')}
 else
     {

         alert("Versuchs noch mal!")
     }
 }
  </script>

 </head>

  <body>
  <br>
  <br>
  <div>
     <form  class="form-style-4" name="login">
      <label>
          <h2>Um fortfahren zu können, melden Sie sich bitte an:</h2>
      </label>
         <label>
             <span>Username:</span>
         </label>
				<input type="text" placeholder="dein Name" name="userid" autofocus><br>
                    <br>

         <label>
             <span>Passwort:</span>
         </label>
            <input type="password" placeholder="Passwort" name="pswrd" onkeypress="return searchKeyPress(event);"><br>
            <br>
				<label>
				<span>&nbsp</span><input type="button" onclick="check(this.form)" value="Login" id="Knopf">
                </label>
</form>
</div>
      <br>
		<br>
  <div style="text-align: center; margin: auto; color: whitesmoke">
  <h1>Es verbleiben noch:</h1> <br>
  <h1 id="Timer2"> </h1> <br>
      <h1>Minuten!</h1>
  </div>
  </body>
</html>
