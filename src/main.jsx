import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <App />
    </MantineProvider>
  </StrictMode>,
)
