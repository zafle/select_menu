import { useContext } from 'react'
import { configContext } from '../configContext'

export default function useConfig() {
  const { config, defineConfig } = useContext(configContext)
  return { ...config, defineConfig }
}
