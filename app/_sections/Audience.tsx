'use client';

import { useState } from 'react';
import clsx from 'clsx';

export const AudienceSection = () => {
  const titles = audiences.map(audience => audience.title);
  const [active, setActive] = useState(0);
  return (
    <div className="relative mb-16 md:mb-32">
      <div className="px-container mx-auto max-w-container">
        <h2 className="mb-5 mt-4 text-center font-accent text-4xl font-medium md:text-5xl">
          Where my work has the most impact.
        </h2>
        <div className="my-12 grid md:my-24 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_1.5fr]">
          <div className="mb-6 flex flex-row gap-8 md:mb-0 md:flex-col md:px-6 lg:px-12">
            {titles.map((title, i) => {
              return (
                <button
                  key={title}
                  onClick={() => setActive(i)}
                  className={clsx(
                    'flex gap-4 font-accent text-3xl font-medium md:text-4xl lg:text-5xl',
                    active === i
                      ? 'text-violet'
                      : 'opacity-50 transition-all hover:opacity-75 dark:opacity-60 dark:hover:opacity-80'
                  )}
                >
                  {title}
                </button>
              );
            })}
          </div>
          <div className="min-h-[280px] max-w-xl">
            <p className="mb-2 text-xl font-medium lg:text-2xl">
              {audiences[active].subtitle}
            </p>
            <p className="text-lg opacity-90">
              {audiences[active].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const audiences = [
  {
    title: 'BimaPlan',
    subtitle:
      "BimaPlan is an innovative insurance product that aims to increase the penetration of insurance in underserved markets.",
    description:
      "BimaPlan's journey showcased the transformative potential of a comprehensive, research-driven design approach. The platform's success in enhancing insurance accessibility, empowering agents, and fostering a sense of achievement serves as a testament to the efficacy of a methodical and user-centered design process.",
  },
  {
    title: 'Viom',
    subtitle:
      'VIOM is a B2C Distribution Management System designed to streamline and automate the supply chain process for small to medium business owners.',
    description:
      "The redesigned VIOM platform offers an intuitive, user-friendly interface for managing supply chain processes. It enables business owners to efficiently oversee orders, track deliveries, and streamline payments. The implementation of vernacular language support, offline capabilities, and a robust design system ensures scalability and usability.",
  },
  {
    title: 'NirogStreet',
    subtitle:
      'NirogStreet, a proactive healthcare platform, recognized the increasing demand for holistic healing methods such as Ayurveda.',
    description:
      "Through a design-driven approach, NirogStreet aimed to revolutionize the Ayurveda industry by creating a holistic healing platform. By focusing on user experience, knowledge sharing, and seamless e-commerce integration, they sought to empower Ayurveda doctors and practitioners, promote health and wellness, and enhance the accessibility and authenticity of Ayurvedic medicines.",
  },
  {
    title: 'Deloitte',
    subtitle:
      'VIOM is a B2C Distribution Management System designed to streamline and automate the supply chain process for small to medium business owners.',
    description:
      "The redesigned VIOM platform offers an intuitive, user-friendly interface for managing supply chain processes. It enables business owners to efficiently oversee orders, track deliveries, and streamline payments. The implementation of vernacular language support, offline capabilities, and a robust design system ensures scalability and usability.",
  },
];
