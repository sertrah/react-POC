import axios from 'axios';

const BASE_URL ="https://api.covid19api.com/";



const getAllRoute = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
  
      const route = res.data;
  
      console.log(`GET: Here's the list of route`, route);
  
      return route;
    } catch (e) {
      console.error(e);
    }
};

const getAll = async (...b) => {
    try {
      const res = await axios.get(`${BASE_URL}/countries`);
      const route = res.data;
      return route;
    } catch (e) {
      console.error(e);
    }
};

const getGlobalSummary = async (...b) => {
  console.log("HOLA");
    try {
      const res = await axios.get(`${BASE_URL}/summary`);
      const route = res.data;  
      return route;
    } catch (e) {
      console.error(e);
    }
};

export const apiCovid =  {getAll, getGlobalSummary }