import React from 'react';

const ProtocolPart1 = () => {
  return (
    // Bdelt l-bg l-color li bghiti
    <section className="bg-[#030712] text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        
        {/* Left Side */}
        <div className="md:w-1/3">
          <img src="/human1.png" alt="Human" className="w-full" />
          <h2 className="text-4xl font-bold mt-6">We're Innovative health data platform</h2>
        </div>

        {/* Right Side: Steps */}
        <div className="md:w-2/3 flex flex-col gap-8">
          
          {/* Step 1 */}
          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 w-full md:w-[70%]">
            {/* Bdelt text-emerald-400 b-text-yellow-400 */}
            <h3 className="text-yellow-400 font-bold text-sm">STEP 1:</h3>
            <p className="font-bold">CONNECT YOUR DEVICE</p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 w-full md:w-[70%] md:ml-auto">
            <h3 className="text-yellow-400 font-bold text-sm">STEP 2:</h3>
            <p className="font-bold">EARN ANOMED TOKENS</p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 w-full md:w-[70%]">
            <h3 className="text-yellow-400 font-bold text-sm">STEP 3:</h3>
            <p className="font-bold">CONTRIBUTE TO MEDICAL ADVANCEMENTS</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProtocolPart1;