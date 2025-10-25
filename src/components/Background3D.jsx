import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Background3D({ scene = 'https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode', overlayFrom = 'from-black/50', overlayVia = 'via-neutral-950/80', overlayTo = 'to-neutral-950', intensity = 'bg-opacity-60' }) {
  return (
    <div className="absolute inset-0 -z-10">
      <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${overlayFrom} ${overlayVia} ${overlayTo} ${intensity}`} />
    </div>
  );
}
