"use client"
import HeaderLayout from "./HeaderLayout"
import Logo from "../atoms/Logo"
import Navigation from "../molecules/Navigation"
import AuthButtons from "../molecules/AuthButtons"
import MobileNavigation from "../molecules/MobileNavigation"

export interface HeaderProps {
  type?: 'user' | 'recruiter';
}

export default function Header({ type = 'user' }: HeaderProps) {
  return (
    <HeaderLayout
      logo={<Logo type={type} />}
      navigation={<Navigation type={type} />}
      actions={<AuthButtons />}
      mobileActions={<MobileNavigation />}
      fixed={false}
      containerProps={{ maxWidth: "xl" }}
    />
  )
}
