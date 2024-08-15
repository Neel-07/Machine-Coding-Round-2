import React from 'react';

function ProfileInfo() {
  const profileData = [
    { label: 'City', value: 'Mildura' },
    { label: 'Date of birth', value: '09 December, 1982' },
    { label: 'Time Zone', value: '-10:00 (Hawaii)' },
    { label: 'Nationality', value: '🇦🇺 AU' },
    { label: 'Phone No.', value: '0486-362-738' },
    { label: 'Registered Since', value: '13 November, 2013' }
  ];

  return (
    <div className="flex flex-col self-stretch px-7 mt-6 w-full text-xs max-md:pl-5">
      <hr className="shrink-0 max-w-full h-px border border-solid border-black border-opacity-10 w-[326px] max-md:mr-1" />
      <div className="flex gap-12 self-center mt-3 max-w-full font-medium w-[147px]">
        <div className="flex flex-1 gap-1.5 whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cfba469d0e36d79ee52aa84e0b2f0bbc485a084e26aee91da42bbbbad95c1e9?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f" alt="" className="object-contain shrink-0 aspect-square w-[22px]" />
          <span className="my-auto">Location</span>
        </div>
        <div className="flex flex-1 gap-1 whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4a198f1047d934c726b20ee797569a7f58f2d202992ac6497c22646bf8f672?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f" alt="" className="object-contain shrink-0 aspect-square w-[22px]" />
          <span className="my-auto">Call me</span>
        </div>
      </div>
      <hr className="shrink-0 mt-3 max-w-full h-px border border-solid border-black border-opacity-10 w-[326px] max-md:mr-1" />
      <div className="flex gap-10 mt-4 mr-12">
        <div className="flex flex-col flex-1 items-start whitespace-nowrap">
          {profileData.slice(0, 3).map((item, index) => (
            <React.Fragment key={index}>
              <p>{item.label}</p>
              <p className="text-lg">{item.value}</p>
              {index < 2 && <div className="mt-4" />}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col flex-1 ml-4 items-start whitespace-nowrap">
          {profileData.slice(3).map((item, index) => (
            <React.Fragment key={index + 3}>
              <p>{item.label}</p>
              <p className="text-lg">{item.value}</p>
              {index < 2 && <div className={index === 0 ? "mt-4" : "mt-6"} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;