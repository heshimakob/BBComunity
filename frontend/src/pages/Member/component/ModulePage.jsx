import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Sidebar';
import Loading from '../../../components/Loading';

const ModulePage = () => {
  const params = useParams(); // Retrieve course ID from URL
  const [chapitres, setChapitres] = useState([]);
  const [chapitre, setChapitre] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chaLoading,setChaLoading]= useState (false);
  // const [show,ssetShow]= useState(false);
  // const [error, setError] = useState(null);

  async  function fetchLectures(){
    try {
      const {data}= await axios.get(`http://localhost:8080/api/cours/getChapitres/${(params.id)}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });


      console.log('Données reçues :', data);
      setChapitres(data.chapitres || [])
      
      setLoading(false)
      
    } catch (error) {
      console.log(error)
      setLoading(false)
      
    }
  }

  async function fetchLecture (id){
    setChaLoading(true)
    try {
      const {data}= await axios.get(`http://localhost:8080/api/cours/getSingleChapitre/${(id)}`);
      console.log(data)
      setChapitre(data.chapitre)
      setLoading(false)
      
    } catch (error) {

      console.log(error)
      setChaLoading(false)
      
    }

  }
  console.log('Cha loading:', chaLoading);

  useEffect(()=>{

    fetchLectures()
  },[]);

  

  // useEffect(() => {
  //   const fetchChapters = async () => {
  //     setLoading(true);
  //     try {
  //       const {data} = await axios.get(`http://localhost:8080/api/cours/getChapitres/${encodeURIComponent(id)}`);
  //       console.log(data)
        
  //       setChapitres(data.chapitres)
  
  //       // setChapitres(response.data.data[0].chapitres); // Update this line
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchChapters();
  // }, [id]);
  // if (loading) {
  //   return <div> 
  //     <h1>chargement,.................</h1>
    
  //   </div>;
  // }

  // if (error) {
  //   return <div>Erreur: {error}</div>;
  // }

  return (

    <>
    {/* <Sidebar/> */}
    {loading? <Loading/>: <>

    <div className='container'>
      <div className='left'>
          {
            chaLoading? <Loading/>:<>

            {
              chapitre.lien ? <> 
              {/* <video src={`http://localhost:8080/api/cours/${chapitre.lien}`} 
              width={"100%"}

              controls
              controlsList="nodownload  noremoteplayback" 
              disablePictureInPicture
              disableRemotePlayback
              autoPlay
              ></video> */}
              <h1>{chapitre.titre}</h1>
              <h3>{chapitre.contenu}</h3>
              </> : <h1>please select the chapter</h1>
            }
            </>
          }
      </div>
      <div className='right'>
        
        {
           
          chapitres && chapitres.length > 0 ? chapitres.map ((e,i)=>(
          

          <div onClick={() => fetchLecture(e._id)} key={i}>
              {i+1}. {e.titre}
            </div>
          )) :<p> Pas de chapitres disponible</p>
       
        }

</div>

    </div>
    </>}
    </>
  );
};
export default ModulePage;