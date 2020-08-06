const initialState = {
    bgColor: "#F8F8F8",
    textColor: "#020202",
    hideBio: null,
    bioDisplay: 'initial',
    hideSkills: null,
    skillsDisplay: 'initial',
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
        case 'HIDE_BIO':
            nextState = {
                ...state,
                hideBio: true,
                bioDisplay: 'none',
                hideSkills: true,
            }
            return nextState || state
        case 'HIDE_SKILLS':
            nextState = {
                ...state,
                hideSkills: true,
                skillsDisplay: 'none'
            }
            return nextState || state
        default:
            return state
    }
}

export default homeReducer