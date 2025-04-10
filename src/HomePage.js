import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20 px-4 bg-gray-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Smarter Sales. Less Work.</h1>
        <p className="text-lg md:text-xl mb-6">Use AI to find leads, send follow-ups, and close deals—while you sleep.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button className="text-lg px-8 py-4">Start Now</Button>
          <Button variant="outline" className="text-lg px-8 py-4">Book a Demo</Button>
        </div>
      </section>
      <section className="py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[{ title: 'Easy Dashboard', desc: 'View all your sales activity in one place with zero confusion.' },
          { title: 'Automated Emails', desc: 'Smart follow-ups triggered by user behavior and timing.' },
          { title: 'CRM Tools', desc: 'Track opens, clicks, responses, and deals automatically.' },
          { title: 'White-Label Option', desc: 'Agencies can rebrand and resell with full customization.' },
          { title: 'Industry Focused', desc: 'Built for real estate, healthcare, finance, and marketing pros.' },
          { title: 'Plug & Play Setup', desc: 'Onboard in minutes. No coding required.' }].map((f, i) => (
          <Card key={i} className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p>{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="py-20 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Simple Pricing for Every Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{ name: 'Starter', price: 49, features: ['Lead Dashboard', 'Basic AI Emails', 'CRM Access'] },
            { name: 'Pro', price: 97, features: ['Everything in Starter', 'Advanced Sequences', 'Email/CRM Automation'] },
            { name: 'Agency', price: 297, features: ['White-Label Tools', 'Client Portals', 'Dedicated Support'] }].map((plan, idx) => (
            <Card key={idx} className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-semibold mb-6">${plan.price}/mo</p>
                <ul className="text-left mb-6 space-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-500" /> {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Choose Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Automate your sales. Grow your business. Save time every day.</p>
        <Button className="text-lg px-10 py-4">Join AI Sales Pros Now</Button>
      </section>
    </div>
  );
}
