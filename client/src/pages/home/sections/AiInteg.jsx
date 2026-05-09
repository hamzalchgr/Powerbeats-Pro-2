import React from "react";

const AiInteg = () => {
  return (
    <section className="text-center flex flex-col items-center gap-10 md:max-w-[552px] lg:max-w-[1440px] mx-auto md:px-6">
      <div className="flex flex-col items-center gap-5 max-w-[600px] md:px-0">
        <h2 className="heading-2 max-w-[270px] lg:max-w-[400px]">
          The watch built for Gemini.
        </h2>
      </div>

      <div className="relative h-screen max-w-screen overflow-hidden md:rounded-4xl">
        <img
          className="h-full w-full object-center object-cover"
          src="https://images.samsung.com/n_africa/galaxy-watch8/feature/galaxy-watch8-ai-lifestyle.jpg?imbypass=true"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center gap-4 max-w-[600px] px-4 md:px-0">
        <h3 className="max-w-[270px] lg:max-w-[400px] font-semibold text-lg">
          Simply raise your wrist. Seamless.
        </h3>
        <p className="font-medium text-text-muted">
          With Gemini on Galaxy Watch8, everything you need is just a question
          away—fast, simple, and always within reach.
        </p>
      </div>
    </section>
  );
};

export default AiInteg;
