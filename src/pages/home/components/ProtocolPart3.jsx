import React from 'react';

const ProtocolPart3 = () => {
  const data = [
    { label: 'Management', width: '30%' },
    { label: 'Legal', width: '40%' },
    { label: 'Operations', width: '50%' },
    { label: 'Product Development', width: '60%' },
    { label: 'Partnership', width: '70%' },
  ];

  return (
    <section className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start -mt-20 lg:-mt-32 relative z-10">
      <div className="pl-0 lg:pl-12">
        
        {/* Title + Text */}
        <div className="ml-4 lg:ml-12 mt-8 lg:mt-16">
          <h2 className="text-4xl font-bold mb-6">
            Distribution of Anomed Token
          </h2>

          <p className="text-base text-gray-300 leading-relaxed mb-10 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga
            dicta eaque architecto, adipisci voluptatem iure non neque aut
            corrupti.
          </p>
        </div>

        {/* Progress Bars */}
        {data.map((item) => (
          <div key={item.label} className="mb-6">
            <div className="flex justify-between text-xs mb-2">
              <span className="font-semibold uppercase">
                {item.label}
              </span>
              <span>{parseInt(item.width) + 10}%</span>
            </div>

            <div className="h-2 bg-gray-800 rounded-full w-full">
              <div
                className="h-full bg-yellow-500 rounded-full"
                style={{ width: item.width }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="flex justify-start lg:justify-end">
        <img
          src="/plac.png"
          alt="Plates"
          className="w-full max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default ProtocolPart3;