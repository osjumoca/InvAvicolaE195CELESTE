import MockupFrame from "./MockupFrame";
import { Search, SlidersHorizontal, RefreshCw, Plus, ShoppingCart } from "lucide-react";

const products = [
  { name: "Fertilizante Orgánico", price: "$45.000", cat: "Insumos" },
  { name: "Semillas de Maíz", price: "$22.500", cat: "Semillas" },
  { name: "Herbicida Natural", price: "$38.000", cat: "Fitosanitarios" },
  { name: "Kit de Riego", price: "$120.000", cat: "Herramientas" },
  { name: "Abono Compuesto", price: "$55.000", cat: "Insumos" },
  { name: "Guantes de Trabajo", price: "$15.000", cat: "Herramientas" },
];

const ProductsScreen = () => (
  <MockupFrame title="Gestión de Productos" storyId="CAC-003">
    <div className="space-y-4">
      {/* Search bar */}
      <div className="flex gap-2">
        <div className="flex-1 wireframe-box p-2.5 flex items-center gap-2">
          <Search className="w-4 h-4 text-wireframe" />
          <span className="text-sm text-muted-foreground">Buscar productos...</span>
        </div>
        <div className="wireframe-box p-2.5 flex items-center gap-1 cursor-pointer">
          <SlidersHorizontal className="w-4 h-4 text-wireframe" />
          <span className="text-xs text-muted-foreground">Filtros</span>
        </div>
        <div className="wireframe-box p-2.5 flex items-center cursor-pointer">
          <RefreshCw className="w-4 h-4 text-wireframe" />
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {products.map((p) => (
          <div key={p.name} className="wireframe-box p-3 space-y-2 relative group">
            <div className="h-20 bg-wireframe-light rounded flex items-center justify-center">
              <span className="wireframe-annotation">{p.cat}</span>
            </div>
            <p className="text-xs font-semibold text-foreground truncate">{p.name}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary">{p.price}</span>
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer">
                <Plus className="w-3.5 h-3.5 text-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart FAB */}
      <div className="flex justify-end">
        <div className="wireframe-box bg-primary/10 px-4 py-2.5 flex items-center gap-2 rounded-full cursor-pointer">
          <ShoppingCart className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-primary">Carrito (3)</span>
        </div>
      </div>

      <div className="bg-wireframe-light rounded-lg p-3 space-y-1.5">
        <p className="wireframe-annotation">Criterios:</p>
        <p className="text-xs text-wireframe-dark">• Buscador alfanumérico con botón X para limpiar</p>
        <p className="text-xs text-wireframe-dark">• Filtros por categoría con popup</p>
        <p className="text-xs text-wireframe-dark">• Botón (+) despliega formulario de cantidad</p>
        <p className="text-xs text-wireframe-dark">• Carrito flotante muestra total de items</p>
      </div>
    </div>
  </MockupFrame>
);

export default ProductsScreen;
