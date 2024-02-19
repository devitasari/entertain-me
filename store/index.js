import { createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'
// import { thunk } from '../Middlewares/index'
import thunk from 'redux-thunk'
// import { forbiddenWordsMiddleware } from '../Middlewares/index'

const store = createStore(
    rootReducer,
    applyMiddleware(
        // forbiddenWordsMiddleware,
        thunk
    )
)

export default store