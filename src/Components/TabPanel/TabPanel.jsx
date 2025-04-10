import React from "react";
import AccountDetails from './../AccountDetails/AccountDetails';

export default function TabPanel({ activeTab, profile }) {
  return (
    <div>
      {activeTab === "My Account" && (
        <div className="flex flex-col items-center w-full mt-3 md:mt-12 lg:flex-row">
          <div className="flex flex-col items-center w-1/2 mt-10">
            <div className="relative">
              <img src={profile} alt="Avatar"  />
              <div className="absolute flex flex-col items-center justify-center w-full bottom-[-20px] sm:bottom-0">
                <div className="text-[#FF00EE] text-sm md:text-xl font-semibold">Karan <span  className="text-white">Saket</span></div>
                <div  className="text-[#FF00EE] text-xs md:text-sm font-light" >Karan001</div>
              </div>
            </div>
          </div>

          <AccountDetails />
        </div>
      )}

      {activeTab === "Wallet" && <div className="tab-text">Wallet</div>}
      {activeTab === "All Transactions" && (
        <div className="tab-text">Transaction</div>
      )}
      {activeTab === "My Affiliates" && (
        <div className="tab-text">Affiliate</div>
      )}
    </div>
  );
}
