import React from "react";


function ProgressIndicator() {

  return (

    <div className="flex gap-5 justify-between mt-10 w-full">

      <div className="flex gap-4 self-start">

        <div className="flex shrink-0 my-auto h-0.5 bg-zinc-300 w-[13px]" />

        <div className="flex shrink-0 bg-amber-400 rounded-2xl border-2 border-solid border-zinc-300 h-[18px] shadow-[0px_0px_12px_rgba(0,0,0,0.36)] w-[18px]" />

      </div>

      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83510f9efa67c1d86fb904986fded48a8766cd02502e8e221c8644a5cdb6f67f?placeholderIfAbsent=true&apiKey=229a7488fc124d018ba734b075f0fc88" alt="" className="object-contain shrink-0 w-5 aspect-square" />

    </div>

  );
}


export default ProgressIndicator;