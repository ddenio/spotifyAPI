document.querySelector('#search').addEventListener('click', getFetch)

function getFetch() {
    const songSearch = document.querySelector('#songInput').value

    const clientId = 'aa4b380458554cc0a993f28922e32a25';
    const clientSecret = '5ddb7796c2a349b58823c750ac79b9d5';

    const url = 'https://api.spotify.com/v1/search/' + songSearch


    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_crendentials'
        });

        const data = await result.json();
        return data.access_token;
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        .catch(err => {
            console.log(`error ${err}`)
        })
}