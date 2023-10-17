import { useState } from "react";
import Hero from "./assets/components/Hero/Hero";
import Navbar from "./assets/components/Navbar/Navbar";
import Results from "./assets/components/Results/Results";


const App = () => {

  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false)
  
  const [popupContent, setPopupContent] = useState([])

  return (
    <>
    <div className=" bg-zinc-900">
      <div className=" h-100%  ">
        <Navbar 
         images={images}
         setImages={setImages}
         totalPages={totalPages}
         setTotalPages={setTotalPages}
         input={input}
         setInput={setInput}
         page={page}
         setPage={setPage}
        />
        <Hero
          images={images}
          setImages={setImages}
          totalPages={totalPages}
          setTotalPages={setTotalPages}
          input={input}
          setInput={setInput}
          page={page}
          setPage={setPage}
        />
        <Results
          images={images}
          setImages={setImages}
          input={input}
          setInput={setInput}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          setTotalPages={setTotalPages}
          visible={showModal}
          setShowModal={setShowModal}
          popupContent={popupContent}
          setPopupContent={setPopupContent}
        />
       
      </div>
      </div>
    </>
  );
};

export default App;
