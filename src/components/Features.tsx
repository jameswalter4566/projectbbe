import { useState } from 'react';

export function Features() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const features = [
    {
      id: '1',
      icon: '⚡',
      title: 'Lightning Performance',
      description: 'Experience blazing fast load times with our optimized infrastructure and cutting-edge caching technology.',
    },
    {
      id: '2',
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and advanced security protocols keep your data and applications completely protected.',
    },
    {
      id: '3',
      icon: '🌐',
      title: 'Global Scale',
      description: 'Deploy worldwide instantly with our distributed network of data centers spanning across every continent.',
    },
    {
      id: '4',
      icon: '🎯',
      title: 'Smart Integration',
      description: 'Seamlessly connect with your favorite tools through our comprehensive API and extensive plugin ecosystem.',
    },
  ];

  return (
    <section style={{
      padding: '120px 24px',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#fff',
            margin: '0 0 16px',
            background: 'linear-gradient(135deg, #fff 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Why Choose Our Platform
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#9ca3af',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Powerful features designed to accelerate your development workflow and scale your applications effortlessly.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '32px',
        }}>
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: '40px',
                background: hoveredId === feature.id
                  ? 'rgba(59, 130, 246, 0.08)'
                  : 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid',
                borderColor: hoveredId === feature.id
                  ? 'rgba(59, 130, 246, 0.4)'
                  : 'rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                transform: hoveredId === feature.id ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredId === feature.id
                  ? '0 20px 60px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)'
                  : '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Gradient overlay */}
              {hoveredId === feature.id && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                  pointerEvents: 'none',
                }} />
              )}

              <div style={{
                position: 'relative',
                zIndex: 1,
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                  transform: hoveredId === feature.id ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                }}>
                  {feature.icon}
                </div>
                
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#fff',
                  margin: '0 0 12px',
                  lineHeight: 1.3,
                }}>
                  {feature.title}
                </h3>
                
                <p style={{
                  fontSize: '16px',
                  color: hoveredId === feature.id ? '#b3c6ff' : '#9ca3af',
                  margin: 0,
                  lineHeight: 1.7,
                  transition: 'color 0.3s ease',
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '48px',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 600,
            color: '#fff',
            margin: '0 0 16px',
          }}>
            Ready to Get Started?
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#9ca3af',
            margin: '0 0 32px',
          }}>
            Join thousands of developers building the future with our platform.
          </p>
          <button style={{
            padding: '14px 28px',
            fontSize: '16px',
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}>
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}