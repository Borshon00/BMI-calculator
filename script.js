// Get the form and button elements
const form = document.querySelector('form');
const button = document.getElementById('button');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultDiv = document.querySelector('.result');
const scoreElement = document.getElementById('score');

// Add click event listener to the button
button.addEventListener('click', function(e) {
    // Prevent form submission and page reload
    e.preventDefault();
    
    // Get values from inputs
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    
    // Validate inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values');
        return;
    }
      
    // Calculate BMI (weight in kg, height in cm -> convert to meters)
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // Round to 2 decimal places
    const roundedBMI = bmi.toFixed(2);
    
    // Display the result
    scoreElement.textContent = roundedBMI;
    resultDiv.style.display = 'block';
    
    // Optional: Change color based on BMI category
    if (bmi < 18.6) {
        scoreElement.style.backgroundColor = '#ffc107'; // Yellow for underweight
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        scoreElement.style.backgroundColor = '#28a745'; // Green for normal
    } else {
        scoreElement.style.backgroundColor = '#dc3545'; // Red for overweight
    }
});

// Optional: Add enter key support
heightInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        button.click();
    }
});

weightInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        button.click();
    }
});

// Optional: Clear the result when inputs change
heightInput.addEventListener('input', function() {
    resultDiv.style.display = 'none';
});

weightInput.addEventListener('input', function() {
    resultDiv.style.display = 'none';
});