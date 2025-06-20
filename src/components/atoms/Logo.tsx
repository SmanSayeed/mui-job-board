import { Typography, useTheme } from "@mui/material";
import Link from "next/link";

export default function Logo() {
    const theme = useTheme();
    return ( <>
   
    {/* <Typography
        variant="h2"
        noWrap
        component="a"
        href="/"
        sx={{
            ml: 1,
            color: 'text.secondary',
            fontWeight: 700,
            fontSize: { xs: '1.25rem', md: '1.5rem' }, // Responsive font size
          }}
      >
        Logo
      </Typography> */}

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