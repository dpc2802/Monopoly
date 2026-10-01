import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'Monopoly Recruitment';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B2545',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            padding: '80px 120px',
            borderRadius: '40px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: '#0B2545',
              letterSpacing: '-0.05em',
              marginBottom: 10,
              lineHeight: 1,
            }}
          >
            MONOPOLY
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#4CC9F0',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            Recruitment
          </div>
        </div>

        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.9)',
            marginTop: 80,
            letterSpacing: '0.02em',
            fontWeight: 500,
          }}
        >
          Connecting Colombia's bilingual talent with top UK enterprises.
        </div>
      </div>
    ),
    { ...size }
  );
}
