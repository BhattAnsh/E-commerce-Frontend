import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import SearchBar from "./Components/SearchBar";
export default function CustomNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-sec w-full gap-10">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden z-10"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-textColor">SwiftCart</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent>
        <SearchBar></SearchBar>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link className="text-textColor" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-background" href="#">
            Cart
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-textColor" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-textColor hover:text-buttonColor transition ease-in-out">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" className="bg-buttonColor text-textColor" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
