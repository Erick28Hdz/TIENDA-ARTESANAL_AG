import Table from "react-bootstrap/Table";
import type { ReactNode } from "react";

export interface UITableColumn<T> {
  key: keyof T | "acciones";
  label: string;
  width?: string;
  grow?: number;
  formatter?: (value: T[keyof T], row: T) => ReactNode;
}

interface UITableProps<T> {
  columns: UITableColumn<T>[];
  data: T[];
  rowKey: (row: T, index: number) => string | number; // 👈 NUEVO
  renderCell?: Partial<Record<string, (row: T) => ReactNode>>;
}

const UITable = <T,>({
  columns,
  data,
  rowKey,
  renderCell,
}: UITableProps<T>) => {
  return (
    <Table striped hover responsive>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)}>{col.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowKey(row, rowIndex)}>
            {columns.map((col) => {
              if (renderCell?.[String(col.key)]) {
                return (
                  <td key={String(col.key)}>
                    {renderCell[String(col.key)]!(row)}
                  </td>
                );
              }

              if (col.key === "acciones") {
                return <td key="acciones" />;
              }

              const value = row[col.key];

              return (
                <td key={String(col.key)}>
                  {col.formatter
                    ? col.formatter(value, row)
                    : String(value)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UITable;
