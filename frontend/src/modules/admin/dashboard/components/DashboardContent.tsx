import type { SectionKey } from "../types/dashboard";
import { SECTION_COMPONENT_MAP } from "../config/section-map";

interface DashboardContentProps {
  selectedSection: SectionKey | null;
}

const DashboardContent = ({ selectedSection }: DashboardContentProps) => {
  return (
    <section className="w-[80%] p-5 overflow-y-auto">
      {selectedSection ? (
        SECTION_COMPONENT_MAP[selectedSection]
      ) : (
        <div>
          <h3>Bienvenido al Panel de Control</h3>
          <p>Selecciona una opción del menú para comenzar.</p>
        </div>
      )}
    </section>
  );
};

export default DashboardContent;
