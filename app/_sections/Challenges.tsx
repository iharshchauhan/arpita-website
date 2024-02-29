import { IconCard } from '@/components/Card';
import {
  Cycle,
  Growth,
  Money,
  PuzzlePiece,
  ShakeHands,
  SpeedingClock,
} from '@/components/Icon';

export const ChallengesSection = () => {
  return (
    <div className="relative mb-16 md:mb-32">
      <div className="px-container mx-auto max-w-container">
        <h2 className="mb-5 mt-4 text-center font-accent text-4xl font-medium md:text-5xl">
         Why Embracing My Vision Elevates Your Product's Soul
        </h2>
        <p className="mb-10 mt-5 text-center text-xl sm:mb-20 md:text-2xl">
          Delve into the philosophy of design through my eyes, where each creation is not just built, but meticulously crafted with soulful purpose. 
          In choosing to work with me, you're not just hiring a designer; you're embracing a unique vision that intertwines empathy with innovation, 
          ensuring your product meets functional needs and speaks to the heart of the user experience.
        </p>
        <div className="grid grid-cols-1 justify-items-center gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-16 lg:grid-cols-3">
          {challenges.map(challenge => {
            return (
              <IconCard
                key={challenge.title}
                Icon={challenge.Icon}
                title={challenge.title}
                className="max-w-[400px]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const challenges = [
  {
    Icon: SpeedingClock,
    title:
      "Multidisciplinary Approach: I bring a holistic view to product design, combining insights from various fields to create innovative solutions that meet users' needs in unique and impactful ways.",
  },
  {
    Icon: Cycle,
    title:
      'Expertise in User-Centered Design: My deep understanding of user behavior ensures that I design solutions that are not just aesthetically pleasing but also incredibly intuitive and satisfying for users.',
  },
  {
    Icon: ShakeHands,
    title:
      "Proven Experience with Top-Tier Backers: With the support of established partners like Y Combinator and Livespace, my work has a seal of approval from some of the industry's best, showcasing my ability to deliver at the highest level.",
  },
  {
    Icon: PuzzlePiece,
    title:
      'Advanced Tool Proficiency: From design (Adobe Illustrator, Figma, Miro) to research (Notion, Airtable, Hotjar) and prototyping (Framer, Protopie, Webflow), my skill set covers the full spectrum of product development.',
  },
  {
    Icon: Money,
    title: 'Design System Expert: With my skillful use of Webflow to establish comprehensive design systems, I ensure consistency and scalability that contribute to a cohesive user experience across all product stages.',
  },
  {
    Icon: Growth,
    title:
      'Agile Project Leadership: I’m adept at leading cross-functional teams with agility using tools like Jira and Microsoft Clarity, ensuring swift and effective execution of project milestones.',
  },
];
