const urlParams = new URLSearchParams(window.location.search);
const postedContent = urlParams.get('content');

document.getElementById('postedContent').innerText = postedContent;