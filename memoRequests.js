import fetch from 'node-fetch';

const memoRequests = async (limit = 1, callback, ...urls) => {
    const uniqueUrls = Array.from(new Set(urls));
    let res = [];
    let i = 0;
    let loadingRequests = 0;
    while (i < uniqueUrls.length) {
        if (loadingRequests < limit) {
            loadingRequests++;
            i++;
            fetch(uniqueUrls[i - 1])
                .then(response => {
                    if (!response.ok) {
                        return Promise.reject(new Error(
                            'Response failed: ' + response.status + ' (' + response.statusText + ')'
                        ));
                    }
                    loadingRequests--;
                    return response.json();
                })
                .then(json => {
                    res.push(json);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    if (callback) {
        callback(res);
    }

    return res;
}

memoRequests(
    3,
    (res) => console.log(res),
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5',
    'https://jsonplaceholder.typicode.com/todos/6',
    'https://jsonplaceholder.typicode.com/todos/7',
    'https://jsonplaceholder.typicode.com/todos/8',
    'https://jsonplaceholder.typicode.com/todos/9',
    'https://jsonplaceholder.typicode.com/todos/10',
)
