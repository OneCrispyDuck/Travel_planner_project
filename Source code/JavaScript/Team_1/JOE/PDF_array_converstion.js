//Joe's draft for converting user input value from webpage to  --> PDF format 


// Initialize an empty array
let userInputArray = [];

// Function to handle user input
function handleUserInput(input) {
    // Add the user input to the array
    userInputArray.push(input);
}

// Function to convert array data to PDF (using jsPDF library)
function convertArrayToPDF() {
    let doc = new jsPDF();
    let text = userInputArray.join("\n");
    doc.text(text, 10, 10);
    doc.save("output.pdf");
}

