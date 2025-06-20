import { Typography, useTheme } from "@mui/material";
import Link from "next/link";

export default function Logo() {
    const theme = useTheme();
    return ( <>

       {/* Logo */}
       <Typography
              variant="h6"
              component="div"
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                letterSpacing: "-0.01em",
              }}
            >
              Logo
            </Typography>
 
    </>
    )
}