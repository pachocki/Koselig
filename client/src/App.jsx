import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Layout from "./layout/Layout";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";
import Bookings from "./Pages/Bookings";
import Places from "./Pages/Places";
import ProfilePage from "./Pages/ProfilePage";
import PlacesForm from "./Pages/PlacesForm";
import SinglePage from "./Pages/SinglePage";
import SingleBooking from "./Pages/SingleBooking";
import Destinations from "./Pages/Destinations";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL 
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/destinations" element={<Destinations/>}/>
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/bookings" element={<Bookings />} />
          <Route path="/account/bookings/:id" element={<SingleBooking />} />
          <Route path="/account/places" element={<Places />} />
          <Route path="/account/places/new" element={<PlacesForm />} />
          <Route path="/account/places/:id" element={<PlacesForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/place/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
