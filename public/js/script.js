
function checkCustomLanguage(select) {
  var customLanguageInput = document.getElementById("customLanguageInput");
  if (select.value === "other") {
    customLanguageInput.style.display = "block";
  } else {
    customLanguageInput.style.display = "none";
  }
}

function setSelectedLanguage() {
  const languageSelect = document.getElementById('language');
  const customLanguageInput = document.getElementById('customLanguageInput');
  const selectedLanguageInput = document.getElementById('selectedLanguage');

  if (languageSelect.value === 'other') {
    selectedLanguageInput.value = customLanguageInput.value;
  } else {
    selectedLanguageInput.value = languageSelect.value;
  }
}

const form = document.querySelector('.translation-form');
form.addEventListener('submit', setSelectedLanguage);

function checkCustomLanguage(selectElement) {
  const customLanguageInput = document.getElementById('customLanguageInput');

  if (selectElement.value === 'other') {
    customLanguageInput.style.display = 'block';
  } else {
    customLanguageInput.style.display = 'none';
  }
}
