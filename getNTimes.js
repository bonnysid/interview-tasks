const getNTimes = async (url = '', times = 5) => {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (e) {
        if (times > 1) {
            return await getNTimes(url, times - 1);
        }
    }
}

getNTimes('api/event/123')
    .then(res => console.log(res))
    .catch(e => console.log(e))
