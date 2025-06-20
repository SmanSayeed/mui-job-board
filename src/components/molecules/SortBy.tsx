import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, Box } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const sortOptions = [
  'Highest Match',
  'Remote',
  'Full Time',
  'Internship',
  'Recently Posted',
];

export default function SortBy() {
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    setSelected(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl fullWidth sx={{ mb: 3, background:"#fff" }}>
      <InputLabel
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: { xs: '1rem', md: '1.125rem' },
          lineHeight: 1.3,
          color: '#4B5563',
        }}
      >
        Sort by
      </InputLabel>
      <Select
        label="Sort by"
        multiple
        value={selected}
        onChange={handleChange}
        input={<OutlinedInput label="Sort by" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: { xs: '1rem', md: '1.125rem' },
          lineHeight: 1.3,
          color: '#4B5563',
        }}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={selected.includes(option)} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
        {/* Show More Option */}
        <MenuItem disabled divider sx={{ pointerEvents: 'none', p: 0, m: 0 }}>
          <Box sx={{ width: '100%', px: 2, py: 1 }}>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.3,
                letterSpacing: 0,
                color: '#76A9FA',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <ExpandMoreIcon sx={{ fontSize: 16 }} /> Show more options
            </Typography>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}