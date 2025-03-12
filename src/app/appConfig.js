const appConfig = {
  apiUrl: import.meta.env.VITE_API_URL,
  isDebug: import.meta.env.VITE_DEBUG.toLowerCase() === 'true',
}

export default appConfig;