import axios from "axios";
import { useCallback, useEffect, useRef } from "react";


const Navbar = ({  images,
  setImages,
  totalPages,
  setTotalPages,
  page,
  setPage,
  input,
  setInput,}) => {
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
    <div className='  flex justify-around py-5 text-white items-center bg-zinc-800'>


<div className="left cursor-pointer">
<p style={{fontFamily: "'Pattaya', sans-serif", fontSize: "30px"}}>Image Gallery</p>




</div>

<div className="center flex-1 mx-20 max-w-xl">


<form  onSubmit={handleSearch}>
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
      className="block w-full p-4 pl-10  text-sm  border border-gray-300 rounded-lg bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400   dark:text-white dark:focus:ring-blue-500 text-white dark:focus:border-blue-500"
      placeholder="Search Images here.. "
      required=""
      ref={searchInput}
      onChange={(e) => handleChange(e.target.value)}
    />
   
  </div>
</form>

</div>

<div className="right flex gap-12  justify-between cursor-pointer">

<a>Explore</a>
<a>Collection</a>
<a>Community</a>

</div>



    </div>
  )
}

export default Navbar