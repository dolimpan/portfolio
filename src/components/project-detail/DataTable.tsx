import "./DataTable.css"

export interface DataTableColumn<T> {
    key: keyof T;
    label: string;
    width?: string;
    align?: "left" | "center" | "right";
}

interface DataTableProps<T> {
    columns: DataTableColumn<T>[];
    rows: T[];
}

function DataTable<T extends object>({ columns, rows }: DataTableProps<T>) {
    const gridTemplateColumns = columns
        .map((column) => `minmax(0, ${column.width ?? "1fr"})`)
        .join(" ");

    return (
        <div className="data-table" style={{ gridTemplateColumns }}>
            {columns.map((column) => (
                <span
                    key={String(column.key)}
                    className="data-table__cell data-table__cell--head"
                    data-column={String(column.key)}
                    style={{ textAlign: column.align ?? "left" }}
                >
                    {column.label}
                </span>
            ))}
            {rows.map((row, rowIndex) => (
                columns.map((column) => (
                    <span
                        key={`${rowIndex}-${String(column.key)}`}
                        className="data-table__cell"
                        data-column={String(column.key)}
                        style={{ textAlign: column.align ?? "left" }}
                    >
                        {String(row[column.key])}
                    </span>
                ))
            ))}
        </div>
    );
}

export default DataTable;
