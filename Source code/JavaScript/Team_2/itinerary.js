//Progress bar start
let els = document.getElementsByClassName('step');
let steps = [];
let currentStep = 0;
Array.prototype.forEach.call(els, (e) => {
  steps.push(e);
});

function nextStep() {
  if (currentStep < steps.length - 1) {
    progress(currentStep + 1);
    currentStep++;
    document.getElementById('previousBtn').disabled = false;
  } else if (currentStep === steps.length - 1) {
    progress(currentStep + 1);
    currentStep++;
    document.getElementById('nextBtn').disabled = true;
  }
}

function previousStep() {
  if (currentStep > 0) {
    progress(currentStep - 1);
    currentStep--;
    document.getElementById('nextBtn').disabled = false;
  } else if (currentStep === 0) {
    progress(currentStep);
    document.getElementById('previousBtn').disabled = true;
  }
}

function progress(stepNum) {
  let totalWidth = 300;
  let p = ((stepNum-1) / (steps.length - 1)) * totalWidth;
  document.getElementsByClassName('percent')[0].style.width = `${p}px`;
  steps.forEach((e) => {
 if (e.id === stepNum.toString()) {
   e.classList.add('selected');
   e.classList.remove('completed');
 }
 if (e.id < stepNum) {
   e.classList.add('completed');
}
 if (e.id > stepNum) {
   e.classList.remove('selected', 'completed');
}
});
}

//progress bar end