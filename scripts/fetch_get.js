const btn = document.getElementById('btn');
const result = document.getElementById('result');


btn.addEventListener('click', function(e) {
    let zip = document.getElementById('zip');
    fetch('fetch_get.php?zip=' + zip.value)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, 'text/xml');
            let state = xml.querySelector('value[state]').getAttribute('state');
            let city = xml.querySelector('value[city]').getAttribute('city');
            let address = xml.querySelector('value[address]').getAttribute('address');
            result.textContent = state + city + address;
        });
}, false);
