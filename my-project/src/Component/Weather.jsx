import { useState } from "react"

const Weather = () => {
  const [data , setData] = useState();
  const [city , setCity ] = useState("");

  const apiKey = "a69165a0eaeb491ecea2dad1762c35aa"

   //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey} `
  const addCity = () => {
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey} ` )
   .then(res => res.json())
   .then(data => setData(data))
  }
    
  return ( 
  <div className="bg-[#64748b]">
      <div className="text-center ">
      <div className="text-center p-6 ">

        <input type="text"placeholder="enter city"className="text-gray-900 font-bold rounded-3xl border border-gray-300 focus:outline-none w-[700px] px-6 py-2"
        
         value={city} onChange={(e)=>setCity(e.target.value)}/>

        <button className="mx-3 "onClick={addCity}>
        <span className="material-symbols-outlined">
        autorenew
        </span>
        </button>

      </div>
    </div>
    {data && (
<section className="text-gray-900 body-font font-bold">
  <div className="container px-5 py-20 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    <span className="inline-block h-1 w-10 rounded bg-[#cbd5e1] mt-8 mb-6" />
      <p className="text-lg font-bold  ">...{data.name}...</p>
      <span className="inline-block h-1 w-10 rounded bg-[#cbd5e1] mt-8 mb-6" />
      <p className="leading-relaxed text-lg ">{data.weather[0].main}</p>
      <span className="inline-block h-1 w-10 rounded bg-[#cbd5e1] mt-8 mb-6" />
      <h2 className="text-gray-900  title-font tracking-wider text-lg font-bold">{data.weather[0].description}</h2>
      <span className="inline-block h-1 w-10 rounded bg-[#cbd5e1] mt-8 mb-6" />

      <p className="text-gray-900 font-bold text-lg font-bold ">{data.main.temp}</p>
      <span className="inline-block h-1 w-10 rounded bg-[#cbd5e1] mt-8 mb-6" />
      <p className="text-lg font-bold ">{data.main.humidity}</p>
      <span className="inline-block h-1 w-10 rounded bg-[#cbd5e1] mt-8 mb-6" />
       <p className="text-lg font-bold "> Speed... {data.wind.speed}</p>
       <span className="inline-block h-1 w-10 rounded bg-[#cbd5e1] mt-8 mb-6" />



    </div>
  </div>
</section>
    )}

  </div>
    
  )
}

export default Weather



