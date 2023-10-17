import { useState } from "react";
import Popup from "../popup/Popup";

const Results = ({
  images,
  setImages,
  totalPages,
  setTotalPages,
  page,
  setPage,
  visible,
  setShowModal,
  popupContent,
  setPopupContent,
}) => {
  // const [selectedImage, setSelectedImage] = useState(null)
  const handleOnClose = () => {
    setShowModal(false);
  };

  const changedContent = (image) => {
    return setPopupContent([image]);
  };

  return (
    <>
      <div className="m-10  h-fit xl:columns-4 lg:columns-3 md:columns-2 w-[90vw] mx-auto  sm:columns-1  pb-10 pt-8 space-y-8 ">
        {images.map((image) => {
          return (
            <div
              onClick={() => {
                setShowModal(true);
                changedContent(image);
              }}
              key={image.id}
              className="max-w-sm  break-inside-avoid bg-zinc-950  border border-gray-800 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 h-fit transition-transform duration-500 hover:scale-105"
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={image.urls.small}
                  alt={image.alt_description}
                />
              </a>
              <div className="p-5 flex gap-2 justify-between">
                <a href="#">
                  <div className="left  flex gap-2   items-center">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <img src={image.user.profile_image.medium} alt="" />
                    </div>

                    <div className="leftTop flex flex-col ">
                      <h5 className="mb-2 text-sm text-white font-bold tracking-tight  dark:text-white">
                        {image.user.name}
                      </h5>
                      <p className=" text-xs font-light">
                        @{image.user.username}
                      </p>
                    </div>
                  </div>
                </a>
                <div className="right flex gap-1 justify-center cursor-pointer">
                  <img src="./likeIcon.png" className="h-[20px]" alt="" />
                  <p className=" text-sm text-white font-normal  dark:text-gray-400">
                    {image.likes}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="buttons flex  justify-center gap-10">
        {page > 1 && (
          <button
            onClick={() => {
              setPage(page - 1);
            }}
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Next
          </button>
        )}
      </div>

      <Popup
        visible={visible}
        // image={selectedImage}
        popupContent={popupContent}
        setPopupContent={setPopupContent}
        onClose={handleOnClose}
      />
    </>
  );
};

export default Results;
