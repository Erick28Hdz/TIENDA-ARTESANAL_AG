import Dropdown from "react-bootstrap/Dropdown";

interface SidebarUIProps {
  menu: {
    title: string;
    items: { key: string; label: string }[];
  }[];
  onSelect: (key: string) => void;
}

const SidebarUI = ({ menu, onSelect }: SidebarUIProps) => {
  return (
    <aside className="bg-(--color-primario) w-[20%] m-2.5 rounded-[10px]">
      <div>
        <h1>Nombre perfil</h1>
        <h2>Cargo usuario</h2>
      </div>

      <div className="text-left mt-4 space-y-3">
        {menu.map((group) => (
          <Dropdown key={group.title}>
            <Dropdown.Toggle variant="success">
              {group.title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {group.items.map((item) => (
                <Dropdown.Item
                  key={item.key}
                  onClick={() => onSelect(item.key)}
                >
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        ))}
      </div>
    </aside>
  );
};

export default SidebarUI;
