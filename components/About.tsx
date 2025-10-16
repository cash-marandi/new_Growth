
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimationWrapper from './AnimationWrapper';
import AnimatedCopy from './AnimatedCopy';

const About = () => {
  return (
    <AnimationWrapper>
      <section id="about" className=" overflow-hidden min-h-screen bg-slate-700 sticky items-center ">
        <div className="container m-auto">
          <div className="w-full h-full text-center">
            <Card className=" border-none">
              <CardHeader>
                <CardTitle className=" text-5xl lg:text-7xl text-left text-orange-300  font-bebas-neue">Who We Are</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 p-2 m-1 w-full h-screen align-middle items-center">
                  <div className="mt-10 w-full">
                    <AnimatedCopy>
                      <p className="text-secondary text-left text-2xl w-auto md:w-4/4 md:text-4xl">
                        Growth Assist is more than just accountants, we’re your financial partner. Based in Mbombela, we bring local insight, modern tools, and a hands-on approach to help businesses like yours:
                      </p>
                    </AnimatedCopy>
                  </div>
                  
                    <div className="item-center w-full">
                      <img src="/images/1.png" alt="About Image 1" className="w-3/4 rounded-lg h-auto items-center object-cover mt-4 md:mt-4 md:ml-4" />
                
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-2 m-1 h-screen items-center">
                  <div className="item-center w-full">
                    <img src="/images/2.png" alt="About Image 2" className="w-3/4 rounded-lg h-auto object-cover mt-4 md:mt-4 md:ml-4" />
                  
                  </div>
                  <div className="w-full mt-20">
                    <ul className=" list-decimal list-inside text-gray-400 text-left mx-auto max-w-md">
                      <div>
                        <AnimatedCopy>
                          <li className="text-2xl w-auto md:text-4xl ">Cut through red tape and compliance burdens</li>
                        </AnimatedCopy>
                        <AnimatedCopy>
                          <li className="text-2xl w-auto md:text-4xl">Plan for tax, cash flow, and long-term stability</li>
                        </AnimatedCopy>
                        <AnimatedCopy>
                          <li className="text-2xl w-auto md:text-4xl">Understand true profitability and where to grow</li>
                        </AnimatedCopy>
                      </div>
                    </ul>
                  </div>
                </div>
                
                <div className="h-screen">
                  <CardTitle className=" text-5xl md:text-7xl text-orange-300 mt-20 font-bebas-neue text-left">Our Mission</CardTitle>
                  <div className=" grid grid-cols-1 md:grid-cols-2 p-2 m-2">
                    <div className="w-full h-full ">
                      <AnimatedCopy>
                      <p className="text-left text-2xl md:text-4xl">
                        To empower ambitious business owners by making accounting clear, proactive, and growth oriented. We take care of the numbers so you can focus on what you do best.
                      </p>
                      </AnimatedCopy>
                    </div>
                    <div className="item-center w-full">
                      <img src="/images/5.png" alt="About Image 5" className="w-3/4 rounded-lg h-auto object-cover mt-4 md:mt-0 md:ml-4" />
                    </div>
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
