import { Check } from 'lucide-react';

import { Button } from '@/components/Button';
import { CodeBrackets, Pointer } from '@/components/Illustration';
import { Growth, PuzzlePiece, SpeedingClock } from '@/components/Icon';
import { Label } from '@/components/Label';
import { FreshEyesAuditSchedulingLink } from '@/config/navigation.config';

export const ServicesSection = () => {
  return (
    <div className="relative mb-12 bg-gradient-to-b from-black-50 via-sun/5 to-black-50 dark:from-black dark:to-black md:mb-24">
      <div className="px-container mx-auto max-w-container">
        <div className="mx-auto max-w-4xl text-center md:mb-12">
          <h2 className="font-accent text-4xl font-medium md:text-5xl">
            Combining product and design.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-xl md:text-2xl">
            Delve into the philosophy of design through my eyes, where each creation is not just built, 
            but meticulously crafted with soulful purpose. 
            In choosing to work with me, you are not just hiring a designer; 
            you are embracing a unique vision that intertwines empathy with innovation, 
            ensuring your product not only meets functional needs but also speaks to the heart of 
            the user experience.
          </p>
        </div>
        <div className="my-12 flex items-center justify-center">
          <Label color="gray" size="lg">
            How collaborations can look like
          </Label>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
          {services.map(({ title, benefits, Decoration }) => {
            return (
              <div key={title} className="flex">
                <div className="relative max-w-sm rounded-2xl border-2 border-violet/75 bg-black-50 px-8 py-10 ring-2 ring-violet/25 ring-offset-2 dark:bg-black dark:ring-offset-black">
                  <h3 className="font-accent text-3xl font-medium">
                    You primarily need a{' '}
                    <span className="text-violet">{title}</span>
                  </h3>
                  <ul className="mb-8 mt-5 flex flex-col gap-3 opacity-90">
                    {benefits.map(benefit => {
                      return (
                        <li key={benefit} className="flex gap-4">
                          <Check className="flex-shrink-0" /> {benefit}
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    as="a"
                    href={`${FreshEyesAuditSchedulingLink}?source=${title}`}
                    size="sm"
                  >
                    Drop me an email
                  </Button>
                  <Decoration className="absolute bottom-8 right-8 opacity-90" />
                </div>
              </div>
            );
          })}
        </div>
        <p className="py-16 text-center">either way...</p>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row lg:gap-20">
          {coreBenefits.map(({ title, description, Icon }) => {
            return (
              <div key={title} className="flex max-w-xs flex-col gap-2">
                <Icon className="h-20 w-20" />
                <span className="font-semibold">{title}</span>
                <span className="opacity-90">{description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: 'Full-time Product Designer',
    benefits: [
      'I channel my product design expertise into actionable solutions, tapping into user feedback to refine experiences and manage seamless delivery ensuring that no idea remains unexecuted, regardless of backlog complexity.',
      'Bringing a multidisciplinary approach, I leverage my diverse skill set to collaborate with cross-functional teams, efficiently turning abstract concepts into engaging, user-centric designs that resonate with users and enhance product integrity.',
    ],
    Decoration: Pointer,
  },
];

const coreBenefits = [
  {
    title: 'A silver bullet for your team.',
    description: 'Staying flexible as your product grows.',
    Icon: PuzzlePiece,
  },
  {
    title: 'You ship what matters.',
    description: 'Without agonizing over design details.',
    Icon: Growth,
  },
  {
    title: 'You spend more time on strategy.',
    description: 'Less on tightly managing me.',
    Icon: SpeedingClock,
  },
];
