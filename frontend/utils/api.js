import { API_URL, STRAPI_API_TOKEN } from "./urls";
// const API_TOKEN ="8e8e228102ee7e3254646b2172de608f042dd5f03eb9fe8d3a3f44c8f9a2fe225fb93edec6f078e131bb80a347a935c24cd3bc9c36bf6a6b1885912e095cc23b384d3af65aafdfb82c4bcacd82f7b0122836a5288d51233a0e22c1feaa6f64cfd45a36d31edf5e369b14390c0f5fed2ac3b61b05370b90081497b67fc55b01c6"

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

// export const makePaymentRequest = async (endpoint, payload)=>{
//     const res = await fetch(`${API_URL}${endpoint}`,{
//         method: "POST",
//         headers: {
//             Authorization: "Bearer "+ STRAPI_API_TOKEN,
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(payload)



//     })
//     const data = await res.json()

//     return data
// }

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
  