import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoApp } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <TodoApp/>
)
