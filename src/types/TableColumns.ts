export type TableColumns = {
    Header: string;
    accessor: string | number;
    Cell?: (data: any) => JSX.Element;
}
