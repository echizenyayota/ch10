document.getElementById('btn').addEventListener('click', function (e) {
    fetch('nothing.php')
      .then(function (response) {
          if (response.ok) {
              return response.text();
          }
          throw new Error('指定したファイルが存在しません。');
      })
      .then(function (data) {
        document.getElementById('result').textContent = data;
      })
      .catch(function(error) {
          window.alert('Error: ' + error.message)
      });
}, false);
