
import Link from 'next/link';
import { gsap } from 'gsap';

interface NewHeaderContentProps {
  isOpen: boolean;
  toggleMenu: () => void;
  bebasNeueClassName: string;
}

const NewHeaderContent = ({ isOpen, toggleMenu, bebasNeueClassName }: NewHeaderContentProps) => {

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center text-invert">
      <div className="force-padding-margin" style={{ mixBlendMode: 'normal' }}>
        <Link href="/" className="no-underline">
          <img src="/images/logo.png" alt="Growth Assist Logo" className="w-[80px] h-[80px] rounded-full object-cover" />
        </Link>
      </div>
      <div className="cursor-pointer force-padding-margin relative w-32 h-16" onClick={toggleMenu}>
        <p id="menu-text" className={`w-full h-full flex items-center justify-center text-[35px] font-bebas-neue`}>Menu</p>
        <p id="close-text" className={`w-full h-full flex items-center justify-center text-[35px] font-bebas-neue`} style={{ display: 'none' }}>Close</p>
      </div>
    </header>
  );
};

export default NewHeaderContent;
