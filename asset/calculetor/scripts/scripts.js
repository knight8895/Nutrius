function calculate() {
  const weight = parseFloat(document.getElementById("weight").value);
  const feet = parseFloat(document.getElementById("heightFeet").value);
  const inches = parseFloat(document.getElementById("heightInches").value);
  const age = parseFloat(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;

  if (!weight || !feet || !age || !gender) {
    alert("Please fill all required fields");
    return;
  }

  const totalInches = feet * 12 + (inches || 0);
  const heightMeters = totalInches * 0.0254;
  const heightCm = heightMeters * 100;

  const bmi = (weight / heightMeters ** 2).toFixed(1);
  document.getElementById("bmi").value = bmi;

  let bmiText = "";
  if (bmi < 18.5) bmiText = "Underweight";
  else if (bmi < 25) bmiText = "Normal weight";
  else if (bmi < 30) bmiText = "Overweight";
  else bmiText = "Obese";

  document.getElementById("bmiDesc").innerText = bmiText;

  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * heightCm - 5 * age - 161;
  }

  document.getElementById("bmr").value = Math.round(bmr) + " kcal/day";
}
