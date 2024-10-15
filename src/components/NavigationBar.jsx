
import React from "react";


function NavigationBar() {

    const navItems = [

        { name: "Home", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/58af52fe17d111bbbedc8feddd4fc1be14be1bb13858efbc126ce20f65a5dfb0?placeholderIfAbsent=true&apiKey=229a7488fc124d018ba734b075f0fc88", active: true },

        { name: "Nil", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c29540cc2341b2c826869d5fe51c4177b912af895263edcdf21c5a62d8a7c3ce?placeholderIfAbsent=true&apiKey=229a7488fc124d018ba734b075f0fc88" },

        { name: "Inventory", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8e18e7ac91ff61203c607abfc41fe52f5eabe75a7567e8358ccb508f44c54a1?placeholderIfAbsent=true&apiKey=229a7488fc124d018ba734b075f0fc88" },

        { name: "Gacha", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/30b4ac8d7983fd419c1b1b47af66f61a93ff16789a81f5efb25c2234eb6ef952?placeholderIfAbsent=true&apiKey=229a7488fc124d018ba734b075f0fc88" },

        { name: "Settings", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7a7862a7c8384f8ab833dd4ee01a2cb31f270f3a9ba1698aad5910e317a49d1?placeholderIfAbsent=true&apiKey=229a7488fc124d018ba734b075f0fc88" },

    ];


    return (

        <nav className="flex justify-center items-center self-stretch px-3 pt-3 w-full text-xs leading-none whitespace-nowrap bg-neutral-800 text-zinc-500">

            {navItems.map((item) => (

                <div

                    key={item.name}

                    className={`flex flex-col flex-1 shrink items-center self-stretch my-auto ${item.active ? "text-white" : ""

                        } basis-0`}

                >

                    <img

                        loading="lazy"

                        src={item.icon}

                        alt={`${item.name} icon`}
                        className="object-contain w-6 aspect-square"

                    />

                    <div

                        className={`mt-1.5 ${item.name === "Inventory" ? "font-medium" : ""

                            }`}

                    >

                        {item.name}

                    </div>

                </div>

            ))}

        </nav>

    );

}


export default NavigationBar;