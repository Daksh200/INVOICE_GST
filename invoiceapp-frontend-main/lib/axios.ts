import axios from "axios"

const api = axios.create({
  // Backend mounts routes under /api (e.g., /api/user, /api/invoices, /api/stats)
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  withCredentials: true, // Send cookies (JWT)
})

export default api
