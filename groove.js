    // Function to handle login submission
    function submitlogin() {
        var username = document.getElementById('loginusername').value;
        var password = document.getElementById('loginpassword').value;
        if (username === '' || password === '') {
          alert('please fill in the fields');
          return;
        }
        alert('login successful');
      }
      
      // function to show signup form and hide login form
      function showSignup() {
        document.getElementById('loginform').classList.add('hidden');
        document.getElementById('signup').classList.remove('hidden');
      }
      
      // Function to show login form and hide signup form
      function showLogin() {
        document.getElementById('signup').classList.add('hidden');
        document.getElementById('loginform').classList.remove('hidden');
      }
      
      // Function to handle account creation
      function createaccount() {
        var name = document.getElementById('signupname').value;
        var email = document.getElementById('signupemail').value;
        var password = document.getElementById('signuppassword').value;
        var confirmPassword = document.getElementById('signupconfirmpassword').value;
      
        if (
          name === '' ||
          email === '' ||
          password === '' ||
          confirmPassword === ''
        ) {
          alert('Please fill in all fields.');
          return
        }
      
        if (password !== confirmPassword) {
          alert('passwords do not match.');
          return;
        }
      
        alert('Account created successfully!');
      }
      