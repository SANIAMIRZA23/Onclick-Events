function averageCalculator() {
    var subject1 = parseInt(document.getElementById("subject1").value);
    var subject2 = parseInt(document.getElementById("subject2").value);
    var subject3 = parseInt(document.getElementById("subject3").value);
    var subject4 = parseInt(document.getElementById("subject4").value);
  
    var totalNum = subject1 + subject2 + subject3 + subject4;
    var average = totalNum / 4;
  
    var resultMessage = "";
  
    if (average >= 50) {
      resultMessage = "Congratulations! You passed with an average grade of " + average + ".";
      
    } else {
      resultMessage = "Unfortunately! You failed with an average grade of " + average + ".";
    }
  
    document.getElementById("result").innerHTML= resultMessage;
  }
  averageCalculator()