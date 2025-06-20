"use client"
import { Typography, useTheme } from "@mui/material";
import Link from "next/link";

export default function Logo() {
    const theme = useTheme();
    return ( <>

       {/* Logo */}
       <Link href="/">
       <Typography
              variant="h1"
              component="div"
              sx={{
                color: 'text.primary',
                fontSize: { xs: "1.125rem", md: "1.5rem" },
                lineHeight: 1.1,
                letterSpacing: 0,
                verticalAlign: "middle",
              }}
            >
              Logo
            </Typography>
        </Link>
       

 
    </>
    )
}