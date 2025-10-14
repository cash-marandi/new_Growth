
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimationWrapper from './AnimationWrapper';

const Testimonials = () => {
  return (
    <AnimationWrapper>
      <section id="testimonials" className="py-20 min-h-screen flex items-center bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">Testimonials / Case Studies</h2>
          </div>
          <Card className="bg-gray-900 border-gray-700 text-left mx-auto max-w-3xl">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-400 mb-4">
                “Before Growth Assist, I never knew if I was losing money. Their monthly reports helped me spot a costly expense and saved me R15 000 within 3 months.”
              </p>
              <p className="text-lg text-gray-400 font-bold">— Client Name, Business</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default Testimonials;
