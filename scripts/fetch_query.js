let result = document.getElementById('result');
const btn = document.getElementById('btn');
const name = document.getElementById('name');

btn.addEventListener('click', function() {
    let params = new URLSearchParams();
    params.set('name', name.value);
    fetch('fetch_query.php?' + params.toString())
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            result.textContent = text;
        });
}, false);
