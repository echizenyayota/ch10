let result = document.getElementById('result');
const btn = document.getElementById('btn');
const myform = document.getElementById('myform');
const name = document.getElementById('name');

btn.addEventListener('click', function(e) {
    let data = new FormData(myform);
    fetch('fetch_post.php', {
        method: 'POST',
        body: 'data',
    })
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            result.textContent = text;
        });
}, false);
