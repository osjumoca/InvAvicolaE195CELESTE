import MockupFrame from "./MockupFrame";
import { Truck, Clock, CheckCircle, AlertCircle } from "lucide-react";

const orders = [
  { id: "ENV-001", client: "Juan Pérez", addr: "Cra 15 #23-45", status: "Pendiente", icon: Clock },
  { id: "ENV-002", client: "María López", addr: "Calle 8 #12-30", status: "En Ruta", icon: Truck },
  { id: "ENV-003", client: "Carlos Ruiz", addr: "Av. Boyacá #67-10", status: "Entregado", icon: CheckCircle },
  { id: "ENV-004", client: "Ana Torres", addr: "Cra 7 #45-12", status: "Retraso", icon: AlertCircle },
];

const statusColor: Record<string, string> = {
  Pendiente: "bg-accent/20 text-accent-foreground",
  "En Ruta": "bg-primary/10 text-primary",
  Entregado: "bg-primary/20 text-primary",
  Retraso: "bg-destructive/10 text-destructive",
};

const DistributorScreen = () => (
  <MockupFrame title="Distribuidor – Envíos Pendientes" storyId="CAC-002 (Esc. 6)">
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-foreground">Mis Envíos</h3>

      <div className="space-y-2">
        {orders.map((o) => {
          const Icon = o.icon;
          return (
            <div key={o.id} className="wireframe-box p-3 flex items-center gap-4">
              <Icon className={`w-5 h-5 ${o.status === "Retraso" ? "text-destructive/60" : "text-primary/60"}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-foreground">{o.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusColor[o.status]}`}>
                    {o.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{o.client} — {o.addr}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-wireframe-light rounded-lg p-3 space-y-1.5">
        <p className="wireframe-annotation">Funcionalidades Distribuidor:</p>
        <p className="text-xs text-wireframe-dark">• Tabla detallada de trabajos pendientes/terminados</p>
        <p className="text-xs text-wireframe-dark">• Marcar retraso o no entregado con motivo</p>
        <p className="text-xs text-wireframe-dark">• Administrar pedido de manera remota</p>
      </div>
    </div>
  </MockupFrame>
);

export default DistributorScreen;
