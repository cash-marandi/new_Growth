
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimationWrapper from './AnimationWrapper';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Local expertise',
      description: 'We understand the South African business landscape, regulations, and challenges.',
    },
    {
      title: 'Personal service',
      description: 'You aren’t just a number. We tailor solutions to your business.',
    },
    {
      title: 'Transparent pricing',
      description: 'No nasty surprises. Clear quotes and no hidden fees.',
    },
    {
      title: 'Technology-driven',
      description: 'Modern tools, real-time dashboards, efficient workflows.',
    },
    {
      title: 'Peace of mind',
      description: 'Compliance handled, reports delivered on time, your tax burden optimized.',
    },
  ];

  return (
    <AnimationWrapper>
      <section id="why-choose-us" className="py-20 min-h-screen flex items-center bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className=" mx-auto mb-12">
            <h2 className=" text-primary my-10 font-bebas-neue text-6xl md:text-7 text-right">Why Choose Us</h2>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
            <div className="w-full h-full ">
              <p className="text-7xl md:text-8xl text mt-20 mb-5 text-shadow-custom font-playfair-display uppercase leading-none">
              What Makes Us Different
              </p>
            </div>

            <div className="w-full grid grid-cols-2">
              {reasons.map((reason, index) => (
                <Card key={index} className="py-2 box-shadow-custom m-1 bg-slate-900 hover:bg-slate-800 border border-orange-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-orange-300 hover:text-white">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-orange-300 hover:text-white">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default WhyChooseUs;
