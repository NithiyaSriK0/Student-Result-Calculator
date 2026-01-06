function calculateResult() {
  let name = document.getElementById("name").value;
  let regno = document.getElementById("regno").value;

  let m1 = Number(document.getElementById("m1").value);
  let m2 = Number(document.getElementById("m2").value);
  let m3 = Number(document.getElementById("m3").value);

  let total = m1 + m2 + m3;
  let average = total / 3;

  let grade, result;

  if (m1 >= 35 && m2 >= 35 && m3 >= 35) {
    result = "PASS";
    if (average >= 80) grade = "A";
    else if (average >= 60) grade = "B";
    else grade = "C";
  } else {
    result = "FAIL";
    grade = "F";
  }

  // Store in LocalStorage
  localStorage.setItem("Name", name);
  localStorage.setItem("RegisterNo", regno);
  localStorage.setItem("Total", total);
  localStorage.setItem("Average", average);
  localStorage.setItem("Grade", grade);
  localStorage.setItem("Result", result);

  // Display Output
  document.getElementById("result").innerHTML =
    "<b>Name:</b> " + name + "<br>" +
    "<b>Register No:</b> " + regno + "<br>" +
    "<b>Total Marks:</b> " + total + "<br>" +
    "<b>Average:</b> " + average.toFixed(2) + "<br>" +
    "<b>Grade:</b> " + grade + "<br>" +
    "<b>Result:</b> " + result;

  document.getElementById("result").classList.remove("d-none");
}