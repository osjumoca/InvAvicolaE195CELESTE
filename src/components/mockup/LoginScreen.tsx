import MockupFrame from "./MockupFrame";
import { Lock, Mail, Eye } from "lucide-react";

const LoginScreen = () => (
  <MockupFrame title="Pantalla de Login" storyId="CAC-001">
    <div className="max-w-sm mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">CA</span>
        </div>
        <h2 className="text-xl font-bold text-foreground">Celeste Agrotec</h2>
        <p className="text-sm text-muted-foreground">Inicia sesión para continuar</p>
      </div>

      <div className="space-y-4">
        <div className="wireframe-box p-3 flex items-center gap-3">
          <Mail className="w-4 h-4 text-wireframe" />
          <span className="text-sm text-muted-foreground">Usuario o correo electrónico</span>
        </div>
        <div className="wireframe-box p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-wireframe" />
            <span className="text-sm text-muted-foreground">Contraseña</span>
          </div>
          <Eye className="w-4 h-4 text-wireframe" />
        </div>

        <div className="wireframe-box bg-primary/10 p-3 text-center rounded-lg">
          <span className="text-sm font-semibold text-primary">Ingresar</span>
        </div>

        <p className="text-center text-xs text-accent underline cursor-pointer">
          ¿Olvidaste tu contraseña?
        </p>

        <div className="border-t border-border pt-4">
          <div className="wireframe-box p-3 text-center rounded-lg">
            <span className="text-sm font-medium text-foreground">Crear Cuenta</span>
          </div>
        </div>
      </div>

      {/* Annotations */}
      <div className="mt-6 space-y-1.5 bg-wireframe-light rounded-lg p-3">
        <p className="wireframe-annotation">Criterios de aceptación:</p>
        <p className="text-xs text-wireframe-dark">• Validar formato usuario/contraseña</p>
        <p className="text-xs text-wireframe-dark">• Mensaje: "Credenciales incorrectas" si falla</p>
        <p className="text-xs text-wireframe-dark">• Recuperar contraseña vía email</p>
      </div>
    </div>
  </MockupFrame>
);

export default LoginScreen;
