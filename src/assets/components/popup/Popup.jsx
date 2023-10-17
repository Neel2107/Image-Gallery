const Popup = ({ visible, onClose, popupContent,}) => {
  const handleOnClose = (e) => {
    if(e.target.id === 'container')
    onClose();
  };
console.log( "popContent",popupContent)
  if (!visible) return null;
  return (
    <div
    id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center "
    >

{popupContent.map((pop) =>


   
     ( <div key={pop.id} className="flex justify-center w-8/12 mx-auto mt-10  ">
        <div className="max-w-4xl bg-zinc-950  border border-gray-800 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 h-fit relative">
          <a href="#" className="flex justify-center items-center ">
            <img className="rounded-t-lg object-fill max-h-[60vh] " src={pop?.urls?.regular} />
          </a>
          <div className="top p-5 flex items-center gap-2 justify-between">
            <a href="#">
              <div className="left  flex gap-4   items-center">
                <div className=" image relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <img     src={pop?.user?.profile_image?.medium} alt="" />
                </div>

                <div className="leftTop flex flex-col ">
                  <h5 className="mb-2 text-lg text-white font-bold tracking-tight  dark:text-white">
                    {pop.user.name} 
                  </h5>
                  <p className=" text-sm font-light">
                    @{pop?.user?.username}
                  </p>
                </div>
                <div className="socials flex gap-5 ml-5">
                  <div className="instagram flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_50_1171)">
                        <path
                          d="M10.625 1.25H4.375C2.64911 1.25 1.25 2.64911 1.25 4.375V10.625C1.25 12.3509 2.64911 13.75 4.375 13.75H10.625C12.3509 13.75 13.75 12.3509 13.75 10.625V4.375C13.75 2.64911 12.3509 1.25 10.625 1.25Z"
                          stroke="#A7A7A7"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.0003 7.10625C10.0774 7.6264 9.98859 8.15763 9.7464 8.62438C9.50422 9.09113 9.12102 9.46963 8.65132 9.70604C8.18162 9.94246 7.64934 10.0247 7.13017 9.94121C6.61101 9.85767 6.13141 9.61255 5.75958 9.24072C5.38775 8.8689 5.14264 8.38929 5.0591 7.87013C4.97556 7.35097 5.05785 6.81868 5.29426 6.34898C5.53067 5.87928 5.90917 5.49609 6.37592 5.2539C6.84267 5.01171 7.3739 4.92287 7.89406 5C8.42463 5.07868 8.91584 5.32591 9.29511 5.70519C9.67439 6.08447 9.92163 6.57567 10.0003 7.10625Z"
                          stroke="#A7A7A7"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.9375 4.0625H10.9438"
                          stroke="#A7A7A7"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_50_1171">
                          <rect width={15} height={15} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="text-sm">/{pop.user?.instagram_username ? ( <span>{pop.user?.instagram_username }</span>) : (
                        <span>Not available</span>
                    )}
                    </p>
                  </div>
                  <div className="twitter flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M13.4163 1.75C12.8577 2.14403 12.2392 2.4454 11.5847 2.6425C11.2334 2.23855 10.7665 1.95224 10.2471 1.82229C9.72777 1.69234 9.18105 1.72503 8.68089 1.91593C8.18073 2.10683 7.75127 2.44673 7.45058 2.88967C7.1499 3.3326 6.9925 3.85719 6.99967 4.3925V4.97583C5.97454 5.00241 4.95875 4.77506 4.04276 4.31401C3.12678 3.85296 2.33903 3.17254 1.74967 2.33333C1.74967 2.33333 -0.583659 7.58333 4.66634 9.91667C3.46498 10.7321 2.03385 11.141 0.583008 11.0833C5.83301 14 12.2497 11.0833 12.2497 4.375C12.2491 4.21251 12.2335 4.05043 12.203 3.89083C12.7984 3.3037 13.2185 2.56241 13.4163 1.75V1.75Z"
                        stroke="#A7A7A7"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p className="text-sm">/{pop.user?.twitter_username ? ( <span>{pop.user?.twitter_username }</span>) : (
                        <span>Not available</span>
                    )}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="right flex gap-5 justify-center cursor-pointer">
            
              <div className="likes flex gap-2">
                <img src="./likeIcon.png" className="h-[20px]" alt="" />
                <p className=" text-sm text-white font-normal  dark:text-gray-400">
                {pop?.likes}
                </p>
              </div>
            </div>
          </div>

          <div className="bottom flex flex-col p-5 gap-2">
            <h2 className="text-xl font-bold">Related Tags</h2>
            <div className="tags">
               
              <span
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
         {pop?.tags[0]?.title}
              </span>
              <span
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
               {pop?.tags[1]?.title}
              </span>
              <span
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
              {pop?.tags[2]?.title}
              </span>
             
            </div>
          </div>

          <div
            onClick={onClose}
            className="closeBtn absolute right-[-1%] cursor-pointer
        top-[-2%]
        "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={38}
              height={38}
              viewBox="0 0 38 38"
              fill="none"
            >
              <g filter="url(#filter0_b_50_1160)">
                <circle cx={19} cy={19} r={19} fill="white" fillOpacity="0.8" />
              </g>
              <path
                d="M14 14C14 14 19.1852 19.4386 24 24M14 24C14 24 19.1852 18.5614 24 14"
                stroke="#4F4F4F"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <defs>
                <filter
                  id="filter0_b_50_1160"
                  x={-4}
                  y={-4}
                  width={46}
                  height={46}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_50_1160"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_50_1160"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>)
         
)}
    </div>
  );
};

export default Popup;
