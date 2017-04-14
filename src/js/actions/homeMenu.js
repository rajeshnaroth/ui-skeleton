export const GO_TO_PANEL = 'GO_TO_PANEL';
export const SET_HEADER_VISIBILITY = 'SET_HEADER_VISIBILITY';

export function setPanelTo(panelId) {
    console.log("homeMenu.js action: ", panelId);
            
    return {
        type:GO_TO_PANEL,
        panelId:panelId
    }
}

export function setHeaderVisibility(show) {
    return {
        type:SET_HEADER_VISIBILITY,
        show:show
    }
}