import {
  ProjectStep1,
  ProjectStep2,
  ProjectStep3,
  ProjectStep4,
} from '@/components/Illustration';

export const MethodSection = () => {
  return (
    <div className="relative -mt-16 mb-12 sm:-mt-32 md:mb-24">
      <div className="px-container mx-auto max-w-container">
        <h3 className="max-w-2xl font-accent text-2xl font-medium md:text-3xl hidden">

        </h3>
        {/* Updated H3 element with mt-32 for 8rem top margin */}
        <h3 className="mt-32 max-w-2xl font-accent text-2xl font-medium md:text-3xl">

        </h3>
        <div className="flex flex-col gap-6 sm:flex-row md:gap-12">
          {steps.map(({ Illustration, description }, i) => {
            return (
              <div
                key={i}
                className="mt-6 flex flex-1 flex-row gap-5 sm:flex-col md:mt-12"
              >
                <Illustration className="h-20 w-20 flex-shrink-0 md:h-36 md:w-36" />
                <p className="opacity-90">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const steps = [
  {

];
