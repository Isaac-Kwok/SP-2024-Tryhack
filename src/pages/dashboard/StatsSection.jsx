import React from "react";


function StatsSection() {

    const months = ["Aug", "Sep", "Oct"];

    const categories = [

        { name: "Recycling", color: "bg-violet-500" },

        { name: "Water", color: "bg-fuchsia-700" },

    ];


    const chartData = [

        { month: "Aug", recycling: 15, water: 8 },

        { month: "Sep", recycling: 12, water: 18 },

        { month: "Oct", recycling: 20, water: 10 },

    ];


    const maxValue = 20;


    return (
        <section className="flex flex-col items-center mt-6">
            <p className="text-base text-center text-gray-100">You have collected</p>
            <div className="flex shrink-0 h-[42px] w-[103px]" />
            <p className="text-base text-center text-gray-100">Peak Coins</p>
            <div className="flex overflow-hidden flex-col px-4 pt-4 pb-3.5 mt-6 w-full max-w-xs rounded-lg bg-neutral-700">
                <div className="flex flex-col w-full bg-neutral-700">
                    <div className="flex flex-col min-h-[236px]">
                        <div className="flex justify-between items-end h-[200px]">
                            {chartData.map((data, index) => (
                                <div key={index} className="flex flex-col items-center w-1/3">
                                    <div
                                        className="w-8 bg-violet-500"
                                        style={{

                                            height: `${(data.recycling / maxValue) * 100}%`,

                                        }}

                                    />

                                    <div className="mt-2 text-xs text-white">{data.month}</div>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="flex gap-10 items-start self-start mt-5 text-xs leading-none text-white whitespace-nowrap">

                        {categories.map((category) => (

                            <div key={category.name} className="flex gap-1.5 w-5">

                                <div

                                    className={`flex shrink-0 w-5 h-5 ${category.color} rounded-full`}

                                />

                                <div>{category.name}</div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}


export default StatsSection;