import { TableRow, TableCell, Menu, MenuItem, Divider, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import RoundedIconButton from '../atoms/RoundedIconButton';
import { useTheme } from '@mui/material/styles';
import BpCheckbox from '../atoms/BpCheckbox';


export default function JobListingTableRow({ 
  job, 
  checked = false,
  onCheckChange,
  onEdit,
  onOpen,
  onDuplicate, 
  onViewStats, 
  onDelete 
}: {
  job: any;
  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;
  onEdit: (id: string) => void;
  onOpen: (id: string) => void;
  onDuplicate: (id: string) => void;
  onViewStats: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const theme = useTheme();
  const valueCellSx = { color: theme.jobListingTable.rowText, fontFamily: 'Inter, sans-serif', fontWeight: 400 };
  
  return (
    <TableRow
      hover
      sx={{
        borderBottom: `1px solid ${theme.jobListingTable.border}`,
        backgroundColor: checked ? `${theme.jobListingTable.rowHover} !important` : 'inherit',
        '&:hover': { backgroundColor: `${theme.jobListingTable.rowHover} !important` },
      }}
    >
      <TableCell padding="checkbox">
        <BpCheckbox 
          checked={checked} 
          onChange={e => onCheckChange?.(e.target.checked)} 
        />
      </TableCell>
      <TableCell sx={valueCellSx}>{job.jobTitle}</TableCell>
      <TableCell sx={valueCellSx}>{job.jobType}</TableCell>
      <TableCell sx={valueCellSx}>{job.datePosted}</TableCell>
      <TableCell sx={valueCellSx}>{job.applicants}</TableCell>
      <TableCell sx={valueCellSx}>{job.views}</TableCell>
      <TableCell
        align="right"
        sx={{ width: 1, whiteSpace: 'nowrap' }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <RoundedIconButton
            icon={<MoreVertIcon sx={{ color: theme.jobListingTable.actionButtonIcon }} />}
            color="blue"
            buttonProps={{ 
              onClick: handleMenu, 
              size: 'small',
              'aria-controls': open ? 'job-menu' : undefined,
              'aria-haspopup': 'true',
              'aria-expanded': open ? 'true' : undefined,
            }}
          />
          <Menu 
            id="job-menu"
            anchorEl={anchorEl} 
            open={open} 
            onClose={handleClose} 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClick={(e) => e.stopPropagation()}
          >
            <MenuItem onClick={() => { onEdit(job.id); handleClose(); }}>Edit</MenuItem>
            <MenuItem onClick={() => { onOpen(job.id); handleClose(); }}>Open</MenuItem>
            <MenuItem onClick={() => { onDuplicate(job.id); handleClose(); }}>Duplicate</MenuItem>
            <MenuItem onClick={() => { onViewStats(job.id); handleClose(); }}>View Stats</MenuItem>
            <Divider />
            <MenuItem onClick={() => { onDelete(job.id); handleClose(); }} sx={{ color: '#EF4444' }}>Delete</MenuItem>
          </Menu>
        </Box>
      </TableCell>
    </TableRow>
  );
} 