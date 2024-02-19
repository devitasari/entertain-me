export function login(payload) {
    return { type: 'LOGIN', payload}
}

export function logout(payload) {
    return { type: 'LOGOUT', payload}
}

export function getData() {
    return function(dispatch) {
        dispatch({
            type: 'LOADING'
        })
        fetch('http://hp-api.herokuapp.com/api/characters')
                    .then(response => {
                        return response.json()
                    })
                    .then(json => {
                        dispatch({type: 'DATA_LOADED', payload: json})
                    })
                    .catch(error => {
                        dispatch({type: 'ERROR', payload: error.message})
                    })
    }
}

export function addFavorite(payload) {
    return { type: 'ADD_FAVORITE', payload}
}

export function deleteFavorite(payload) {
    return { type: 'DELETE_FAVORITE', payload}
}