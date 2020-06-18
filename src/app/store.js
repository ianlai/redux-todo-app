import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { createStore } from 'redux'
import rootReducer from '../reducers/index';

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

const store = createStore(rootReducer)

export default store