document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
      alert('Both fields are required!');
    } else {
      alert('Sign-in successful');
      // You can handle further actions here, such as redirecting to a dashboard
    }
  });
  