const API_URL = "https://awos-tienda-wn71.onrender.com/api/"; // Importante colocar la url de tu api

export const api = {
  get: async (endpoint) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${API_URL}${endpoint}`,{
        headers:{
          'Authorization': token ? `Bearer ${token}`:'',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Error en GET:", error);
      throw error;
    }
  },

  
  post: async (endpoint, body) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // cabecera de autorizacion "Authorization" manda un json 
        // (Authorization: 'Bearer ${token}' 
        body: JSON.stringify(body)
      });
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Error en POST:", error);
      throw error;
    }
  }
};