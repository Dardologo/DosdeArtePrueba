

const login = (accessToken) => {
    return new Promise((accept, reject) =>{
        //Esto se hace desde el back si de nuestra api (no tenemos)
        //En un futuro si queremos que vaya a buscar info en nuestra api, solamente cambiamos la url
        fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`)
        .then(res => res.json())
        .then(data => accept(data))
        .catch(err => reject(err))
    })
}

export default {
    login
}