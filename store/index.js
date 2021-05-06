export const state = () => ({
    menuState: false,
    scrollPosition: 0,
    toggle: false
})

export const getters = {
    getMenuState: (state) => {
        return state.menuState
    },
    getScrollPosition: (state) => {
        return state.scrollPosition;
    },
}

export const mutations = {
    toggleMenuState(state) {
        state.menuState = !state.menuState
    },
    SET_SCROLL_POSITION: (state, position) => {
        state.scrollPosition = position;
    },
}

export const actions = {

}