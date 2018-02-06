import Promise from 'promise-polyfill';

function ajax(method, url, data) {
    let request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    });
}



function get(url, hasParam=false) {
    const params = {
        suid: '123123123',
        ab: 'welcome_3',
        src: 'web'
    };
    if(!hasParam) {
        url = url + "?";
    }

    for(let key in params) {
        url = url + '&' + key +'=' + params[key]
    }

    console.log('url: ', url);

    return fetch(url, {
        method: 'GET'
    });
}

export default {ajax, get};