const signupForm = document.getElementById('signupForm');
const postForm = document.getElementById('postForm');
const postsDiv = document.getElementById('posts');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Send signup data to the server
});

postForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const postContent = document.getElementById('postContent').value;
    
    // Send post data to the server
});