import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The team at Studio did an amazing job on our rebranding. They truly understood our vision and took it to the next level.",
    author: "Sarah Jenkins",
    role: "CEO, EcoFuture",
    company: "EcoFuture Inc."
  },
  {
    text: "Professional, creative, and timely. The new website has significantly increased our conversion rates.",
    author: "David Chen",
    role: "Marketing Director",
    company: "TechFlow"
  },
  {
    text: "Their attention to detail is unmatched. Every pixel was considered. Highly recommend for any serious project.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "Zen Interior"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>What Clients Say</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px' 
        }}>
          {testimonials.map((item, index) => (
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
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Quote size={40} color="var(--color-text-accent)" style={{ marginBottom: '24px', opacity: 0.5 }} />
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '32px', fontStyle: 'italic' }}>
                "{item.text}"
              </p>
              <div>
                <h4 style={{ fontSize: '18px', marginBottom: '4px' }}>{item.author}</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                  {item.role}, {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
