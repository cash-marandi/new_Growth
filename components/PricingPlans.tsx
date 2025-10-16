
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimationWrapper from './AnimationWrapper';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Starter',
      bestFor: 'Small sole proprietors, startups',
      inclusions: 'Basic bookkeeping, annual tax, compliance check',
      price: 'R-xxxx/month',
    },
    {
      name: 'Growth',
      bestFor: 'Growing businesses, small teams',
      inclusions: 'Monthly reports, cash-flow forecasts, advisory sessions',
      price: 'R-xxxx/month',
    },
    {
      name: 'Premium',
      bestFor: 'Businesses with employees / complex needs',
      inclusions: 'Payroll, tax strategy, full advisory, custom dashboards',
      price: 'R-xxxx/month',
    },
  ];

  return (
    <AnimationWrapper>
      <section id="pricing-plans" className="py-20 about-section-margin-y min-h-screen">
        <div className="px-4">
          <div className=" text-center mb-12">
            <h2 className=" text-5xl md:text-7xl my-5 uppercase font-oswald">Pricing Plans</h2>
            <p className="text-1xl font-bold text-orange-300 ">
              Expert accounting packages that are a perfect fir for your business 
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="bg-slate-800 border-foreground w-full">
                <CardHeader>
                  <CardTitle className="text-xl font-playfair-display uppercase text-orange-300 font-bold">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-2"><strong>BEST FOR:</strong> {plan.bestFor}</p>
                  <p className="text-foreground mb-2"><strong>INCLUSIONS:</strong> {plan.inclusions}</p>
                  <p className="text-foreground"><strong>PRICE:</strong> {plan.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8">*Prices subject to change. Contact us for exact quote.</p>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default PricingPlans;
