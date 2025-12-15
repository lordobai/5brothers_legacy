'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Icon } from '@/components/ui/Icon';

const metrics = [
  { 
    value: 12500, 
    suffix: '+', 
    label: 'People Impacted', 
    icon: 'users' as const, 
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
  },
  { 
    value: 30, 
    suffix: '+', 
    label: 'Communities Served', 
    icon: 'mapPin' as const, 
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
  },
  { 
    value: 500, 
    suffix: '+', 
    label: 'Volunteers Engaged', 
    icon: 'handshake' as const, 
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
  },
  { 
    value: 7, 
    suffix: '', 
    label: 'Program Areas', 
    icon: 'barChart3' as const, 
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
  },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const ImpactMetrics = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-slate-900 mb-4">
            Our Impact at a Glance
          </h2>
          <p className="text-xl lg:text-2xl text-slate-700 max-w-3xl xl:max-w-4xl mx-auto">
            Numbers that reflect our commitment to creating lasting change
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-6 shadow-md`}>
                  <Icon name={metric.icon} size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent mb-2">
                  <Counter end={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-slate-700 font-medium">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

