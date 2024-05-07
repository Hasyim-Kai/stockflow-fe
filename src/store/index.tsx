import { createSlice } from '@reduxjs/toolkit'

export interface GlobalStateType {
  global: StateType
}

export interface StateType {
  sidebarShow: boolean
  asideShow: boolean
  sidebarUnfoldable: boolean
  theme: 'default' | 'light' | 'dark'
  user: any
}

const initialState: StateType = {
  sidebarShow: true,
  asideShow: false,
  sidebarUnfoldable: false,
  theme: 'default',
  user: null,
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
    setSidebarUnfoldable: (state, action) => {
      state.sidebarUnfoldable = action.payload.sidebarUnfoldable
    },
    setAsideShow: (state, action) => {
      state.asideShow = action.payload.asideShow
    },
    setTheme: (state, action) => {
      state.theme = action.payload.theme
    },
  },
})

export const {
  setLogin,
  setLogout,
  setSidebarShow,
  setAsideShow,
  setTheme,
  setSidebarUnfoldable,
} = globalSlice.actions

export default globalSlice.reducer
