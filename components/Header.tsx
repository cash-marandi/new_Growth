
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="no-underline">
          <h1 className="text-2xl font-bold text-primary">Growth Assist</h1>
        </Link>
        <NavigationMenu>
          <NavigationMenuList style={{ gap: '2rem' }}>
            <NavigationMenuItem>
              <Link href="/" className={`${navigationMenuTriggerStyle()} no-underline text-primary`}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#about" className={`${navigationMenuTriggerStyle()} no-underline text-primary`}>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#services" className={`${navigationMenuTriggerStyle()} no-underline text-primary`}>
                Services
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" className={`${navigationMenuTriggerStyle()} no-underline text-primary`}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
