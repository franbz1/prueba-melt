import { configureStore } from '@reduxjs/toolkit'
import test from './features/test/testSlice'
import { testApi } from './features/test/services/testApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const makeStore = () => {
  return configureStore({
    reducer: {
      test,
      [testApi.reducerPath]: testApi.reducer
    },
    middleware: (getDefaultMiddlewere) => getDefaultMiddlewere().concat([testApi.middleware])
  })
}

setupListeners(makeStore().dispatch)

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']