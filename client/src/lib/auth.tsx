import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Role = "admin" | "donor" | "recipient" | "analyst" | null;

interface AuthContextType {
  user: { role: Role } | null;
  login: (role: Role) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ role: Role } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedRole = localStorage.getItem("sustain_share_role") as Role;
    if (savedRole) {
      setUser({ role: savedRole });
    }
    setIsLoading(false);
  }, []);

  const login = (role: Role) => {
    setUser({ role });
    if (role) {
      localStorage.setItem("sustain_share_role", role);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("sustain_share_role");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
