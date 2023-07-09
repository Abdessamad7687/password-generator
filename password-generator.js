// Function to generate a random password
function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
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
  
  function generateAndDisplayPassword() {
    const passwordLength = 25; // Set the desired password length here
    const password = generatePassword(passwordLength);
    document.getElementById('password').value = password;
  }
  
  function copyPassword() {
    const password = document.getElementById('password').value;
    copyToClipboard(password);
    alert('Password copied to clipboard!');
  }
  