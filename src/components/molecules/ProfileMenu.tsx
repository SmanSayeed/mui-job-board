import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProfileImage, { ProfileImageVariant } from '../atoms/ProfileImage';

export interface ProfileMenuItem {
  label: string;
  onClick: () => void;
}

interface ProfileMenuProps {
  src: string;
  profileVariant: ProfileImageVariant;
  menuItems: ProfileMenuItem[];
  icon?: React.ReactElement;
  avatarProps?: Omit<React.ComponentProps<typeof ProfileImage>, 'src' | 'profileVariant'>;
  iconButtonProps?: React.ComponentProps<typeof IconButton>;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  src,
  profileVariant,
  menuItems,
  icon = <ExpandMoreIcon />,
  avatarProps,
  iconButtonProps,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleMenu} sx={{ p: 0 }} {...iconButtonProps}>
        <ProfileImage src={src} profileVariant={profileVariant} {...avatarProps} />
        {icon}
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        {menuItems.map((item, idx) => (
          <MenuItem key={item.label + idx} onClick={() => { item.onClick(); handleClose(); }}>{item.label}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ProfileMenu; 