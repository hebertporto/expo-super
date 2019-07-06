import React, { useState, createContext, useContext } from 'react'
const OfflineContext = createContext()

function OfflineProvider(props) {
  const [chapter, setChapter] = useState({})
  const saveChapter = chapter => setChapter({ chapter })
  const clearChapter = () => setChapter({})
  return (
    <OfflineContext.Provider
      value={{ chapter, saveChapter, clearChapter }}
      {...props}
    />
  )
}

function useOffline() {
  const context = useContext(OfflineContext)
  if (context === undefined) {
    throw new Error(`useOffline error`)
  }
  return context
}

export { OfflineProvider, useOffline }
