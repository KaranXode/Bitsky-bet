import React from "react";
import AccountDetails from './../AccountDetails/AccountDetails';

export default function TabPanel({ activeTab, profile,userGameName }) {
  return (
    <div>
      {activeTab === "My Account" && (
        <div className="flex flex-col items-center w-full mt-12 lg:flex-row">
          <div className="flex flex-col items-center w-1/2 mt-10">
            <div className="relative">
              <img src={profile} alt="Avatar" className="" />
            </div>
          </div>

          <AccountDetails userGameName={userGameName} />
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
