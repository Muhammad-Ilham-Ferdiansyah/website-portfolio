'use client'

export default function Loading() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      width: '100%'
    }}>
      <div style={{
        border: '4px solid rgba(0, 0, 0, 0.1)',
        borderLeftColor: '#767676',
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        animation: 'spin 1s linear infinite',
      }}></div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
} 