import MockupFrame from "./MockupFrame";
import { MapPin, Plus, Pencil, Trash2, Eye, Sprout } from "lucide-react";

const farms = [
  { id: "G001", name: "Finca El Paraíso", owner: "Juan Pérez", location: "Boyacá", area: "15 Ha", status: "Activa" },
  { id: "G002", name: "Hacienda La Esperanza", owner: "María López", location: "Cundinamarca", area: "42 Ha", status: "Activa" },
  { id: "G003", name: "Lote San Rafael", owner: "Carlos Ruiz", location: "Tolima", area: "8 Ha", status: "Inactiva" },
  { id: "G004", name: "Finca Los Naranjos", owner: "Ana Torres", location: "Antioquia", area: "23 Ha", status: "Activa" },
  { id: "G005", name: "Parcela El Roble", owner: "Pedro Gómez", location: "Santander", area: "5 Ha", status: "Activa" },
];

const FarmsScreen = () => (
  <MockupFrame title="Tabla de Granjas" storyId="CAC-010">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sprout className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-bold text-foreground">Granjas Registradas</h3>
        </div>
        <div className="wireframe-box bg-primary/10 px-3 py-2 flex items-center gap-1.5 cursor-pointer rounded-lg">
          <Plus className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary">Agregar Granja</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b-2 border-border">
              {["ID", "Nombre", "Propietario", "Ubicación", "Área", "Estado", "Acciones"].map((h) => (
                <th key={h} className="text-left py-2 px-2 wireframe-annotation">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {farms.map((f) => (
              <tr key={f.id} className="border-b border-border">
                <td className="py-2 px-2 text-muted-foreground">{f.id}</td>
                <td className="py-2 px-2 font-medium text-foreground">{f.name}</td>
                <td className="py-2 px-2">{f.owner}</td>
                <td className="py-2 px-2 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-wireframe" />
                  {f.location}
                </td>
                <td className="py-2 px-2">{f.area}</td>
                <td className="py-2 px-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    f.status === "Activa" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
                  }`}>{f.status}</span>
                </td>
                <td className="py-2 px-2">
                  <div className="flex gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-wireframe cursor-pointer" />
                    <Pencil className="w-3.5 h-3.5 text-wireframe cursor-pointer" />
                    <Trash2 className="w-3.5 h-3.5 text-destructive/50 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-wireframe-light rounded-lg p-3 space-y-1.5">
        <p className="wireframe-annotation">Funcionalidades:</p>
        <p className="text-xs text-wireframe-dark">• CRUD completo de granjas</p>
        <p className="text-xs text-wireframe-dark">• Registrar nombre, propietario, ubicación y área</p>
        <p className="text-xs text-wireframe-dark">• Activar / desactivar granjas</p>
        <p className="text-xs text-wireframe-dark">• Ver detalle de cada granja</p>
      </div>
    </div>
  </MockupFrame>
);

export default FarmsScreen;
