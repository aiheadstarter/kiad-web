import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, Smartphone, Code } from 'lucide-react';

const services = [
  {
    icon: <Palette size={32} />,
    title: "Brand Identity",
    description: "We create memorable brands that stand out in a crowded market. From Logo design to full brand guidelines."
  },
  {
    icon: <Globe size={32} />,
    title: "Web Design",
    description: "Stunning, responsive websites that convert visitors into customers. We focus on usability and aesthetics."
  },
  {
    icon: <Smartphone size={32} />,
    title: "App Design",
    description: "User-centric mobile app designs that provide seamless experiences across all devices."
  },
  {
    icon: <Code size={32} />,
    title: "Development",
    description: "Clean, efficient code that brings designs to life. We specialize in React, Next.js, and modern tech stacks."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ marginBottom: '16px' }}>Our Services</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px' }}>We barely scratch the surface of what we can do.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px' 
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: 'var(--color-bg)',
                padding: '40px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ y: -5, borderColor: 'var(--color-text-accent)' }}
            >
              <div style={{ 
                color: 'var(--color-text-accent)', 
                marginBottom: '24px',
                display: 'inline-block',
                padding: '12px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '12px'
              }}>
                {service.icon}
              </div>
              <h3 style={{ marginBottom: '16px', fontSize: '24px' }}>{service.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
