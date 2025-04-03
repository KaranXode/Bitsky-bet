import React, { useState } from "react";

const AccountScreen = () => {
  const [activeTab, setActiveTab] = useState("My Account");

  const tabs = ["My Account", "Wallet", "All Transactions", "My Affiliates"];

  return (
    <div className="min-h-screen p-5 text-white bg-black">
      {/* Header Section */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-pink-400">In Bitsky</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg">
            <span className="text-lg">10,000 USD</span>
            <button className="px-2 py-1 text-black bg-green-500 rounded-full">+</button>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 border-2 border-pink-500 rounded-full"
            />
            <span className="text-lg">John123</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mt-5">
        <div className="flex pb-2 space-x-8 border-b border-gray-700">
          {tabs.map((tab) => (
            <span
              key={tab}
              className={`cursor-pointer pb-1 px-4 py-2 rounded-t-lg ${
                activeTab === tab
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative max-w-4xl p-8 mx-auto mt-10 bg-gray-900 border border-pink-500 rounded-lg">
        <div className="absolute top-0 px-5 py-2 font-bold transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-lg left-1/2">
          {activeTab}
        </div>

        {activeTab === "My Account" && (
          <div>
            {/* Profile Section */}
            <div className="flex flex-col items-center mt-10">
              <div className="relative p-1 border-4 border-pink-500 rounded-full">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Avatar"
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <h2 className="mt-3 text-lg text-pink-400">First Last</h2>
              <p className="text-sm text-gray-400">Name</p>
            </div>

            {/* Account Details */}
            <div className="grid grid-cols-2 gap-5 mt-8">
              <div>
                <label className="block text-gray-400">First Name</label>
                <input type="text" className="w-full p-2 bg-gray-800 rounded" />
              </div>
              <div>
                <label className="block text-gray-400">Last Name</label>
                <input type="text" className="w-full p-2 bg-gray-800 rounded" />
              </div>
              <div>
                <label className="block text-gray-400">User Name</label>
                <input type="text" className="w-full p-2 bg-gray-800 rounded" />
              </div>
              <div>
                <label className="block text-gray-400">Date of Birth</label>
                <input type="date" className="w-full p-2 bg-gray-800 rounded" />
              </div>
              <div>
                <label className="block text-gray-400">Email Address</label>
                <input type="email" className="w-full p-2 bg-gray-800 rounded" />
              </div>
              <div>
                <label className="block text-gray-400">Phone Number</label>
                <input type="text" className="w-full p-2 bg-gray-800 rounded" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "Wallet" && (
          <div className="text-center text-gray-400">Wallet details coming soon...</div>
        )}
        {activeTab === "All Transactions" && (
          <div className="text-center text-gray-400">Transaction history will be displayed here...</div>
        )}
        {activeTab === "My Affiliates" && (
          <div className="text-center text-gray-400">Affiliate program details coming soon...</div>
        )}

        {/* Action Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 font-bold transition bg-pink-500 rounded-lg hover:bg-pink-600">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountScreen;
