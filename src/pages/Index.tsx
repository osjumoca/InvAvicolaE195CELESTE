import { useState } from "react";
import LoginScreen from "@/components/mockup/LoginScreen";
import RecoverPasswordScreen from "@/components/mockup/RecoverPasswordScreen";
import CreateAccountScreen from "@/components/mockup/CreateAccountScreen";
import HomeScreen from "@/components/mockup/HomeScreen";
import ProductsScreen from "@/components/mockup/ProductsScreen";
import PaymentsScreen from "@/components/mockup/PaymentsScreen";
import AdminScreen from "@/components/mockup/AdminScreen";
import DistributorScreen from "@/components/mockup/DistributorScreen";
import AuditorScreen from "@/components/mockup/AuditorScreen";
import UserEditorScreen from "@/components/mockup/UserEditorScreen";
import WorkWithUsScreen from "@/components/mockup/WorkWithUsScreen";
import ContactScreen from "@/components/mockup/ContactScreen";
import FarmsScreen from "@/components/mockup/FarmsScreen";

const groups = [
  {
    label: "CAC-001 · Autenticación",
    screens: [
      { id: "login", label: "Login", component: LoginScreen },
      { id: "recover", label: "Recuperar Contraseña", component: RecoverPasswordScreen },
      { id: "register", label: "Crear Cuenta", component: CreateAccountScreen },
    ],
  },
  {
    label: "CAC-002 · Navegación",
    screens: [
      { id: "home", label: "Bienvenida", component: HomeScreen },
      { id: "work", label: "Trabaja con Nosotros", component: WorkWithUsScreen },
      { id: "contact", label: "Contactos", component: ContactScreen },
    ],
  },
  {
    label: "CAC-003 · Productos",
    screens: [
      { id: "products", label: "Catálogo", component: ProductsScreen },
    ],
  },
  {
    label: "CAC-004 · Auditoría",
    screens: [
      { id: "auditor", label: "Tabla de Cambios", component: AuditorScreen },
    ],
  },
  {
    label: "CAC-006 · Usuarios",
    screens: [
      { id: "users", label: "Editor de Usuarios", component: UserEditorScreen },
    ],
  },
  {
    label: "CAC-009 · Pagos",
    screens: [
      { id: "payments", label: "Pagos", component: PaymentsScreen },
    ],
  },
  {
    label: "CAC-010 · Granjas",
    screens: [
      { id: "farms", label: "Tabla de Granjas", component: FarmsScreen },
    ],
  },
  {
    label: "Distribución",
    screens: [
      { id: "admin", label: "Admin Productos", component: AdminScreen },
      { id: "distributor", label: "Distribuidor", component: DistributorScreen },
    ],
  },
];

const Index = () => {
  const [active, setActive] = useState("login");

  const allScreens = groups.flatMap((g) => g.screens);
  const ActiveComponent = allScreens.find((s) => s.id === active)!.component;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-foreground tracking-tight">Celeste Agrotec</h1>
            <p className="text-xs text-muted-foreground">Wireframe Mockup — Backlog V1.3</p>
          </div>
          <span className="wireframe-annotation">Borrador de Mockup</span>
        </div>
      </header>

      {/* Screen tabs grouped */}
      <div className="max-w-5xl mx-auto px-4 py-3 space-y-2">
        {groups.map((g) => (
          <div key={g.label} className="flex items-center gap-2 flex-wrap">
            <span className="wireframe-annotation min-w-[140px] text-right pr-2 hidden sm:inline">{g.label}</span>
            {g.screens.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  active === s.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Active screen */}
      <main className="max-w-5xl mx-auto px-4 pb-12">
        <ActiveComponent />
      </main>
    </div>
  );
};

export default Index;
