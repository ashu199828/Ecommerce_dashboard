import './App.css';
import Footer from './components/footer';
import Navbar from './components/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/signup';
import AuthComponent from './components/authcomponent';
import Login from './components/login';
import AddProduct from './components/addProduct';
import ProductList from './components/productList';
import UpdateProduct from './components/updateProduct';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>

          <Route element={<AuthComponent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<UpdateProduct />} />
            {/* <Route path="/logout" element={<h1>Logout page</h1>} /> */}
            <Route path="/profile" element={<Profile />} /></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
