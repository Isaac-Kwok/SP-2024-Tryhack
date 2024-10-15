import React from "react";


function ActivitySection() {

    const activities = [

        {

            title: "Recycling",

            bgColor: "bg-lime-600",

            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e20158c21971114a6d6641fc230ca90eaa54ff51739c31328ac2479b5e28cfe?placeholderIfAbsent=true&apiKey=229a7488fc124d018ba734b075f0fc88",

            chartSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b6e1e95715a19b0d11b966972036702bef7effa28305181cdaf779ae65945e?placeholderIfAbsent=true&apiKey=229a7488fc124d018ba734b075f0fc88",

            roundedClass: "rounded-none",

        },

        {

            title: "Water",

            bgColor: "bg-lime-700",

            chartSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fe17c487a34804a8f84854be7fa2aca701802889145fc96a07d83ddd40641b3?placeholderIfAbsent=true&apiKey=229a7488fc124d018ba734b075f0fc88",

            roundedClass: "rounded-[33px_33px_0px_33px]",

        },

    ];


    return (

        <section className="flex gap-2 mt-4 w-full text-base font-bold text-gray-100 whitespace-nowrap max-w-[330px]">

            {activities.map((activity, index) => (

                <div

                    key={index}
                    className={`flex flex-col flex-1 px-4 pt-4 pb-7 ${activity.bgColor} ${activity.roundedClass}`}

                >

                    <div className="flex gap-5">

                        <div className="my-auto">{activity.title}</div>

                        {activity.iconSrc && (

                            <img

                                loading="lazy"

                                src={activity.iconSrc}

                                alt={`${activity.title} icon`}

                                className="object-contain shrink-0 aspect-square w-[31px]"

                            />

                        )}
                    </div>

                    <img

                        loading="lazy"

                        src={activity.chartSrc}

                        alt={`${activity.title} chart`}

                        className="object-contain mt-2 ml-2.5 aspect-square w-[116px]"

                    />

                </div>

            ))}

        </section>

    );

}


export default ActivitySection;


