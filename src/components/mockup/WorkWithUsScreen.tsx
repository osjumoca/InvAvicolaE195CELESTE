import MockupFrame from "./MockupFrame";
import { Briefcase, Send, User, Mail, FileText } from "lucide-react";

const positions = [
  { title: "Distribuidor de Zona Norte", type: "Medio Tiempo", location: "Bogotá" },
  { title: "Técnico Agrícola", type: "Tiempo Completo", location: "Medellín" },
  { title: "Asistente de Bodega", type: "Tiempo Completo", location: "Cali" },
];

const WorkWithUsScreen = () => (
  <MockupFrame title="Trabaja con Nosotros" storyId="CAC-002">
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Briefcase className="w-10 h-10 text-primary mx-auto" />
        <h3 className="text-lg font-bold text-foreground">Trabaja con Nosotros</h3>
        <p className="text-sm text-muted-foreground">Únete al equipo de Celeste Agrotec</p>
      </div>

      {/* Open positions */}
      <div className="space-y-2">
        <p className="wireframe-annotation">Vacantes disponibles</p>
        {positions.map((p) => (
          <div key={p.title} className="wireframe-box p-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-foreground">{p.title}</p>
              <p className="text-[10px] text-muted-foreground">{p.type} · {p.location}</p>
            </div>
            <div className="wireframe-box bg-primary/10 px-2 py-1 rounded cursor-pointer">
              <span className="text-[10px] font-semibold text-primary">Aplicar</span>
            </div>
          </div>
        ))}
      </div>

      {/* Application form */}
      <div className="space-y-3">
        <p className="wireframe-annotation">Formulario de aplicación</p>
        <div className="wireframe-box p-3 flex items-center gap-3">
          <User className="w-4 h-4 text-wireframe" />
          <span className="text-sm text-muted-foreground">Nombre completo</span>
        </div>
        <div className="wireframe-box p-3 flex items-center gap-3">
          <Mail className="w-4 h-4 text-wireframe" />
          <span className="text-sm text-muted-foreground">Correo electrónico</span>
        </div>
        <div className="wireframe-box p-3 flex items-center gap-3">
          <FileText className="w-4 h-4 text-wireframe" />
          <span className="text-sm text-muted-foreground">Adjuntar hoja de vida (PDF)</span>
        </div>
        <div className="wireframe-box p-6 text-center">
          <span className="text-xs text-muted-foreground">Mensaje / Motivación</span>
        </div>
        <div className="wireframe-box bg-primary/10 p-3 text-center rounded-lg flex items-center justify-center gap-2">
          <Send className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Enviar Solicitud</span>
        </div>
      </div>

      <div className="bg-wireframe-light rounded-lg p-3 space-y-1.5">
        <p className="wireframe-annotation">Notas:</p>
        <p className="text-xs text-wireframe-dark">• Lista de vacantes disponibles</p>
        <p className="text-xs text-wireframe-dark">• Formulario para aplicar a posiciones</p>
        <p className="text-xs text-wireframe-dark">• Distribuidor ve botón "Consultar Trabajos"</p>
      </div>
    </div>
  </MockupFrame>
);

export default WorkWithUsScreen;
