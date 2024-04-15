import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { PokemonProvider } from './context/pokemon.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>,
)
