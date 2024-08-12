import { createSlice } from '@reduxjs/toolkit'

export interface GlobalStateType {
  global: StateType
}

export interface StateType {
  sidebarShow: boolean
  asideShow: boolean
  theme: 'default' | 'light' | 'dark'
  user: any
  // confirmModalVisible: boolean
}

const initialState: StateType = {
  sidebarShow: true,
  asideShow: false,
  theme: 'default',
  user: null,

  // confirmModalVisible: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload
    },
    setLogout: (state) => {
      state.user = null
    },
    setSidebarShow: (state, action) => {
      state.sidebarShow = action.payload.sidebarShow
    },
    setAsideShow: (state, action) => {
      state.asideShow = action.payload.asideShow
    },
    setTheme: (state, action) => {
      state.theme = action.payload.theme
    },
    // setConfirmModal: (state, action) => {
    //   state.confirmModalVisible = action.payload.confirmModal
    // },
  },
})

export const {
  setLogin,
  setLogout,
  setSidebarShow,
  setAsideShow,
  setTheme,
  // setConfirmModal,
} = globalSlice.actions

export default globalSlice.reducer
