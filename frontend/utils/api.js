import {  STRAPI_API_TOKEN } from "./urls";
const API_URL='https://e-commerce-um27.onrender.com'

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();

    return data;
};



export const makePaymentRequest = async (endpoint, payload) => {
    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + STRAPI_API_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) {
        // Handle non-successful responses (e.g., 4xx or 5xx status codes)
        console.error(`Request failed with status ${res.status}`);
        return null; // or throw an error
      }
  
      const data = await res.json();
      console.log("Response data:", data);
  
      return data;
    } catch (error) {
      // Handle any other errors that might occur
      console.error("An error occurred:", error.message);
      return null; // or throw an error
    }
  };
  