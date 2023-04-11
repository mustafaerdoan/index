import React from "react";

const Teacher = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
      Meet our supplier and clients
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Christian Howard</p>
          <div className="flex items-center gap-2">
            
            <p className="text-gray-500">
          Supplier from Bayern
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t2.svg" alt="v1" />
          <p className="text-2xl font-semibold">Sandra Wilson</p>
          <div className="flex items-center gap-2">
            
            <p className="text-gray-500">
            Client from Brandenburg
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Jimmy Cooper</p>
          <div className="flex items-center gap-2">
            
            <p className="text-gray-500">
          Supplier from NRW
          </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Teacher;
