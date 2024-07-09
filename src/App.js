import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Website/Pages/Home';
import About from './Website/Pages/About';
import Service from './Website/Pages/Service';
import Packages from './Website/Pages/Packages';
import Destination from './Website/Pages/Destination';
import Booking from './Website/Pages/Booking';
import Guides from './Website/Pages/Guides';
import Testimonial from './Website/Pages/Testimonial';
import Four_0_4_Page from './Website/Pages/Four_0_4_Page';
import Contact from './Website/Pages/Contact';
import Register from './Website/Pages/Register';
import Login from './Website/Pages/Login';
import Adashboard from './Admin/Pages/Adashboard';
import Add_Packages from './Admin/Pages/Add_Packages';
import Manage_Package from './Admin/Pages/Manage_Package';
import Alogin from './Admin/Pages/Alogin';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Website/Pages/Profile';
import Manage_user from './Admin/Pages/Manage_user';
import Add_Services from './Admin/Pages/Add_Services';
import Manage_Services from './Admin/Pages/Manage_Services';
import Add_Guide from './Admin/Pages/Add_Guide';
import Manage_Guide from './Admin/Pages/Manage_Guide';
import Add_destination from './Admin/Pages/Add_destination';
import Manage_destination from './Admin/Pages/Manage_destination';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Add_Testimonial from './Admin/Pages/Add_Testimonial';
import Manage_Testimonial from './Admin/Pages/Manage_Testimonial';
import Manage_About from './Admin/Pages/Manage_About';
import Request from './Website/Pages/Request';

function App() {
  return (
    <div className="App">
       <ToastContainer />
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Home></Home></>}/>
      <Route path="/about" element={<><About></About></>}/>
      <Route path="/service" element={<><Service></Service></>}/>
      <Route path="/package" element={<><Packages></Packages></>}/>
      <Route path="/destination" element={<><Destination></Destination></>}/>
      <Route path="/booking" element={<><Booking></Booking></>}/>
      <Route path="/guide" element={<><Guides></Guides></>}/>
      <Route path="/testimonial" element={<><Testimonial></Testimonial></>}/>
      <Route path="/404" element={<><Four_0_4_Page></Four_0_4_Page></>}/>
      <Route path="/contact" element={<><Contact></Contact></>}/>
      <Route path="/register" element={<><Register></Register></>}/>
      <Route path="/login" element={<><Login></Login></>}/>
      <Route path='/Adashboard' element={<><Adashboard></Adashboard></>}/>
      <Route path='/addpackages' element={<><Add_Packages></Add_Packages></>}/>
      <Route path='/managepackages' element={<><Manage_Package></Manage_Package></>}/>
      <Route path='/adminlogin' element={<><Alogin></Alogin></>}/>
      <Route path='/profile' element={<><Profile></Profile></>}/>
      <Route path='/manageuser' element={<><Manage_user></Manage_user></>}/>
      <Route path='/addservices' element={<><Add_Services></Add_Services></>}/>
      <Route path='/manageservices' element={<><Manage_Services></Manage_Services></>}/>
      <Route path='/addguide' element={<><Add_Guide></Add_Guide></>}/>
      <Route path='/manageguide' element={<><Manage_Guide></Manage_Guide></>}/>
      <Route path='/adddestination' element={<><Add_destination></Add_destination></>}/>
      <Route path='/managedestination' element={<><Manage_destination></Manage_destination></>}/>
      <Route path='/addtesti' element={<><Add_Testimonial></Add_Testimonial></>}/>
      <Route path='/managetesti' element={<><Manage_Testimonial></Manage_Testimonial></>}/>
      <Route path='/manageabout' element={<><Manage_About></Manage_About></>}/>
      <Route path='/request' element={<><Request></Request></>}/>



    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
