import React from "react";
import Arrow from "../assets/Arrow.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function cards() {
  return (
    <>
      <div className="  xl:rotate-0 md:rotate-0 lg:rotate-0 rounded-md ">
        <div style={{ position: "relative" }} className="overflow-hidden ">
          <img
            src={img3}
            className="rounded-2xl border-[2px] object-cover   "
            alt=""
            srcSet=""
            style={{ width: "100% ", height: "160px" }}
          />
          <a
            href="https://open.spotify.com/user/rgwfr9glols5ew1tdqkngs12x?si=74462a81a6774569"
            className="absolute rounded-2xl h-full"
            style={{
              top: 0,
              left: 0,
              right: 0,
              background: "rgba(32, 32, 32, 0.438)",
            }}
          >
            <div className="p-6 text-center flex justify-between flex-col h-full text-white">
              <div className="">
                <strong className="">
                  <span className="font-bold">Spotify - </span>Lost in Alluring
                  Tunes
                </strong>
                <p className="text-start mt-2">
                  Immersed in melodies that once consumed, echoing in my soul.
                </p>
              </div>
              <p className="text-end font-thin text-sm sig-text ">
                - sujan thapa
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className=" rotate-[1deg]  ">
        <div className="overflow-hidden w-full h-[200px] rounded-md border-[1px] border-gray-300 ">
          <div className="p-6  h-full text-start">
            <div>
              {" "}
              <div>
                <span className=" text-gray-400 text-sm ">
                  {" "}
                  <span className="text-xl text-thin">🫂 </span> Thanks For
                  visiting my site!
                </span>
                <p className="text-start text-xl mt-2 font-bold text-gray-800">
                  It's a pleasure
                </p>
              </div>
              <div className="mt-4">
                <div className="">
                  <a href="">
                    <div className="text-blue-400 flex items-center gap-5">
                      {" "}
                      <span className="span">
                        Check out the message box{" "}
                      </span>{" "}
                      <img
                        src={Arrow}
                        className=" h-[28px]"
                        id="arrow"
                        alt=""
                        srcSet={Arrow}
                      />
                    </div>
                  </a>
                </div>
                <div className="mt-3">
                  <a href="">
                    <div className="text-blue-400 flex items-center gap-5">
                      {" "}
                      <span className="span">Send me a Email </span>{" "}
                      <img
                        src={Arrow}
                        className="h-[28px]"
                        id="arrow"
                        alt=""
                        srcSet={Arrow}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default cards;
