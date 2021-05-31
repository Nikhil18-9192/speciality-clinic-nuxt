export const state = () => ({
  menuState: false,
  scrollPosition: 0,
  toggle: false,
  selectedGalleryType: 'Clinic',
})

export const getters = {
  getMenuState: (state) => {
    return state.menuState
  },
  getScrollPosition: (state) => {
    return state.scrollPosition
  },
  getGalleryType: (state) => {
    return state.selectedGalleryType
  },
}

export const mutations = {
  toggleMenuState(state) {
    state.menuState = !state.menuState
  },
  SET_SCROLL_POSITION: (state, position) => {
    state.scrollPosition = position
  },

  SET_GALLERY_TYPE: (state, type) => {
    state.selectedGalleryType = type
  },
}
