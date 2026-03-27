import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";
import type { SectionKey } from "../types/dashboard";

const Dashboard = () => {
  const [selectedSection, setSelectedSection] =
    useState<SectionKey | null>(null);

  return (
    <div className="tienda-virtual flex">
      <Sidebar onSelectSection={setSelectedSection} />
      <DashboardContent selectedSection={selectedSection} />
    </div>
  );
};

export default Dashboard;
