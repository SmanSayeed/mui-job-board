"use client"
import { Button } from "@mui/material"
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

export default function EditProfileButton() {
  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<DriveFileRenameOutlineOutlinedIcon />}
      sx={{
        width:"50%"
      }}
    >
      Edit Profile
    </Button>
  )
}
