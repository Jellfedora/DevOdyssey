const initialState = {
    bgColor: "#F8F8F8",
    textColor: "#020202",
    headerColor: 'white',
    showSelectSound: true,
    showMenu: false,
    isSmallScreen: false
}

function homeReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'CHANGE_BACKGROUND':
            nextState = {
                ...state,
                bgColor: action.value
            }
            return nextState || state
        case 'CHANGE_TEXT_COLOR':
            nextState = {
                ...state,
                textColor: action.value
            }
            return nextState || state
        case 'CHANGE_HEADER_COLOR':
            nextState = {
                ...state,
                headerColor: action.value
            }
            return nextState || state
        case 'SHOW_SELECT_SOUND':
            nextState = {
                ...state,
                showSelectSound: action.value
            }
            return nextState || state
        case 'SHOW_MENU':
            nextState = {
                ...state,
                showMenu: action.value
            }
            return nextState || state
        case 'TOGGLE_DEVICE_SIZE_VALUE':
            nextState = {
                ...state,
                isSmallScreen: action.value
            }
            return nextState || state
        default:
            return state
    }
}

export default homeReducer