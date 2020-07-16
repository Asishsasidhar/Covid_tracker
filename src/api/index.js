import axios from 'axios'
const url = 'https://covid19.mathdro.id/api';
export const fetchData = async (country)=>{
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }
    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
        return {confirmed, recovered, deaths, lastUpdate};
    }
    catch(err){
        console.log("error: "+ err);
    }
    
} 

export const fetchDailyData = async ()=>{ 
    try{
        const {data} = await axios.get(`${url}/daily`);
        const modiifiedData = data.map((Dailydata)=> ({
            confirmed : Dailydata.confirmed.total,
            deaths: Dailydata.deaths.total,
            date: Dailydata.reportDate
        })) 
        return modiifiedData;
    }
    catch(err){
        console.log("error: "+err);
    }
}

export const fetchCountries = async ()=>{
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=> country.name);
    }
    catch(err){
        console.log("error"+err);

    }
}
    