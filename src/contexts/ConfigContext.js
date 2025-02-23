import { createContext, useContext } from 'react'

export const ConfigContext = createContext(null)

export const ConfigDispatchContext = createContext(null)

export function useConfig() {
  return useContext(ConfigContext)
}

export function useConfigDispatch() {
  return useContext(ConfigDispatchContext)
}
