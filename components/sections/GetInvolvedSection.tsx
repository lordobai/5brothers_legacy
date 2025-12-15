'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

const actions = [
  {
    title: 'Donate',
    description: 'Your contribution helps us reach more communities and create lasting impact',
    icon: 'gift' as const,
    link: '/make-a-gift',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-white/10',
  },
  {
    title: 'Volunteer',
    description: 'Join our team of dedicated volunteers and make a difference on the ground',
    icon: 'users' as const,
    link: '/get-involved',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-white/10',
  },
  {
    title: 'Partner',
    description: 'Collaborate with us to amplify our impact and reach more communities',
    icon: 'handshake' as const,
    link: '/get-involved',
    color: 'from-violet-500 to-indigo-600',
    bgColor: 'bg-white/10',
  },
];

export const GetInvolvedSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-indigo-700 via-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-4">
            Get Involved
          </h2>
          <p className="text-xl lg:text-2xl text-blue-50 max-w-3xl xl:max-w-4xl mx-auto">
            Join us in creating positive change. Every action counts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`${action.bgColor} backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 h-full border border-white/20 hover:border-white/30`}>
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-6 shadow-lg mx-auto`}>
                  <Icon name={action.icon} size={40} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{action.title}</h3>
                <p className="text-blue-50 mb-6 leading-relaxed">
                  {action.description}
                </p>
                <Link href={action.link}>
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full shadow-md hover:shadow-lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

