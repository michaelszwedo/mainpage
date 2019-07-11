    function addNow() {
      nowDate = moment().tz("Europe/London").format('YYYY-MM-DD');
      document.getElementById('registration-date').value = nowDate;

      var x = document.getElementById("registration-date").value;
      document.getElementById("currentDate").innerHTML = x;
    }
    
  
    function addDate() {
      var y = document.getElementById("registration-date").value;
      document.getElementById("choosenDate").innerHTML = y;
    }
