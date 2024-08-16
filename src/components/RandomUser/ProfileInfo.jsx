import React from 'react';

function ProfileInfo({ userData }) {
  const { location, dob, cell, nat, registered } = userData;

  // Format the date of birth
  const formattedDOB = new Date(dob.date).toLocaleDateString();

  // Nationality flag URL (using a placeholder URL; update based on your actual flag image source)
  const flagUrl = `https://flagcdn.com/w80/${nat.toLowerCase()}.png`; // Replace with actual flag image URL

  const profileData = [
    { 
      label: 'City', 
      value: location.city,
      action: () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.city)}`, '_blank');
      }
    },
    { 
      label: 'Date of Birth', 
      value: formattedDOB 
    },
    { 
      label: 'Time Zone', 
      value: `${location.timezone.offset} (${location.timezone.description})` 
    },
    { 
      label: 'Nationality', 
      value: (
        <div className="flex items-center space-x-2">
          <img 
            src={flagUrl} 
            alt="Nationality Flag" 
            className="w-6 h-4"
          />
          <span>{nat}</span>
        </div>
      ) 
    },
    { 
      label: 'Phone No.', 
      value: cell,
      action: () => {
        window.open(`tel:${cell}`);
      }
    },
    { 
      label: 'Registered Since', 
      value: new Date(registered.date).toLocaleDateString() 
    }
  ];

  return (
    <div className="flex flex-col self-stretch px-7 mt-6 w-full text-xs max-md:pl-5">
      <hr className="shrink-0 w-full h-px border border-solid border-black border-opacity-10 max-md:mr-1" />
      <div className="flex gap-12 self-center mt-3 max-w-full font-medium w-auto">
        <div className="flex flex-1 gap-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cfba469d0e36d79ee52aa84e0b2f0bbc485a084e26aee91da42bbbbad95c1e9?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
            alt="Location Icon"
            className="object-contain shrink-0 aspect-square w-[22px]"
          />
          <span className="my-auto cursor-pointer" onClick={() => profileData[0].action()}>Location</span>
        </div>
        <div className="flex flex-1 gap-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4a198f1047d934c726b20ee797569a7f58f2d202992ac6497c22646bf8f672?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
            alt="Phone Icon"
            className="object-contain shrink-0 aspect-square w-[22px]"
          />
          <span className="my-auto cursor-pointer" onClick={() => profileData[4].action()}>Call me</span>
        </div>
      </div>
      <hr className="shrink-0 mt-3 w-full h-px border border-solid border-black border-opacity-10 max-md:mr-1" />
      <div className="flex gap-10 mt-4 mr-12 overflow-hidden">
        <div className="flex flex-col flex-1 items-start">
          {profileData.slice(0, 3).map((item, index) => (
            <React.Fragment key={index}>
              <p>{item.label}</p>
              <p className="text-lg cursor-pointer" onClick={item.action}>{item.value}</p>
              {index < 2 && <div className="mt-4" />}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col flex-1 ml-4 items-start">
          {profileData.slice(3).map((item, index) => (
            <React.Fragment key={index + 3}>
              <p>{item.label}</p>
              <p className="text-lg cursor-pointer" onClick={item.action}>{item.value}</p>
              {index < 2 && <div className={index === 0 ? "mt-4" : "mt-6"} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
