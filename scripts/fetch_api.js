const btn = document.getElementById('btn');
const count = document.getElementById('count');
const commnet = document.getElementById('commnet');

btn.addEventListener('click', function(e) {
    let url = document.getElementById('url');
    fetchJsonp('http://b.hatena.ne.jp/entry/jsonlite/?url=' + url.value, {
        timeout: 7000,
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            count.textContent = `${data.count}件`;
            let frag = document.createDocumentFragment();
            for (let bk of data.bookmarks) {
                let c = bk.comment;
                if (c !== '') {
                    let li = document.createElement('li');
                    li.textContent = c;
                    frag.appendChild(li);
                }
            }
            comment.appendChild(frag);
        }).catch(function(ex) {
            console.log('例外発生 : ' + ex);
        });
}, false);
