const initialState = {
    characters: {
        loading: false,
        error: null,
        data: []
    },
    favoriteCharacters: [],
    user: null,
    badWords: [],
    error: '',
    loading: false
}

function rootReducer(state = initialState, action) {
    if (action.type === 'LOGIN') {
        return {
            ...state,
            user: action.payload
        }
    }

    if (action.type === 'LOGOUT') {
        return {
            ...state,
            user: null
        }
    }

    if (action.type === 'DATA_LOADED') {
        return {
            ...state,
            characters: {
                data: state.characters.data.concat(action.payload),
                loading: false,
                error: null
            }
        }
    }

    if (action.type === 'ADD_FAVORITE') {
        return {
            ...state,
            favoriteCharacters: state.favoriteCharacters.concat(action.payload),
            badWords: ''
        }
    }

    if (action.type === 'DELETE_FAVORITE') {
        let data = state.favoriteCharacters.slice()
        data.splice(action.payload,1)
        return {
            ...state,
            favoriteCharacters: data,
            badWords: ''
        }
    }

    if (action.type === 'ERROR') {
        return {
            ...state,
            characters: {
                data: [],
                loading: false,
                error: action.payload
            }
        }
    }

    if (action.type === 'LOADING') {
        return {
            ...state,
            characters: {
                data: [],
                loading: true,
                error: null
            }
        }
    }

    if (action.type === 'FOUND_BAD_WORD') {
        return {
            ...state,
            badWords: action.payload
        }
    }

    return state
}

export default rootReducer