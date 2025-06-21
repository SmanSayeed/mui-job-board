import { TableRow, TableCell, Checkbox, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

export default function JobListingTableRow({ job, onEdit, onDuplicate, onViewStats, onDelete }: {
  job: any;
  onEdit: (id: string) => void;
  onDuplicate: (id: string) => void;
  onViewStats: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <TableRow hover sx={{ borderBottom: '1px solid #E5E7EB', backgroundColor: 'inherit' }}>
      <TableCell padding="checkbox">
        <Checkbox color="primary" />
      </TableCell>
      <TableCell>{job.jobTitle}</TableCell>
      <TableCell>{job.jobType}</TableCell>
      <TableCell>{job.datePosted}</TableCell>
      <TableCell>{job.applicants}</TableCell>
      <TableCell>{job.views}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleMenu} size="small">
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <MenuItem onClick={() => { onEdit(job.id); handleClose(); }}>Edit</MenuItem>
          <MenuItem onClick={() => { onDuplicate(job.id); handleClose(); }}>Duplicate</MenuItem>
          <MenuItem onClick={() => { onViewStats(job.id); handleClose(); }}>View Stats</MenuItem>
          <MenuItem onClick={() => { onDelete(job.id); handleClose(); }} sx={{ color: '#EF4444' }}>Delete</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
} 