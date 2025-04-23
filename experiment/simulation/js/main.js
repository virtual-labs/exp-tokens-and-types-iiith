// Function to extract query parameters from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Function to load corpora and populate the dropdown
function loadCorpora() {
  fetch("/simulation/json/corpora.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const dropdown = document.getElementById("corp_opt");
      if (!dropdown) {
        console.error("Dropdown element not found!");
        return;
      }
      data.forEach((corpus) => {
        const option = document.createElement("option");
        option.value = corpus.id;
        option.textContent = `Corpus ${corpus.id + 1}: ${corpus.text.substring(
          0,
          30
        )}...`; // Set the text to a short description
        dropdown.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error loading corpora:", error);
      alert("Failed to load corpora. Please check the file path or server.");
    });
}

// Function to load corpus data and display it
function loadCorpus(corpusId) {
  fetch("/simulation/json/corpora.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const corpus = data.find((item) => item.id === parseInt(corpusId));
      if (!corpus) {
        console.error("Corpus not found!");
        alert("Selected corpus not found. Please try again.");
        return;
      }

      // Display the corpus text
      const corpusDisplay = document.getElementById("corpusDisplay");
      corpusDisplay.innerHTML = `<p>${corpus.text}</p>`;

      // Display the user input form
      const userInputForm = document.getElementById("userInputForm");
      userInputForm.innerHTML = `
            <form id="corpusForm">
              <table>
                <tr>
                  <td>#tokens:</td>
                  <td><input type="text" id="ans1" size="4"></td>
                </tr>
                <tr>
                  <td>#types:</td>
                  <td><input type="text" id="ans2" size="4"></td>
                </tr>
                <tr>
                  <td>#types_root:</td>
                  <td><input type="text" id="ans3" size="4"></td>
              </table>
              <input type="hidden" id="sol1" value="${corpus.tokens}">
              <input type="hidden" id="sol2" value="${corpus.types}">
              <input type="hidden" id="sol3" value="${corpus.types_root}">
              <button type="button" onclick="checkAns()">Submit</button>
            </form>
          `;
    })
    .catch((error) => {
      console.error("Error loading corpus data:", error);
      alert(
        "Failed to load corpus data. Please check the file path or server."
      );
    });
}

// Function to validate user input
function checkAns() {
  const ans1 = document.getElementById("ans1").value;
  const ans2 = document.getElementById("ans2").value;
  const ans3 = document.getElementById("ans3").value;

  const sol1 = document.getElementById("sol1").value;
  const sol2 = document.getElementById("sol2").value;
  const sol3 = document.getElementById("sol3").value;

  let cnt = 0;

  if (parseFloat(sol1) !== parseFloat(ans1)) {
    document.getElementById("ans1").style.backgroundColor = "red";
  } else {
    document.getElementById("ans1").style.backgroundColor = "green";
    cnt++;
  }

  if (parseFloat(sol2) !== parseFloat(ans2)) {
    document.getElementById("ans2").style.backgroundColor = "red";
  } else {
    document.getElementById("ans2").style.backgroundColor = "green";
    cnt++;
  }

  if (parseFloat(sol3) !== parseFloat(ans3)) {
    document.getElementById("ans3").style.backgroundColor = "red";
  } else {
    document.getElementById("ans3").style.backgroundColor = "green";
    cnt++;
  }

  const result1 = document.getElementById("result1");
  if (cnt === 3) {
    result1.innerHTML = `<h2 style="color:green;">Right Answer</h2>`;
  } else {
    result1.innerHTML = `<h2 style="color:red;">Wrong Answer</h2>`;
  }
}

// Function to handle corpus selection
function selectCorpus() {
  const dropdown = document.getElementById("corp_opt");
  const selectedValue = dropdown.value;

  if (selectedValue === "-1") {
    alert("Select a corpus");
    return;
  }

  // Load the next step dynamically
  loadCorpus(selectedValue);
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadCorpora(); // Load the corpora list
});
