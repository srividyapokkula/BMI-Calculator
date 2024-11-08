function calculateBMI() {
    // Get the values from the input fields
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    // Validate input
    if (!weight || !height) {
        document.getElementById('result').innerText = "Please enter valid weight and height.";
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    
    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Display the result
    document.getElementById('result').innerText = `Your BMI is: ${bmi.toFixed(2)}\nYou are categorized as: ${category}`;
}
