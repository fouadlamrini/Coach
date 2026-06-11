import React from 'react';
import ProtocolPart1 from './ProtocolPart1';
import ProtocolPart2 from './ProtocolPart2';
import ProtocolPart3 from './ProtocolPart3';

export default function ProtocolWorkflow() {
  return (
    <div className="bg-[#030712] text-white min-h-screen py-16 px-4 md:px-12 font-sans overflow-hidden">
      <ProtocolPart1 />
      <ProtocolPart2 />
      <ProtocolPart3 />
    </div>
  );
}