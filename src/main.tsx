import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext.tsx'
import './components/ui/card.css'

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
