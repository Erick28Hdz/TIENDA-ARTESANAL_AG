import SidebarUI from "@/features/ui/sidebar/sidebar";
import { SIDEBAR_MENU } from "../config/sidebar.config";
import type { SectionKey } from "../types/dashboard";
interface SidebarProps {
  onSelectSection: (section: SectionKey) => void;
}

const Sidebar = ({ onSelectSection }: SidebarProps) => {
  return (
    <SidebarUI
      menu={SIDEBAR_MENU}
      onSelect={(key) => onSelectSection(key as SectionKey)}
    />
  );
};

export default Sidebar;
