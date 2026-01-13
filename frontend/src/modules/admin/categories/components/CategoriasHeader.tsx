interface Props {
  onCreate: () => void;
}

const CategoriasHeader = ({ onCreate }: Props) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-bold">Categorías</h1>

      <button className="btn btn-sm btn-success" onClick={onCreate}>
        ➕ Nueva categoría
      </button>
    </div>
  );
};

export default CategoriasHeader;
