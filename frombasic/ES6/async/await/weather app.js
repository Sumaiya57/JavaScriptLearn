/*Challenge 6:

Create a fake “weather app”:

getCity() → returns city after 1 sec
getWeather(city) → returns weather after 2 sec

*/
//Challenge 6:
function getCity(){  
   return new Promise((resolve)=>{
    setTimeout(()=>{ 
    resolve(`City:${"Chattogram"}`)},1000); });
}
function getWeather(city){  
      return new Promise((resolve)=>{
          setTimeout(()=>{ 
            resolve(`Weather:${"32°C Sunny"}`)},2000); });
}

async function showdata(){  
    try{
      const result = await getCity();
       console.log(result);
      const result1 = await getWeather(result);
       console.log(result1);
    } catch (error) {
      console.error("Error:", error);
    }
  }

showdata();
