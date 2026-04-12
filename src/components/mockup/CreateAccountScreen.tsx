import MockupFrame from "./MockupFrame";
import { User, Lock, Mail, Phone, MapPin, ArrowLeft, Eye } from "lucide-react";

const CreateAccountScreen = () => (
  <MockupFrame title="Crear Cuenta" storyId="CAC-001">
    <div className="max-w-sm mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">CA</span>
        </div>
        <h2 className="text-xl font-bold text-foreground">Crear Cuenta</h2>
        <p className="text-sm text-muted-foreground">Completa tus datos para registrarte</p>
      </div>

      <div className="space-y-3">
        <div className="wireframe-box p-3 flex items-center gap-3">
          <User className="w-4 h-4 text-wireframe" />
          <span className="text-sm text-muted-foreground">Nombre de usuario</span>
        </div>
        <div className="wireframe-box p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-wireframe" />
            <span className="text-sm text-muted-foreground">Contraseña</span>
          </div>
          <Eye className="w-4 h-4 text-wireframe" />
        </div>
        <div className="wireframe-box p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-wireframe" />
            <span className="text-sm text-muted-foreground">Confirmar contraseña</span>
          </div>
          <Eye className="w-4 h-4 text-wireframe" />
        </div>
        <div className="wireframe-box p-3 flex items-center gap-3">
          <Mail className="w-4 h-4 text-wireframe" />
          <span className="text-sm text-muted-foreground">Correo electrónico</span>
        </div>
        <div className="wireframe-box p-3 flex items-center gap-3">
          <Phone className="w-4 h-4 text-wireframe" />
          <span className="text-sm text-muted-foreground">Teléfono</span>
        </div>
        <div className="wireframe-box p-3 flex items-center gap-3">
          <MapPin className="w-4 h-4 text-wireframe" />
          <span className="text-sm text-muted-foreground">Dirección</span>
        </div>

        <div className="wireframe-box bg-primary/10 p-3 text-center rounded-lg">
          <span className="text-sm font-semibold text-primary">Registrarse</span>
        </div>

        <div className="flex items-center justify-center gap-1.5 cursor-pointer text-accent">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="text-xs underline">Volver al Login</span>
        </div>
      </div>

      <div className="mt-6 space-y-1.5 bg-wireframe-light rounded-lg p-3">
        <p className="wireframe-annotation">Criterios de aceptación:</p>
        <p className="text-xs text-wireframe-dark">• Si el usuario ya existe: "El usuario ya está registrado"</p>
        <p className="text-xs text-wireframe-dark">• Validar todos los campos obligatorios</p>
        <p className="text-xs text-wireframe-dark">• Contraseñas deben coincidir</p>
        <p className="text-xs text-wireframe-dark">• Registrar: usuario, contraseña, correo, teléfono, dirección</p>
        <p className="text-xs text-wireframe-dark">• Al registrar exitosamente → redirigir al Login</p>
      </div>
    </div>
  </MockupFrame>
);

export default CreateAccountScreen;
