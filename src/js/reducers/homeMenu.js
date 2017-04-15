import { 
    GO_TO_PANEL, 
    SET_HEADER_VISIBILITY 
} from '../actions/homeMenu';

// currentPanel needs to be an object
// You need a deeper data type here otherwise, the compoenent wont trigger compoentWill RecieveProps
// when the panel Id is the same.
// We need to trigger  
const initialState = { currentPanel: {panelId: 'home'} , showHeader: true };

const sample = (state = initialState, action) => {

    switch (action.type) {

        case GO_TO_PANEL: 
            return Object.assign({}, state, { currentPanel:{panelId: action.panelId} });

         case SET_HEADER_VISIBILITY: 
            return  Object.assign({}, state, { showHeader:action.show });

        default:
            return state;
    }
};
export default sample;