'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Icon } from '@/components/ui/Icon';
import { useTranslations } from '@/contexts/LanguageContext';

// Metrics will be created inside component to access translations

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasStarted) return;

    const currentRef = counterRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
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
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [end, hasStarted]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const ImpactMetrics = () => {
  const t = useTranslations();
  
  const metrics = [
    { 
      value: 1500, 
      suffix: '+', 
      label: t.home.metrics.peopleImpacted, 
      icon: 'users' as const, 
      color: 'from-[#0B334A] to-[#0F4A6A]',
      bgColor: 'bg-slate-50',
    },
    { 
      value: 10, 
      suffix: '+', 
      label: t.home.metrics.communitiesServed, 
      icon: 'mapPin' as const, 
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
    },
    { 
      value: 50, 
      suffix: '+', 
      label: t.home.metrics.volunteersEngaged, 
      icon: 'handshake' as const, 
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-50',
    },
    { 
      value: 6, 
      suffix: '', 
      label: t.home.metrics.programAreas, 
      icon: 'barChart3' as const, 
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
    },
  ];
  
  return (
    <section className="section-padding bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-slate-900 mb-4">
            {t.home.metrics.title}
          </h2>
          <p className="text-xl lg:text-2xl text-slate-700 max-w-3xl xl:max-w-4xl mx-auto">
            {t.home.metrics.subtitle}
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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0B334A] via-[#0F4A6A] to-[#DE3C3A] bg-clip-text text-transparent mb-2">
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

