
// fetching apis

const key= 'ANXRNGQpTlTeUtbuB94XEDMRl8XoZXe4';


// to get the city api 
const getCity = async (city) =>{

    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const querry = `?apikey=${key}&q=${city}`;

    const response = await fetch (baseURL + querry) ;

    const data = await response.json();
    // console.log(data);
    return data[0];


}
// weather condition api
const getCondition = async (id) =>{

    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const querry = `${id}?apikey=${key}`;

    const response = await fetch(baseURL + querry);

    const data = await response.json();
    // console.log(data);
    return data[0];


}
