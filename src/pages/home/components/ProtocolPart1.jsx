import React from "react";

const ProtocolPart1 = () => {
  return (
    <section className="relative bg-[#030712] text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-emerald-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left Side */}
        <div className="md:w-1/3">
          <img
            src="/human1.png"
            alt="Human"
            className="w-full max-w-sm mx-auto"
          />

          <h2 className="text-4xl font-bold mt-8 leading-tight">
            We're Innovative
            <br />
            Health Data Platform
          </h2>
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 relative flex flex-col gap-14 py-8">
          {/* Dashed Connector */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 700 700"
            preserveAspectRatio="none"
          >
            <path
              d="
                M 320 95
                L 520 95
                Q 560 95 560 135
                L 560 560
                Q 560 600 520 600
                L 320 600
              "
              fill="none"
              stroke="#EAB308" 
              strokeWidth="2"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />
          </svg>

          {/* Step 1 */}
          <div className="relative z-10 w-full md:w-[72%] rounded-3xl border border-white/10 bg-black/50 backdrop-blur-md p-8">
            <p className="text-xs tracking-[0.25em] text-gray-400 mb-4">
              STEP 1:
            </p>

            <h3 className="text-xl font-semibold mb-4">
              CONNECT YOUR DEVICE
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Easily link your smart health devices to our platform and start
              generating valuable health data.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 ml-auto w-full md:w-[72%] rounded-3xl border border-white/10 bg-black/50 backdrop-blur-md p-8">
            <p className="text-xs tracking-[0.25em] text-gray-400 mb-4">
              STEP 2:
            </p>

            <h3 className="text-xl font-semibold mb-4">
              EARN ANOMED TOKENS
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Receive rewards for your data contributions, enhancing your
              health and wellbeing.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 w-full md:w-[72%] rounded-3xl border border-white/10 bg-black/50 backdrop-blur-md p-8">
            <p className="text-xs tracking-[0.25em] text-gray-400 mb-4">
              STEP 3:
            </p>

            <h3 className="text-xl font-semibold mb-4">
              CONTRIBUTE TO MEDICAL ADVANCEMENTS
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Your anonymized data aids global health research, driving
              innovations and improving lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolPart1;