import * as ActionTyeps from './ActionTypes';


export const favorites = (state = [], action) => {

    switch (action.type) {
        case ActionTyeps.ADD_FAVORITE:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

        default:
            return state;
    }

}