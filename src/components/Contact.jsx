import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
          <div>
            <h2 style={{ marginBottom: '24px' }}>Let's talk about your project.</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '48px', fontSize: '18px' }}>
              Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ padding: '12px', background: 'var(--color-surface)', borderRadius: '50%' }}>
                  <Mail size={24} color="var(--color-text-accent)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px' }}>Email</h4>
                  <p style={{ color: 'var(--color-text-secondary)' }}>hello@studio.com</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ padding: '12px', background: 'var(--color-surface)', borderRadius: '50%' }}>
                  <Phone size={24} color="var(--color-text-accent)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px' }}>Phone</h4>
                  <p style={{ color: 'var(--color-text-secondary)' }}>+1 (555) 000-0000</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ padding: '12px', background: 'var(--color-surface)', borderRadius: '50%' }}>
                  <MapPin size={24} color="var(--color-text-accent)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px' }}>Office</h4>
                  <p style={{ color: 'var(--color-text-secondary)' }}>123 Design St, Creative City</p>
                </div>
              </div>
            </div>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <input 
                type="text" 
                placeholder="Name" 
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--color-text)',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
              <input 
                type="email" 
                placeholder="Email"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--color-text)',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject"
              style={{
                width: '100%',
                padding: '16px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-text)',
                fontSize: '16px',
                outline: 'none'
              }}
            />
            <textarea 
              rows={6}
              placeholder="Message"
              style={{
                width: '100%',
                padding: '16px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-text)',
                fontSize: '16px',
                outline: 'none',
                resize: 'none'
              }}
            />
            <button className="btn btn-primary" type="submit" style={{ alignSelf: 'start', width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
