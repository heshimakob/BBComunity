import React,{useState} from 'react'


const  Details =()=>{

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <div className="bg-gray-900 text-white  h-500 flex flex-col justify-center items-center">


    <h1 className="text-4xl font-bold mb-4 pt-10">Entrons en contact !</h1>
    <p className="text-lg mb-8">
      Nous sommes basés à Goma, RDC. Quartier les volcans, 10 avenue la
      corniche,
      <br />
      Immeuble Diplomatique, 3ième étage.
    </p>

    <div className="flex gap-4 mb-8">
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.22l.27.48v2.06c.25.35.56.69.92.94l1.24 1.27c.35.36.7.69.92.95l.48.27h2.06c.38.02.76.04 1.15.06v2.06l.48.27c.36.35.69.7.94.92l1.27 1.24c.36.35.7.69.95.92l.27.48h2.22c.55 0 1 .45 1 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4c0-.55.45-1 1-1h2.22l-.27-.48V2.06c-.25-.35-.56-.69-.92-.94L9.22 1c-.35-.36-.7-.69-.92-.95l-.48-.27H7.06c-.38-.02-.76-.04-1.15-.06V.04l-.48-.27c-.36-.35-.69-.7-.94-.92L3.22 0c-.36-.35-.7-.69-.95-.92l-.27-.48H1c-.55 0-1-.45-1-1V1a1 1 0 011-1h12a1 1 0 011 1v12c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3z" />
            </svg>
            +243 (0)970 5785 07
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.22l.27.48v2.06c.25.35.56.69.92.94l1.24 1.27c.35.36.7.69.92.95l.48.27h2.06c.38.02.76.04 1.15.06v2.06l.48.27c.36.35.69.7.94.92l1.27 1.24c.36.35.7.69.95.92l.27.48h2.22c.55 0 1 .45 1 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4c0-.55.45-1 1-1h2.22l-.27-.48V2.06c-.25-.35-.56-.69-.92-.94L9.22 1c-.35-.36-.7-.69-.92-.95l-.48-.27H7.06c-.38-.02-.76-.04-1.15-.06V.04l-.48-.27c-.36-.35-.69-.7-.94-.92L3.22 0c-.36-.35-.7-.69-.95-.92l-.27-.48H1c-.55 0-1-.45-1-1V1a1 1 0 011-1h12a1 1 0 011 1v12c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3z" />
            </svg>
            +243 (0)970 5785 07
          </>
        )}
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 12.134V16a1 1 0 01-1 1H6a1 1 0 01-1-1V12.134l-7.997-6.25a1 1 0 01.588-1.734L10 5.884zM14 12.134V16a1 1 0 01-1 1H10a1 1 0 01-1-1V12.134l4.003-3.125a1 1 0 01.588-1.734L14 5.884z" />
            </svg>
            hello@witoxr.studio
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 12.134V16a1 1 0 01-1 1H6a1 1 0 01-1-1V12.134l-7.997-6.25a1 1 0 01.588-1.734L10 5.884zM14 12.134V16a1 1 0 01-1 1H10a1 1 0 01-1-1V12.134l4.003-3.125a1 1 0 01.588-1.734L14 5.884z" />
            </svg>
            hello@witoxr.studio
          </>
        )}
      </button>
    </div>


  




  </div>
  )
}
export default Details;