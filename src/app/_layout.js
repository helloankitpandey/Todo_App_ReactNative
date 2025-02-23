import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../redux/store'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Provider>
        <PersistGate loading={null} persistor={persistor}>
            <Stack>
                <Stack.Screen name='index' />
                <Stack.Screen name='home' />
                <Stack.Screen name='addtodo' />
            </Stack>
        </PersistGate>
    </Provider>
  )
}

export default Layout