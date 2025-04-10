import React, { useState } from "react";
import profile from "../assets/Icons/Profile.svg";
import Button from "./../Components/Button/Button";
import { Link } from "react-router-dom";
import AccountBorder from "../Components/AccountBorder/AccountBorder";
import Header from "../Components/Header/Header";
import Tabs from "../Components/Tabs/Tabs";
import TabPanel from "../Components/TabPanel/TabPanel";

const AccountScreen = () => {
  const [activeTab, setActiveTab] = useState("My Account");

  const tabs = ["My Account", "Wallet", "All Transactions", "My Affiliates"];
  return (
    <div className="min-h-screen text-white bg-[#0E0E0E]">
      <Header/>
      <div className="max-w-[1346px] w-full mx-auto">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          tabClick={(tab) => setActiveTab(tab)}
        />
        <div className="relative p-3 m-3 md:p-8  mt-10 bg-[#1B1B1B]  rounded-lg">
          <AccountBorder activeTab={activeTab} />
          <TabPanel activeTab={activeTab} profile={profile} />
          <div className="flex justify-end mt-8">
            <Link to="/">
              <Button className={"w-auto"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountScreen;
