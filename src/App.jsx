
import { Routes, Route } from "react-router-dom";


// Components
import AppHeader from "./component/Header";
import Hero from "./component/Hero";





// const { Content, Footer } = Layout;

export default function App() {
  

  return (
    <div className="bg-[#060202]" >
       <AppHeader/>
      <div className="">
        <Routes>
          <Route path="/" element={<Hero />} />
          
        </Routes>
      </div>
       
      
    </div>
  );
}
