import { useCallback, useEffect, useRef } from "react";
import "./Hero.css";
import axios from "axios";
const Hero = ({
  images,
  setImages,
  totalPages,
  setTotalPages,
  page,
  setPage,
  input,
  setInput,

}) => {
  const url = " https://api.unsplash.com/search/photos";

  const IMAGES_PER_PAGE = 20;

  const fetchImages = useCallback(
    async () => {
      try {
        if (searchInput.current.value) {
          const { data } = await axios.get(
            `${url}?query=${
              searchInput.current.value
            }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
              import.meta.env.VITE_API_KEY
            }`
          );
          console.log("result", data);

          
       

      
          setImages(data.results);
          setTotalPages(data.total_pages);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [page]
  );

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const searchInput = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchImages();
  };

  const handleChange = (e) => {
    setInput(e);
    fetchImages();
  };
  return (
    <div
      className=" hero text-white h-[20%] relative text-center
    "
    >
      <img
        className="bgImg h-[500px] w-[100%] object-cover blur-sm"
        src="./mountain-bg.jpg"
        alt=""
      />

      <div className="titleText flex flex-col items-center">
        <h2 className="absolute top-[30%]  text-3xl font-bold text-center">
          Download High Quality Images by creators
        </h2>
        <p className="absolute top-[45%] font-bold">
          Over 2.4 million+ stock Images by our talented community
        </p>
      </div>
      <div className="searchBar flex flex-col items-center">
        <div
          className=" absolute top-[60%] w-6/12

        text-center"
        >
          <form onSubmit={handleSearch}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search high resolution Images, categories, wallpapers.. "
                required=""
                ref={searchInput}
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
