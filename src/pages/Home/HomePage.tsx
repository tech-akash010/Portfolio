import React from 'react';
import { HeroCollage } from '../../sections/Hero/HeroCollage';
import { Marquee } from '../../components/Marquee/Marquee';
import { CreativeIdentities } from '../../sections/Identity/CreativeIdentities';
import { SelectedWork } from '../../sections/SelectedWork/SelectedWork';
import { RibbonsLab } from '../../sections/RibbonsLab/RibbonsLab';
import { AboutPreview } from '../../sections/AboutPreview/AboutPreview';
import { Toolkit } from '../../sections/Toolkit/Toolkit';
import { ContactCTA } from '../../sections/Contact/ContactCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Section 01: Hero Collage */}
      <HeroCollage />

      {/* Section 02: Animated Marquee */}
      <Marquee
        text={['DESIGN', 'DEVELOP', 'EXPLORE', 'EXPERIMENT', 'CREATE']}
        speed="normal"
        className="my-6"
      />

      {/* Section 03: Creative Identities */}
      <CreativeIdentities />

      {/* Section 04: Selected Work */}
      <SelectedWork />

      {/* Section 05: Kinetic Ribbons WebGL Lab */}
      <RibbonsLab />

      {/* Section 06: About Preview */}
      <AboutPreview />

      {/* Section 07: My Toolkit */}
      <Toolkit />

      {/* Section 08: Connect CTA */}
      <ContactCTA />
    </div>
  );
};

