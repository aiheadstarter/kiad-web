import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "EcoFuture",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Urban Architecture",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1481487484168-9b930d5b7d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "TechFlow App",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Zen Interior",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '60px' }}>
          <div>
            <h2 style={{ marginBottom: '16px' }}>Selected Works</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px' }}>Highlights from our recent projects.</p>
          </div>
          <button className="btn btn-outline">View All Projects</button>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
          gap: '32px' 
        }}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="project-card"
              style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}
            >
              <div style={{ position: 'relative', paddingBottom: '75%' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '32px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  pointerEvents: 'none'
                }}>
                  <span style={{ 
                    color: 'var(--color-text-accent)', 
                    fontSize: '14px', 
                    fontWeight: 600, 
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                    display: 'block'
                  }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: '24px' }}>{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
