import MockupFrame from "./MockupFrame";
import { CreditCard, ShoppingCart, Truck, CheckCircle } from "lucide-react";

const cartItems = [
  { name: "Fertilizante Orgánico", qty: 2, price: "$45.000", subtotal: "$90.000" },
  { name: "Semillas de Maíz", qty: 1, price: "$22.500", subtotal: "$22.500" },
  { name: "Kit de Riego", qty: 1, price: "$120.000", subtotal: "$120.000" },
];

const PaymentsScreen = () => (
  <MockupFrame title="Pagos – Confirmar Compra" storyId="CAC-009">
    <div className="space-y-5">
      {/* Steps */}
      <div className="flex items-center justify-center gap-2">
        {[
          { icon: ShoppingCart, label: "Carrito", done: true },
          { icon: CreditCard, label: "Pago", done: false },
          { icon: Truck, label: "Envío", done: false },
          { icon: CheckCircle, label: "Confirmación", done: false },
        ].map(({ icon: Icon, label, done }, i) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
              done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}>
              <Icon className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-medium text-muted-foreground hidden sm:inline">{label}</span>
            {i < 3 && <div className="w-6 h-px bg-border" />}
          </div>
        ))}
      </div>

      {/* Cart summary */}
      <div className="space-y-2">
        <p className="wireframe-annotation">Resumen del pedido</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b-2 border-border">
                {["Producto", "Cant.", "Precio", "Subtotal"].map((h) => (
                  <th key={h} className="text-left py-2 px-2 wireframe-annotation">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.name} className="border-b border-border">
                  <td className="py-2 px-2 font-medium text-foreground">{item.name}</td>
                  <td className="py-2 px-2">{item.qty}</td>
                  <td className="py-2 px-2">{item.price}</td>
                  <td className="py-2 px-2 font-semibold text-primary">{item.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <div className="wireframe-box p-3 text-right">
            <p className="text-xs text-muted-foreground">Total</p>
            <p className="text-lg font-bold text-primary">$232.500</p>
          </div>
        </div>
      </div>

      {/* Payment method */}
      <div className="space-y-3">
        <p className="wireframe-annotation">Método de pago</p>
        <div className="grid grid-cols-3 gap-2">
          {["Tarjeta de Crédito", "PSE / Transferencia", "Contra Entrega"].map((m, i) => (
            <div key={m} className={`wireframe-box p-3 text-center cursor-pointer rounded-lg ${
              i === 0 ? "border-primary bg-primary/5" : ""
            }`}>
              <CreditCard className="w-5 h-5 mx-auto mb-1 text-wireframe" />
              <span className="text-[10px] font-medium text-foreground">{m}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping address */}
      <div className="space-y-2">
        <p className="wireframe-annotation">Dirección de envío</p>
        <div className="wireframe-box p-3">
          <span className="text-sm text-muted-foreground">Cra 15 #23-45, Bogotá (registrada)</span>
        </div>
      </div>

      <div className="wireframe-box bg-primary/10 p-3 text-center rounded-lg">
        <span className="text-sm font-semibold text-primary">Confirmar y Pagar</span>
      </div>

      <div className="bg-wireframe-light rounded-lg p-3 space-y-1.5">
        <p className="wireframe-annotation">Criterios:</p>
        <p className="text-xs text-wireframe-dark">• Resumen de productos, cantidades y precios</p>
        <p className="text-xs text-wireframe-dark">• Selección de método de pago</p>
        <p className="text-xs text-wireframe-dark">• Dirección de envío del usuario registrado</p>
        <p className="text-xs text-wireframe-dark">• Confirmación genera un pedido en el sistema</p>
      </div>
    </div>
  </MockupFrame>
);

export default PaymentsScreen;
