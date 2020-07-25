// Get Quote From API
const getQuote = async () => {
    const proxyUrl = 'https://sheltered-cove-06865.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    let retryCount = 0;

    try {
        if(retryCount > 0) {
            retryCount = 0;
        }
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        if(retryCount <= 10) {
            getQuote();
            retryCount++;
        } else {
            console.log('Can not connect to quote, refresh page and try again');
        }
        console.log('whoops, no quote', error);
    }
    console.log(retry)
}

// On Load
getQuote();