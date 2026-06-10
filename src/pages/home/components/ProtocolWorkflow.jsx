import React from 'react';
import ProtocolPart1 from './protoclPart1';

export default function ProtocolWorkflow() {
  return (
    <div className="bg-[#030712] text-white min-h-screen py-16 px-4 md:px-12 font-sans">
      
      <ProtocolPart1/>

      {/* PART 2: Benefits & Why Anomed */}
      <section className="mb-32">
        <h2 className="text-3xl text-center mb-12">Explore the Anomed benefits</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <div className="p-8 border border-gray-800 rounded-2xl text-center">Earn Rewards</div>
          <div className="p-8 border border-gray-800 rounded-2xl text-center">Enhance Privacy</div>
          <div className="p-8 border border-gray-800 rounded-2xl text-center">Drive Innovation</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img src="/human2.png" alt="Human 2" className="w-full" />
          <div>
            <h3 className="text-4xl font-bold">Anomed is standing at the intersection of health, technology and innovation.</h3>
          </div>
        </div>
      </section>

      {/* PART 3: Tokenomics */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-8">Distribution of Anomed Token</h2>
          {['Management', 'Legal', 'Operations', 'Product Development', 'Inter Departmental'].map((item, idx) => (
            <div key={item} className="mb-6">
              <div className="flex justify-between text-xs mb-2">
                <span>{item.toUpperCase()}</span>
                <span>{10 + idx * 5}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full w-full">
                {/* Hna bdelna bg-green-500 b-bg-yellow-500 */}
                <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${30 + idx * 10}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <img src="/plac.png" alt="Plates" className="w-full object-contain" />
      </section>
    </div>
  );
}