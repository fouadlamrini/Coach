import React from 'react';

const ProtocolPart2 = () => {
  return (
    <section className="mb-0"> {/* mb-0 باش يلصق مع الجزء اللي تحتو */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <img src="/human2.png" alt="Human 2" className="w-full lg:w-1/2" />
        <div className="lg:w-1/2">
          <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2">Why Anomed?</h4>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Anomed is standing at the intersection of health, technology and innovation.
          </h3>
          <p className="text-gray-400 mb-6">
            Our platform not only rewards you for maintaining a healthy lifestyle but also plays a crucial role in the next wave of medical breakthroughs.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Join Anomed →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProtocolPart2;