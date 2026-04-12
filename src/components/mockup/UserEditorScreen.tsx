import MockupFrame from "./MockupFrame";
import { Users, Pencil, Trash2, Plus, Search, ShieldCheck } from "lucide-react";

const users = [
  { id: "U001", name: "Juan Pérez", email: "juan@mail.com", role: "Cliente", status: "Activo" },
  { id: "U002", name: "María López", email: "maria@mail.com", role: "Distribuidor", status: "Activo" },
  { id: "U003", name: "Carlos Ruiz", email: "carlos@mail.com", role: "Admin", status: "Activo" },
  { id: "U004", name: "Ana Torres", email: "ana@mail.com", role: "Cliente", status: "Inactivo" },
  { id: "U005", name: "Pedro Gómez", email: "pedro@mail.com", role: "Auditor", status: "Activo" },
];

const roleColor: Record<string, string> = {
  Cliente: "bg-muted text-muted-foreground",
  Distribuidor: "bg-accent/20 text-accent-foreground",
  Admin: "bg-primary/10 text-primary",
  Auditor: "bg-secondary text-secondary-foreground",
};

const UserEditorScreen = () => (
  <MockupFrame title="Editor de Usuarios" storyId="CAC-006">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-bold text-foreground">Gestión de Usuarios</h3>
        </div>
        <div className="flex gap-2">
          <div className="wireframe-box p-2 flex items-center gap-2 w-40">
            <Search className="w-4 h-4 text-wireframe" />
            <span className="text-xs text-muted-foreground">Buscar...</span>
          </div>
          <div className="wireframe-box bg-primary/10 px-3 py-2 flex items-center gap-1.5 cursor-pointer rounded-lg">
            <Plus className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary">Nuevo Usuario</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b-2 border-border">
              {["ID", "Nombre", "Correo", "Rol", "Estado", "Acciones"].map((h) => (
                <th key={h} className="text-left py-2 px-2 wireframe-annotation">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-border">
                <td className="py-2 px-2 text-muted-foreground">{u.id}</td>
                <td className="py-2 px-2 font-medium text-foreground">{u.name}</td>
                <td className="py-2 px-2 text-muted-foreground">{u.email}</td>
                <td className="py-2 px-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${roleColor[u.role]}`}>
                    {u.role}
                  </span>
                </td>
                <td className="py-2 px-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    u.status === "Activo" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
                  }`}>{u.status}</span>
                </td>
                <td className="py-2 px-2">
                  <div className="flex gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-wireframe cursor-pointer" />
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
        <p className="text-xs text-wireframe-dark">• CRUD completo de usuarios</p>
        <p className="text-xs text-wireframe-dark">• Asignar roles: Cliente, Distribuidor, Admin, Auditor</p>
        <p className="text-xs text-wireframe-dark">• Activar / desactivar usuarios</p>
        <p className="text-xs text-wireframe-dark">• Buscar por nombre o correo</p>
      </div>
    </div>
  </MockupFrame>
);

export default UserEditorScreen;
