import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

export const socialFun = createSlice({
  name: 'socialFun',
  initialState: {
    cats: [],
    isLoggedIn: false,
    userDetails: '',
    userName: '',
    errorCode: '',
    loginPending: false,
    isServerUp: false,
    isSidebarOpen: false,
    selectedMonth: [2023, 1],
    focusedOnDay: false,
    initialSlide: 0,
    todayDate: dayjs().format('DD-MM-YYYY'),
  },
  reducers: {
    addCat: (state, action) => {
      state.cats.push(action.payload)
    },
    toggleUserIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    setLoggedUserDetails: (state, action) => {
      state.userDetails = action.payload
    },
    setErrorCode: (state, action) => {
      state.errorCode = action.payload
    },
    togglePending: (state, action) => {
      state.loginPending = action.payload
    },
    toggleServerUp: (state, action) => {
      state.isServerUp = action.payload
    },
    setAppHeight: (state, action) => {
      state.appHeight = action.payload
    },
    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload
    },
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload
    },
    toggleFocusedOnDay: (state, action) => {
      state.focusedOnDay = action.payload
    },
    setInitialSlide: (state, action) => {
      state.initialSlide = action.payload
    },
    setTodayDate: (state, action) => {
      state.todayDate = action.payload
    },
  },
})

export const { addCat, toggleUserIsLoggedIn, setLoggedUserDetails, setErrorCode, togglePending, toggleServerUp, setSidebarOpen, setSelectedMonth, toggleFocusedOnDay, setInitialSlide, setTodayDate } = socialFun.actions

export default socialFun.reducer
