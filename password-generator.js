// Function to generate a random password
function generatePassword(length, characterSet) {
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Function to copy the password to the clipboard
  function copyToClipboard(password) {
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  
  // Generate password and display it
  function generateAndDisplayPassword() {
    const length = parseInt(document.querySelector('input[name="length"]:checked').value, 10);
    const characterSet = getCharacterSet();
    const password = generatePassword(length, characterSet);
    document.getElementById('password').value = password;
  }
  
  // Copy password to clipboard
  function copyPassword() {
    const password = document.getElementById('password').value;
    copyToClipboard(password);
    alert('Password copied to clipboard!');
  }
  
  // Get selected character set
  function getCharacterSet() {
    const characterSets = document.querySelectorAll('input[name="characterSet"]:checked');
    let characters = '';
  
    characterSets.forEach((characterSet) => {
      characters += characterSet.value;
    });
  
    return characters;
  }
  