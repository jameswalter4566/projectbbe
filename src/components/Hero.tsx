import { useState } from 'react';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #111827 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      
      {/* Dot grid overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '900px',
      }}>
        {/* Badge/Label */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '100px',
          marginBottom: '32px',
          animation: 'fadeIn 0.8s ease-out',
        }}>
          <span style={{ 
            fontSize: '14px', 
            color: '#3b82f6',
            fontWeight: 500,
          }}>
            The Future is Here
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: '72px',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.1,
          margin: '0 0 24px',
          background: 'linear-gradient(135deg, #fff 0%, #3b82f6 50%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'slideUp 1s ease-out',
        }}>
          Build Tomorrow's
          <br />
          Digital Experience
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '20px',
          color: '#9ca3af',
          lineHeight: 1.6,
          margin: '0 0 48px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          animation: 'slideUp 1s ease-out 0.2s both',
        }}>
          Transform your ideas into powerful digital solutions with cutting-edge technology.
          Join thousands of innovators who are already shaping the future of web development.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'slideUp 1s ease-out 0.4s both',
        }}>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: '#fff',
              background: isHovered
                ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
                : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: isHovered
                ? '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)'
                : '0 10px 30px rgba(59, 130, 246, 0.2)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Start Building
          </button>

          <button 
            onMouseEnter={() => setSecondaryHovered(true)}
            onMouseLeave={() => setSecondaryHovered(false)}
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: secondaryHovered ? '#3b82f6' : '#fff',
              background: 'transparent',
              border: '1px solid',
              borderColor: secondaryHovered ? '#3b82f6' : 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              cursor: 'pointer',
              transform: secondaryHovered ? 'translateY(-1px)' : 'translateY(0)',
              transition: 'all 0.2s ease',
            }}
          >
            View Demo
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '48px',
          justifyContent: 'center',
          marginTop: '64px',
          flexWrap: 'wrap',
        }}>
          {[
            { value: '50K+', label: 'Developers' },
            { value: '1M+', label: 'Projects Built' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center',
              animation: `slideUp 1s ease-out ${0.6 + index * 0.1}s both`,
            }}>
              <div style={{
                fontSize: '28px',
                fontWeight: 700,
                color: '#3b82f6',
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}