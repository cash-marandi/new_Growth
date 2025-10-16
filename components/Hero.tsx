import { Button } from '@/components/ui/button';
import AnimationWrapper from './AnimationWrapper';
import { DottedGlowBackground } from './ui/dotted-glow-background';

const Hero = () => {
  return (
    <AnimationWrapper>
      <section className="min-h-[80vh] h-screen p-5 md:p-20 relative flex items-end bg-background text-secondary top-0">
        <DottedGlowBackground className="absolute w-full h-full min-h-dvh inset-0 z-0" />
        <div className="container bottom-0 mx-auto px-4 text-center relative z-50">

          <div className='h-full '>
            <h1 className=" text-5xl  md:text-7xl lg:text-8xl mt-50  leading-none font-bold text-shadow-custom font-playfair-display uppercase text-left text-foreground drop-shadow-lg">
              Accounting That <br/>Works for You
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <div className="h-full">
              <p className="text-primary mb-5 text-shadow-custom text-left w-3/4  drop-shadow-lg">
                From tax compliance to financial clarity. We help your business grow, reduce stress, and stay ahead.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              <Button asChild className="p-3 border border-primary rounded-full bg-accent text-background transition-all duration-300 ease-in-out hover:scale-110">
                <a href="#contact" className="!no-underline">Sign up →</a>
              </Button>
              <Button asChild className="p-3 border border-primary rounded-full bg-primary text-background transition-all duration-300 ease-in-out  hover:scale-110">
                <a href="#contact" className="!no-underline">Get your free compliance check →</a>
              </Button>
            </div>

          </div>
          

        </div>
      </section>
    </AnimationWrapper>
  );
};

export default Hero;
