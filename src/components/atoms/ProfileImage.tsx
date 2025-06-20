import React from "react";
import { Avatar, AvatarProps } from "@mui/material";

export type ProfileImageVariant = "user_profile_image" | "job_profile_image";

export interface ProfileImageProps extends Omit<AvatarProps, "src"> {
  src: string;
  profileVariant: ProfileImageVariant;
}

const variantSizeMap: Record<ProfileImageVariant, { width: number; height: number }> = {
  user_profile_image: { width: 40, height: 40 },
  job_profile_image: { width: 60, height: 60 },
};

const ProfileImage: React.FC<ProfileImageProps> = ({ src, profileVariant, sx, ...rest }) => {
  const size = variantSizeMap[profileVariant];
  return (
    <Avatar
      src={src}
      sx={{ width: size.width, height: size.height, ...sx }}
      {...rest}
    />
  );
};

export default ProfileImage;
