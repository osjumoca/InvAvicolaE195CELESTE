import MockupFrame from "./MockupFrame";
import { Shield, Search } from "lucide-react";

const changes = [
  { date: "2025-01-15 10:23", user: "admin01", action: "Creó producto", detail: "Fertilizante Orgánico (P001)", type: "Crear" },
  { date: "2025-01-15 11:05", user: "admin01", action: "Editó precio", detail: "Semillas de Maíz: $20.000 → $22.500", type: "Editar" },
  { date: "2025-01-14 16:40", user: "admin02", action: "Eliminó producto", detail: "Pesticida Químico (P009)", type: "Eliminar" },
  { date: "2025-01-14 14:20", user: "admin01", action: "Cambió stock", detail: "Kit de Riego: 15 → 8 unidades", type: "Editar" },
  { date: "2025-01-13 09:15", user: "sistema", action: "Registro usuario", detail: "Juan Pérez (distribuidor)", type: "Crear" },
  { date: "2025-01-13 08:00", user: "admin02", action: "Desactivó usuario", detail: "Carlos Ruiz (cliente)", type: "Editar" },
];

const typeColor: Record<string, string> = {
  Crear: "bg-primary/10 text-primary",
  Editar: "bg-accent/20 text-accent-foreground",
  Eliminar: "bg-destructive/10 text-destructive",
};

const AuditorScreen = () => (
  <MockupFrame title="Auditor – Tabla de Cambios" storyId="CAC-004">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-bold text-foreground">Registro de Auditoría</h3>
        </div>
        <div className="wireframe-box p-2 flex items-center gap-2 w-48">
          <Search className="w-4 h-4 text-wireframe" />
          <span className="text-xs text-muted-foreground">Buscar cambios...</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {["Todos", "Crear", "Editar", "Eliminar"].map((f, i) => (
          <span
            key={f}
            className={`px-3 py-1 rounded-full text-[10px] font-semibold cursor-pointer ${
              i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {f}
          </span>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b-2 border-border">
              {["Fecha/Hora", "Usuario", "Acción", "Detalle", "Tipo"].map((h) => (
                <th key={h} className="text-left py-2 px-2 wireframe-annotation">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {changes.map((c, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2 px-2 text-muted-foreground whitespace-nowrap">{c.date}</td>
                <td className="py-2 px-2 font-medium text-foreground">{c.user}</td>
                <td className="py-2 px-2">{c.action}</td>
                <td className="py-2 px-2 text-muted-foreground">{c.detail}</td>
                <td className="py-2 px-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${typeColor[c.type]}`}>
                    {c.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-wireframe-light rounded-lg p-3 space-y-1.5">
        <p className="wireframe-annotation">Funcionalidades Auditor:</p>
        <p className="text-xs text-wireframe-dark">• Tabla con todos los cambios del sistema</p>
        <p className="text-xs text-wireframe-dark">• Filtrar por tipo de cambio (Crear, Editar, Eliminar)</p>
        <p className="text-xs text-wireframe-dark">• Buscar por usuario o detalle</p>
        <p className="text-xs text-wireframe-dark">• Solo lectura — no puede modificar registros</p>
      </div>
    </div>
  </MockupFrame>
);

export default AuditorScreen;
