document.getElementById('btn').addEventListener('click', function (e) {
fetch('fetch.php')
// fetch(new Request('fetch.php'))
  .then(function (response) {
    return response.text();
  })
  .then(function (data) {
    document.getElementById('result').textContent = data;
  });
}, false);
