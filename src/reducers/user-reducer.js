import { ACTIONS } from "../actions/actions-constants";

const userReducer = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_USER_DETAILS:
            return [...state, action.payload]
        default:
            return state;
    }
};

export default userReducer;
