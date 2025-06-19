import  { useState,useEffect } from 'react'
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    //  console.log( dataUrl);
  const [data,setData] = useState([]);
  const [fetchError,setFetchError] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
 
 
  useEffect(()=>{
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url)=>{
        setIsLoading(true);
        try{
            // console.log(url);
            const response = await axios.get(url,{
                CancelToken: source.token
            });
            
            if(isMounted){
                setData(response.data);
                
                setFetchError(null);
            }
            
        }
        catch(err){
            if(isMounted){
                setFetchError(err.message);
                setData([]);

            }
        }
        finally{
            isMounted && setTimeout(()=>setIsLoading(false),1000)
        }
        
    }
    fetchData(dataUrl);

    const cleanUp = ()=>{
        isMounted = false;
        source.cancel();
    }
    
    return(
        ()=>cleanUp()
    )
  },[dataUrl]);
//   console.log('data')
  return {data,fetchError,isLoading};

}

export default useAxiosFetch