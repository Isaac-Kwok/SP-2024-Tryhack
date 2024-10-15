import React from "react";

import Header from "../../components/Header";

import ActivitySection from "./ActivitySection.jsx";

import StatsSection from "./StatsSection.jsx";

import NavigationBar from "../../components/NavigationBar";


function Dashboard() {

  return (

    <div className="flex flex-col max-w-[360px]">

      <div className="flex overflow-hidden flex-col items-center w-full border border-black border-solid bg-neutral-900">

        <Header />

        <ActivitySection />

        <StatsSection />

        <NavigationBar />

        <div className="flex self-stretch w-full bg-neutral-800 min-h-[10px]" />

      </div>

    </div>

  );

}


export default Dashboard;