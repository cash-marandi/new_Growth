import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-foreground py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-8">
        {/* Div 1: Logo and Title */}
        <div className="flex flex-col items-center">
          <img src="/images/logo.png" alt="Growth Assist Logo" width="80" className="mt-[3rem] rounded-full object-cover" />
          <h1 className="text-xl font-bold mt-4">Growth Assist</h1>
        </div>

        {/* Div 2: Nav Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-secondary text-lg font-bebas-neue font-bold mb-4">Navigation</h2>
          <Link href="#" className="no-underline text-card my-[0.5rem] hover:text-accent">Home</Link>
          <Link href="#about" className="no-underline text-card my-[0.5rem] hover:text-accent">About</Link>
          <Link href="#services" className="no-underline text-card my-[0.5rem] hover:text-accent">Services</Link>
          <Link href="#contact" className="no-underline text-card my-[0.5rem] hover:text-accent">Contact</Link>
        </div>

        {/* Div 3: Contact Info */}
        <div className="flex flex-col leading-none items-center md:items-start">
          <h2 className="text-lg font-bold text-secondary  font-bebas-neue mb-4">Contact Us</h2>
          <p className="leading-none text-card ">37 Brown Street, Mbombela, <br/> South Africa</p>
          <p className="leading-none text-card ">info@growthassist.co.za</p>
          <p className="leading-none text-card ">0824014845</p>
        </div>

        {/* Div 4: Call to Action */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg  text-secondary font-bold font-bebas-neue mb-4">Get in Touch</h2>
          <p className="leading-none text-card ">Contact us today for expert accounting</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;