import MockupFrame from "./MockupFrame";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactScreen = () => (
  <MockupFrame title="Contactos" storyId="CAC-002">
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Phone className="w-10 h-10 text-primary mx-auto" />
        <h3 className="text-lg font-bold text-foreground">Contactos</h3>
        <p className="text-sm text-muted-foreground">Estamos aquí para ayudarte</p>
      </div>

      {/* Contact info */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Phone, label: "Teléfono", value: "+57 300 123 4567" },
          { icon: Mail, label: "Correo", value: "info@celesteagrotec.com" },
          { icon: MapPin, label: "Dirección", value: "Cra 15 #23-45, Bogotá" },
          { icon: Clock, label: "Horario", value: "Lun-Vie 8am - 6pm" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="wireframe-box p-3 text-center space-y-2">
            <Icon className="w-5 h-5 text-primary mx-auto" />
            <p className="text-[10px] wireframe-annotation">{label}</p>
            <p className="text-xs font-medium text-foreground">{value}</p>
          </div>
        ))}
      </div>

      {/* Contact form */}
      <div className="space-y-3">
        <p className="wireframe-annotation">Formulario de contacto</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="wireframe-box p-3">
            <span className="text-sm text-muted-foreground">Nombre</span>
          </div>
          <div className="wireframe-box p-3">
            <span className="text-sm text-muted-foreground">Correo</span>
          </div>
        </div>
        <div className="wireframe-box p-3">
          <span className="text-sm text-muted-foreground">Asunto</span>
        </div>
        <div className="wireframe-box p-6 text-center">
          <span className="text-xs text-muted-foreground">Escribe tu mensaje aquí...</span>
        </div>
        <div className="wireframe-box bg-primary/10 p-3 text-center rounded-lg flex items-center justify-center gap-2">
          <Send className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Enviar Mensaje</span>
        </div>
      </div>

      <div className="bg-wireframe-light rounded-lg p-3 space-y-1.5">
        <p className="wireframe-annotation">Notas:</p>
        <p className="text-xs text-wireframe-dark">• Información de contacto de la empresa</p>
        <p className="text-xs text-wireframe-dark">• Formulario para enviar mensajes directos</p>
        <p className="text-xs text-wireframe-dark">• Mapa de ubicación (placeholder)</p>
      </div>
    </div>
  </MockupFrame>
);

export default ContactScreen;
