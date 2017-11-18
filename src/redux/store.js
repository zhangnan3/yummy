import {createStore} from 'redux'
const initState:'/dashboard/dishes'
const rootReducer =(state=initState,action)=>{
  switch (action.type) {
    case 'xxx':
      return state

    default:
    return state

  }
}
const store=createStore(rootReducer)
export default store
