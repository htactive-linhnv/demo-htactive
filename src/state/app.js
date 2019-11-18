const initialState = {
    color: '#e84c3d',
};
const CHANGE_COLOR = 'CHANGE_COLOR';

export const changeColor = color => ({
    type: CHANGE_COLOR, color
});
export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COLOR:
            return { ...state, color: action.color };
        default:
            return state;
    }
};