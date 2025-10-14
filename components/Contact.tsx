
"use client";

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import AnimationWrapper from './AnimationWrapper';
import content from '../content.json';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('submitted');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <AnimationWrapper>
      <section id="contact" className="py-20 min-h-screen about-section-margin-y flex items-center bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className=" text-primary font-bebas-neue text-[3.5rem] font-bold">Why Choose Us</h2>
            
          </div>
         
          <div className="grid grid-cols-2 h-full w-full md:grid-cols-2 gap-8">
            <Card className="bg-primary h-[24rem] p-[10] m-[10] border-primary">
              <CardHeader>
                <CardTitle className="text-[3.4rem] text-foreground m-[5]">DROP US A LINE!</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="mx-[5] my-[10]">
                    <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-card text-foreground p-[4] border-foreground" />
                  </div>
                  <div className="mx-[5] my-[10]">
                    <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-card text-foreground p-[4] border-foreground" />
                  </div>
                  <div className="mx-[5] my-[10]">
                    <Textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-card h-[100] text-foreground p-[4] border-foreground" />
                  </div>
                  <Button type="submit" className='m-[5] p-[5] w-[4rem] bg-secondary hover:bg-card text-foreground' disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send'}
                  </Button>
                  {status === 'submitted' && <p className="text-green-500 mt-4">Message sent successfully!</p>}
                  {status === 'error' && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
                </form>
              </CardContent>
            </Card>
            <div className="relative h-full">
              <div className="social-icons-container">
                <Link href="#" className="text-lg text-primary hover:text-primary transition-colors"><FaFacebook size={24} /></Link>
                <Link href="#" className="text-lg text-primary hover:text-primary transition-colors"><FaInstagram size={24} /></Link>
                <Link href="#" className="text-lg text-primary hover:text-primary transition-colors"><FaTwitter size={24} /></Link>
                <Link href="#" className="text-lg text-primary hover:text-primary transition-colors"><FaLinkedinIn size={24} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default Contact;
