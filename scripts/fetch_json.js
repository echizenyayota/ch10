let data = { mid: 'y001', name: 'echizenya', age: 43};

// JSON
fetch('fetch_json.php', {
    method: 'POST',
    headers: {
        'content-type':  'application/json',
    },
    body: JSON.stringify(data),
})
    .then(function(response) {
        return response.text();
    })
    .then(function(text) {
        console.log(text);
    });
