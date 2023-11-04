document.addEventListener('DOMContentLoaded', function() {
  let container = document.querySelector('.container');
  let heightInput = document.querySelector('#height'); // Corrected the ID name to 'height'
  let weightInput = document.querySelector('#weight'); // Corrected the ID name to 'weight'
  let form = document.querySelector('form');
  let resultElement = document.getElementById('result');
  let originalContent = container.innerHTML; // Store the original content of the container

  // FUNCTION
  function bmi(height, weight) {
      let bmi = weight / (height * height);
      return bmi;
  }

  // EVENTS
  form.addEventListener('submit', (e) => {
      e.preventDefault();

      container.classList.add('active'); // adding the class active

      // Display "Calculando..." message while the calculation is in progress
      container.textContent = 'Calculando...';

      setTimeout(() => {
          let heightValue = parseFloat(heightInput.value.replace(',', '.')); // Handling commas in input
          let weightValue = parseFloat(weightInput.value.replace(',', '.')); // Handling commas in input

          if (!heightValue || !weightValue || heightValue <= 0 || weightValue <= 0) {
              container.textContent = 'Por favor, insira números positivos válidos para altura e peso.';
              return;
          }

          if (isNaN(heightValue) || isNaN(weightValue)) {
              container.textContent = 'Por favor, insira somente números válidos para altura e peso.';
              return;
          }

          let bmiValue = bmi(heightValue, weightValue);

          // Display the BMI value in the result div
          resultElement.textContent = 'BMI: ' + bmiValue.toFixed(2); // Displaying BMI with 2 decimal places

          // Optionally, you can also update the container text to show the BMI value
          container.textContent = 'Calculado: BMI ' + bmiValue.toFixed(2);

          // Add a button to return home
          let backButton = document.createElement('button');
          backButton.textContent = 'Voltar para o início';
          backButton.addEventListener('click', function() {
              container.innerHTML = originalContent; // Reset the container content
              // Reattach the event listener for form submission
              form.addEventListener('submit', handleFormSubmit);
          });
          container.appendChild(backButton);
      }, 2000); // Simulated 2-second delay for the calculation, adjust as needed
  });

  // Function to handle form submission
  function handleFormSubmit(e) {
      e.preventDefault();
      // Handle form submission logic here
      // ...
  }

  // Attach the event listener for form submission
  form.addEventListener('submit', handleFormSubmit);
});
