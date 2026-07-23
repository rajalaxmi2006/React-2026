import React, { useEffect, useState } from 'react'
import ErrorMessage from './components/ErrorMessage'
import SearchBar from './components/SearchBar'

const App = () => {

  const [city, setCity] = useState("Delhi");

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(()=>{
    let isCancelled = false;

    async function loadWeather() {
      setLoading(true);
      setError(null);


      try {
        const data = await fetchWeatherByCity(city);
                if(!isCancelled) setWeather(data);
        
      } catch (err) {
        if(!isCancelled){
          setError(err.message);
          setWeather(null);
        }
      } finally{
          if(!isCancelled) setLoading(false)
      }
    }
    loadWeather();
    return ()=>{
      isCancelled = true;
    }
  }, [city])

  function handleSearch(newCity){
          setCity(newCity)
  }

  return (
    <div>
      <ErrorMessage/>
      <SearchBar/>
    </div>
  )
}

export default App
