import React from 'react'
import { OfflineProvider } from './offline-context'

function AppProviders({ children }) {
  return <OfflineProvider>{children}</OfflineProvider>
}

export default AppProviders
