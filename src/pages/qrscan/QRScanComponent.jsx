import React from "react";

import Header from "../../components/Header";

import QRCode from "./QRCode";

import ProgressIndicator from "./ProgressIndicator";


function QRScanComponent() {

  return (

    <main className="flex flex-col max-w-[360px]">

      <section className="flex overflow-hidden flex-col pb-28 w-full border border-black border-solid bg-neutral-900">

        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/af02c6471ccbadbcf4a3dfb353079d40f3ae6ae675a23f6237cc23a6ace9efdb?placeholderIfAbsent=true&apiKey=229a7488fc124d018ba734b075f0fc88" alt="" className="object-contain w-full aspect-[11.24]" />

        <div className="flex flex-col px-3 mt-4 mb-0 w-full">

          <Header />
          <h1 className="self-center mt-9 text-4xl font-medium tracking-tighter text-center text-white rotate-[0.0032286713189004614rad]">

            Scan the QR Code displayed on the machine

          </h1>

          <ProgressIndicator />

        </div>

      </section>

    </main>

  );

}


export default QRScanComponent;