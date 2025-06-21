import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export interface CheckboxTableColumn<T> {
  key: string;
  label: string;
  align?: 'left' | 'right' | 'center';
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

export interface CheckboxTableProps<T> {
  columns: CheckboxTableColumn<T>[];
  rows: T[];
  actionComponent?: (row: T) => React.ReactNode;
  checkboxSelection?: boolean;
  onSort?: (key: string) => void;
  sortKey?: string;
  sortDirection?: 'asc' | 'desc';
  onSelectAll?: (checked: boolean) => void;
  onSelectRow?: (row: T, checked: boolean) => void;
  selectedRows?: T[];
}

export default function CheckboxTable<T extends { id: string | number; [key: string]: any }>({
  columns,
  rows,
  actionComponent,
  checkboxSelection = false,
  onSort,
  sortKey,
  sortDirection,
  onSelectAll,
  onSelectRow,
  selectedRows = [],
}: CheckboxTableProps<T>) {
  const theme = useTheme();
  const isSelected = (row: T) => selectedRows.some(r => r.id === row.id);
  const allSelected = rows.length > 0 && rows.every(isSelected);
  const indeterminate = selectedRows.length > 0 && !allSelected;

  return (
    <Box sx={{ width: '100%', overflowX: 'auto', background: theme.palette.background.paper }}>
      <TableContainer sx={{ minWidth: 600, background: theme.palette.background.paper }}>
        <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.table.headerBg }}>
              {checkboxSelection && (
                <TableCell padding="checkbox" sx={{ backgroundColor: theme.table.headerBg }}>
                  <Checkbox
                    color="primary"
                    checked={allSelected}
                    indeterminate={indeterminate}
                    onChange={e => onSelectAll?.(e.target.checked)}
                  />
                </TableCell>
              )}
              {columns.map(col => (
                <TableCell
                  key={col.key}
                  align={col.align || 'left'}
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    color: theme.table.headerText,
                    backgroundColor: theme.table.headerBg,
                    borderBottom: `1px solid ${theme.table.border}`,
                    userSelect: 'none',
                    cursor: col.sortable ? 'pointer' : 'default',
                  }}
                  onClick={col.sortable ? () => onSort?.(col.key) : undefined}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {col.label}
                    {col.sortable && sortKey === col.key && (
                      <ArrowDropDownIcon
                        sx={{
                          fontSize: 18,
                          color: theme.table.headerText,
                          transform: sortDirection === 'desc' ? 'rotate(180deg)' : 'none',
                        }}
                      />
                    )}
                  </Box>
                </TableCell>
              ))}
              {actionComponent && (
                <TableCell align="right" sx={{ backgroundColor: theme.table.headerBg, borderBottom: `1px solid ${theme.table.border}` }} />
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.id}
                hover
                sx={{
                  borderBottom: `1px solid ${theme.table.border}`,
                  backgroundColor: 'inherit',
                  '&:hover': { backgroundColor: `${theme.table.rowHover} !important` },
                }}
              >
                {checkboxSelection && (
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isSelected(row)}
                      onChange={e => onSelectRow?.(row, e.target.checked)}
                    />
                  </TableCell>
                )}
                {columns.map(col => (
                  <TableCell
                    key={col.key}
                    align={col.align || 'left'}
                    sx={{
                      color: theme.table.rowText,
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: 14,
                      borderBottom: `1px solid ${theme.table.border}`,
                      backgroundColor: 'inherit',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </TableCell>
                ))}
                {actionComponent && (
                  <TableCell align="right" sx={{ backgroundColor: 'inherit', borderBottom: `1px solid ${theme.table.border}` }}>
                    {actionComponent(row)}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
} 