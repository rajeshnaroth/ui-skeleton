import { 
    GO_TO_PANEL, 
    SET_HEADER_VISIBILITY 
} from '../actions/homeMenu';

const initialState = { currentPanel: null, showHeader: true };

const sample = (state = initialState, action) => {

    switch (action.type) {

        case GO_TO_PANEL: 
        console.log("homeMenu.js reducer: ", action);
                
            return Object.assign({}, state, { currentPanel:action.panelId });

         case SET_HEADER_VISIBILITY: 
            return  Object.assign({}, state, { showHeader:action.show });

        default:
            return state;
    }
};
export default sample;