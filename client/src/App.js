import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GuestLayout from './components/guestLayout/GuestLayout';
import Home from './components/guestLayout/Home';
import About from './components/guestLayout/About';
import Services from './components/guestLayout/Services';
import Contact from './components/guestLayout/Contact';
import Register from './components/guestLayout/Register';
import Login from './components/guestLayout/Login';
import Help from './components/userLayout/Help';
import Notes from './components/userLayout/Notes';
import Profile from './components/userLayout/Profile';
import ChangePassword from './components/userLayout/ChangePassword';
import Logout from './components/adminLayout/Logout';
import Students from './components/adminLayout/Students';
import AddCourses from './components/adminLayout/AddCourses';
import AddNotes from './components/adminLayout/AddNotes';
import UserLayout from './components/userLayout/UserLayout';
import AdminLayout from './components/adminLayout/AdminLayout';
import Item from './components/adminLayout/Item';
import ViewItem from './components/userLayout/ViewItem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
         <Route path='/user' element={<UserLayout />}>
          <Route path="/user/home" element={<Home />} />
          <Route path="/user/help" element={<Help />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/notes" element={<Notes />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/viewitem" element={<ViewItem />} />
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/logout" element={<Logout />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/Students" element={<Students />} />
          <Route path="/admin/addcourses" element={<AddCourses />} />
          <Route path="/admin/addnotes" element={<AddNotes />} /> <Route>
          <Route path="/admin/item" element={<Item />} /> </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
