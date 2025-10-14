
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimationWrapper from './AnimationWrapper';
import AnimatedCopy from './AnimatedCopy';

const About = () => {
  return (
    <AnimationWrapper>
      <section id="about" className="about-section-margin-y h-full min-h-screen flex items-center bg-primary text-white ">
        <div className="container mx-auto px-40">
          <div className="w-full h-full text-center">
            <Card className="bg-gray-900 border-none about-card-no-shadow">
              <CardHeader>
                <CardTitle className="about-text-4xl-bold font-bold text-left text-secondary font-bebas-neue">Who We Are</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 w-full align-middle items-center  my-[40px]">
                  <div className="w-full md:max-w-[40px] about-text-container md:mx-[4rem]">
                    <AnimatedCopy>
                      <p className="text-gray-400 text-left about-text-lg-bold ">
                        Growth Assist is more than just accountants, we’re your financial partner. Based in Mbombela, we bring local insight, modern tools, and a hands-on approach to help businesses like yours:
                      </p>
                    </AnimatedCopy>
                  </div>
                  
                    <div className="item-center w-full">
                      <img src="/images/1.png" alt="About Image 1" className="w-1/2 rounded-lg h-auto items-center object-cover mt-4 md:mt-4 md:ml-4" />
                
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div className="item-center w-full">
                    <img src="/images/2.png" alt="About Image 2" className="w-1/2 rounded-lg h-auto object-cover mt-4 md:mt-4 md:ml-4" />
                  
                  </div>
                  <div className="w-full md:max-w-[40px] about-text-container md:mx-[4rem]">
                    <ul className="list-disc list-inside text-gray-400 text-left mx-auto max-w-md">
                      <div>
                        <AnimatedCopy>
                          <li className="about-text-lg-bold md:w-1/2 md:mr-4">Cut through red tape and compliance burdens</li>
                        </AnimatedCopy>
                        <AnimatedCopy>
                          <li className="about-text-lg-bold md:w-1/2 md:mr-4">Plan for tax, cash flow, and long-term stability</li>
                        </AnimatedCopy>
                        <AnimatedCopy>
                          <li className="about-text-lg-bold md:w-1/2 md:mr-4">Understand true profitability — and where to grow</li>
                        </AnimatedCopy>
                      </div>
                    </ul>
                  </div>
                </div>
                
                <CardTitle className="text-3xl font-bold my-8 about-text-4xl-bold text-secondary font-bebas-neue text-right">Our Mission</CardTitle>
                <div className="grid grid-cols-2 items-center mt-4">
                  <div className="w-full md:max-w-[40px] about-text-container md:mx-[4rem]">
                    <AnimatedCopy>
                    <p className="text-gray-400 about-text-lg-bold md:w-1/2 md:mr-4">
                      To empower ambitious business owners by making accounting clear, proactive, and growth oriented. We take care of the numbers so you can focus on what you do best.
                    </p>
                    </AnimatedCopy>
                  </div>
                  <div className="item-center w-full">
                    <img src="/images/5.png" alt="About Image 5" className="w-1/2 rounded-lg h-auto object-cover mt-4 md:mt-0 md:ml-4" />
                  </div>
                  </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default About;
