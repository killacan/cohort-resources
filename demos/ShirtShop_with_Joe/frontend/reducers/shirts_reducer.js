import { ADD_SHIRT } from '../actions/shirt_actions';
// import * as ShirtActions from '../actions/shirt_actions';

const shirtsReducer = (state = {}, action) => {
  // console.log(state);
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type) {
    case ADD_SHIRT:
      nextState[action.shirt.id] = action.shirt;
      return nextState;
    default:
      return state;
  }

};

export default shirtsReducer;