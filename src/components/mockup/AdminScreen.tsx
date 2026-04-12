import MockupFrame from "./MockupFrame";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";

const rows = [
  { id: "P001", name: "Fertilizante Orgánico", stock: 120, price: "$45.000", status: "Activo" },
  { id: "P002", name: "Semillas de Maíz", stock: 0, price: "$22.500", status: "Agotado" },
  { id: "P003", name: "Herbicida Natural", stock: 45, price: "$38.000", status: "Activo" },
  { id: "P004", name: "Kit de Riego", stock: 8, price: "$120.000", status: "Bajo Stock" },
];

const AdminScreen = () => (
  <MockupFrame title="Admin – Gestión de Productos" storyId="CAC-003 (Admin)">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-foreground">Productos Registrados</h3>
        <div className="wireframe-box bg-primary/10 px-3 py-2 flex items-center gap-1.5 cursor-pointer rounded-lg">
          <Plus className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary">Agregar Producto</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b-2 border-border">
              {["ID", "Producto", "Stock", "Precio", "Estado", "Acciones"].map((h) => (
                <th key={h} className="text-left py-2 px-2 wireframe-annotation">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-border">
                <td className="py-2 px-2 text-muted-foreground">{r.id}</td>
                <td className="py-2 px-2 font-medium text-foreground">{r.name}</td>
                <td className="py-2 px-2">{r.stock}</td>
                <td className="py-2 px-2">{r.price}</td>
                <td className="py-2 px-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    r.status === "Activo" ? "bg-primary/10 text-primary" :
                    r.status === "Agotado" ? "bg-destructive/10 text-destructive" :
                    "bg-accent/20 text-accent-foreground"
                  }`}>{r.status}</span>
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
        <p className="wireframe-annotation">Funcionalidades Admin:</p>
        <p className="text-xs text-wireframe-dark">• CRUD completo de productos</p>
        <p className="text-xs text-wireframe-dark">• Gestión de stock e imágenes</p>
        <p className="text-xs text-wireframe-dark">• Cambiar estado del producto</p>
      </div>
    </div>
  </MockupFrame>
);

export default AdminScreen;
