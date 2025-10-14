
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
      <section id="why-choose-us" className="py-20 about-section-margin-y min-h-screen flex items-center bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className=" text-primary font-bebas-neue text-[3.5rem] font-bold">Why Choose Us</h2>
            
          </div>
          <div className="flex flex-2">
            <div className="w-full h-full relative">
              <p className="text-lg text-secondary absolute text-shadow-custom font-playfair-display uppercase text-[5.5rem] leading-none">
              What Makes Us Different
              </p>
            </div>

            <div className="w-full ">
              {reasons.map((reason, index) => (
                <Card key={index} className="p-[1rem] box-shadow-custom m-[1rem] bg-primary hover:bg-accent border-primary">
                  <CardHeader>
                    <CardTitle className="text-[1.5rem] text-secondary hover:text-secondary why-text-lg-bold leading-none">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary hover:text-secondary">{reason.description}</p>
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
