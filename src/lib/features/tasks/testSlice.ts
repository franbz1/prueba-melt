import { getInitialData } from '@/lib/getInitialData'
import { createSlice } from '@reduxjs/toolkit'

const initialData = getInitialData()

export const taskSlice = createSlice({
  name: 'task',
  initialState: initialData,
  reducers: {
  },
})

export const {  } = taskSlice.actions

export default taskSlice.reducer
