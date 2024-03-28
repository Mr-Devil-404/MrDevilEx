postForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const postContent = document.getElementById('postContent').value;
    
    fetch('/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postContent })
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = /posted?content=${data.postContent};
    });
});