import type { SectionKey } from "../dashboard/types/dashboard";

interface PanelPrincipalProps {
  selectedSection: SectionKey;
}

const PanelPrincipal = ({ selectedSection }: PanelPrincipalProps) => {
  return (
    <div>
      <h2>Sección actual: {selectedSection}</h2>

      {selectedSection === "productos" && <div>Productos</div>}
      {selectedSection === "pedidos" && <div>Pedidos</div>}
      {selectedSection === "graficos" && <div>Gráficos</div>}
      {selectedSection === "usuarios" && <div>Usuarios</div>}
      {selectedSection === "ganancias" && <div>Ganancias</div>}
      {selectedSection === "categorias" && <div>Categorías</div>}
    </div>
  );
};

export default PanelPrincipal;
