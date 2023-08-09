import React from "react";

export default function Home() {
  return (
    <>
      <div className="w-full h-full p-10 bg-white mt-7">
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center">
          <div>
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85023.jpg"></img>
          </div>
          <div className="bg-green-700 w-full flex justify-center items-center p-4">
            <div>
              <h3 className="text-[78px] text-white text-center font-bold mx-auto">
                Cool off with 50% off
              </h3>
              <p className="text-2xl mt-4 mx-auto text-white text-center">
                Starbucks® Rewards members, enjoy 50% off a cold drink on
                Wednesdays after 12 p.m. *
              </p>

              <button className="mt-4 w-28 border-2 border-white text-white p-1 rounded-2xl hover:bg-green-500 block mx-auto">
                Join for free
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center mt-7">
          <div className="bg-[#EB81A5] w-full flex justify-center items-center p-4">
            <div>
              <h3 className="text-[78px] text-green-950 text-center font-bold mx-auto">
                Tropical cooldown
              </h3>
              <p className="text-2xl mt-4 mx-auto text-white text-center">
                Kick back with our vibrant new Frozen Pinapple Passionfruit
                Lemonade Starbucks Refresehers® beverage.
              </p>
              <button className="mt-4 md:mb-4 w-28 border-2 border-white text-white p-1 rounded-2xl hover:bg-pink-500 block mx-auto">
                Order now
              </button>
            </div>
          </div>
          <div>
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84927.jpg"></img>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center mt-7">
          <div>
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84930.jpg"></img>
          </div>
          <div className="bg-[#8F8BF4] w-full flex justify-center items-center p-4">
            <div>
              <h3 className="text-[78px] text-black text-center font-bold mx-auto">
                Summer to the max
              </h3>
              <p className="text-2xl mt-4 mx-auto text-black text-center">
                Go for a Mocha Cookie Crumble or Caramel Ribbon Crunch
                Frappuccino® blended beverage.
              </p>
              <button className="mt-4 md:mb-4 w-28 border-2 border-black text-black p-1 rounded-2xl hover:bg-[#827fe4] block mx-auto">
                Order now
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center mt-7">
          <div className="bg-[#FC6446] w-full flex justify-center items-center p-4">
            <div>
              <h3 className="text-[78px] text-black text-center font-bold mx-auto">
                Start hearty
              </h3>
              <p className="text-2xl mt-4 mx-auto text-black text-center">
                Grab a filling favorite: the Impossible™ Breakfast Sandwich with
                an Impossible Sausage Patty Made From Plants.**
              </p>
              <button className="mt-4 md:mb-4 w-28 border-2 border-black text-black p-1 rounded-2xl hover:bg-[#f27356] block mx-auto">
                Order now
              </button>
            </div>
          </div>
          <div>
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85005.jpg"></img>
          </div>
        </div>
      </div>
    </>
  );
}
