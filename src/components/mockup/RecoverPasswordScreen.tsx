import MockupFrame from "./MockupFrame";
import { Mail, ArrowLeft } from "lucide-react";

const RecoverPasswordScreen = () => (
  <MockupFrame title="Recuperar Contraseña" storyId="CAC-001">
    <div className="max-w-sm mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
          <Mail className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Recuperar Contraseña</h2>
        <p className="text-sm text-muted-foreground">
          Ingresa tu correo electrónico y te enviaremos una nueva contraseña
        </p>
      </div>

      <div className="space-y-4">
        <div className="wireframe-box p-3 flex items-center gap-3">
          <Mail className="w-4 h-4 text-wireframe" />
          <span className="text-sm text-muted-foreground">Correo electrónico</span>
        </div>

        <div className="wireframe-box bg-primary/10 p-3 text-center rounded-lg">
          <span className="text-sm font-semibold text-primary">Enviar Nueva Contraseña</span>
        </div>

        <div className="flex items-center justify-center gap-1.5 cursor-pointer text-accent">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="text-xs underline">Volver al Login</span>
        </div>
      </div>

      <div className="mt-6 space-y-1.5 bg-wireframe-light rounded-lg p-3">
        <p className="wireframe-annotation">Criterios de aceptación:</p>
        <p className="text-xs text-wireframe-dark">• Validar formato de correo electrónico</p>
        <p className="text-xs text-wireframe-dark">• Mensaje de éxito: "Se envió una nueva contraseña a tu correo"</p>
        <p className="text-xs text-wireframe-dark">• Si el correo no existe: "El correo no está registrado"</p>
        <p className="text-xs text-wireframe-dark">• Redirigir al login después de enviar</p>
      </div>
    </div>
  </MockupFrame>
);

export default RecoverPasswordScreen;
