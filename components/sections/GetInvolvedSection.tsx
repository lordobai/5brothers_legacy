'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { useTranslations } from '@/contexts/LanguageContext';

export const GetInvolvedSection = () => {
  const t = useTranslations();
  
  const actions = [
    {
      title: t.home.getInvolved.donateTitle,
      description: t.home.getInvolved.donateDescription,
      icon: 'gift' as const,
      link: '/make-a-gift',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-white/10',
    },
    {
      title: t.home.getInvolved.volunteerTitle,
      description: t.home.getInvolved.volunteerDescription,
      icon: 'users' as const,
      link: '/get-involved',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-white/10',
    },
    {
      title: t.home.getInvolved.partnerTitle,
      description: t.home.getInvolved.partnerDescription,
      icon: 'handshake' as const,
      link: '/get-involved',
      color: 'from-violet-500 to-indigo-600',
      bgColor: 'bg-white/10',
    },
  ];
  return (
    <section className="section-padding bg-gradient-to-br from-[#0B334A] via-[#0F4A6A] to-[#0B334A] text-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-4">
            {t.home.getInvolved.title}
          </h2>
          <p className="text-xl lg:text-2xl text-blue-50 max-w-3xl xl:max-w-4xl mx-auto">
            {t.home.getInvolved.subtitle}
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
                    {t.home.getInvolved.getStarted}
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

