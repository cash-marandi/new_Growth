
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
      <section id="pricing-plans" className="py-20 about-section-margin-y min-h-screen flex items-center bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-left text-secondary text-[3.5rem] font-bebas-neue">Pricing Plans</h2>
            <p className="text-lg text-gray-400">
              Make sure this section is simple, comparative, and shows value.
            </p>
          </div>
          <div className="grid grid-cols-3  md:grid-cols-3 h-full w-full gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="bg-accent service-card-width border-foreground">
                <CardHeader>
                  <CardTitle className="text-xl font-playfair-display uppercase text-foreground font-bold">{plan.name}</CardTitle>
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
