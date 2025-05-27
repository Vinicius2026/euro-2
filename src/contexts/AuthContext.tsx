import { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
   ParsedToken, 
  IdTokenResult
} from 'firebase/auth';
import { auth } from '../lib/firebase';
// No need to import useNavigate here, it's a hook for components

interface AuthContextType {
  currentUser: any; // Alterado para aceitar mock
  loading: boolean;
  error: string | null;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, fullName: string) => Promise<boolean>; // Adicionado signup
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>(null); // Aceita mock
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(false); // Para MVP, não usar Firebase
  }, []);

  // Função signup mockada
  const signup = async (email: string, password: string, fullName: string) => {
    setLoading(true);
    setError(null);
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        setCurrentUser({ email, fullName });
        setLoading(false);
        resolve(true);
      }, 800);
    });
  };

  // Função login mockada
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setCurrentUser({ email, fullName: 'Usuário Teste' });
        setLoading(false);
        resolve();
      }, 800);
    });
  };

  // Função logout mockada
  const logout = async () => {
    setLoading(true);
    setError(null);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setCurrentUser(null);
        setLoading(false);
        resolve();
      }, 400);
    });
  };

  // register mantido para compatibilidade, mas não faz nada
  const register = async (email: string, password: string) => {
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, error, register, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
