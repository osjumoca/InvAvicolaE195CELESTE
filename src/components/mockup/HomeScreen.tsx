import MockupFrame from "./MockupFrame";
import { Home, ShoppingBag, Briefcase, Phone, User, LogOut } from "lucide-react";

const HomeScreen = () => (
  <MockupFrame title="Página de Bienvenida" storyId="CAC-002">
    <div className="space-y-6">
      {/* Nav bar */}
      <div className="flex items-center justify-between bg-primary/10 rounded-lg p-3">
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold text-primary">CA</span>
        </div>
        <nav className="flex items-center gap-4">
          {[
            { icon: Home, label: "Inicio" },
            { icon: ShoppingBag, label: "Productos" },
            { icon: Briefcase, label: "Trabaja con Nosotros" },
            { icon: Phone, label: "Contactos" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-xs font-medium text-foreground cursor-pointer hover:text-primary transition-colors">
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{label}</span>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-wireframe" />
          <LogOut className="w-4 h-4 text-destructive/60" />
        </div>
      </div>

      {/* Hero */}
      <div className="wireframe-box p-8 text-center space-y-3">
        <div className="wireframe-annotation">Banner principal</div>
        <h3 className="text-lg font-bold text-foreground">Bienvenido a Celeste Agrotec</h3>
        <p className="text-sm text-muted-foreground">Productos agrícolas de calidad para tu negocio y hogar</p>
        <div className="wireframe-box bg-primary/10 p-2 inline-block rounded-lg">
          <span className="text-xs font-semibold text-primary">Ver Productos</span>
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-3 gap-3">
        {["Sobre Nosotros", "Misión", "Visión"].map((title) => (
          <div key={title} className="wireframe-box p-4 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-secondary mx-auto" />
            <p className="text-xs font-semibold text-foreground">{title}</p>
            <div className="space-y-1">
              <div className="h-2 bg-wireframe-light rounded w-full" />
              <div className="h-2 bg-wireframe-light rounded w-3/4 mx-auto" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-wireframe-light rounded-lg p-3 space-y-1.5">
        <p className="wireframe-annotation">Notas del mockup:</p>
        <p className="text-xs text-wireframe-dark">• Menú superior con 4 secciones principales</p>
        <p className="text-xs text-wireframe-dark">• Icono de usuario con opción de cerrar sesión</p>
        <p className="text-xs text-wireframe-dark">• Distribuidor ve botón "Consultar Trabajos"</p>
      </div>
    </div>
  </MockupFrame>
);

export default HomeScreen;
