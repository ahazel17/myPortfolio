'use client';
import Particle from "./components/particle";
export default function layout() {
  

  return (
    
    <>
    
    <script src="https://kit.fontawesome.com/5cb5f3efa7.js" crossOrigin="anonymous"></script>
    <div className=" w-full h-1/4 justify-center">
      <div className="flex justify-center z-auto ">
        <a href="#" className="text-blue-500    border-solid px-8 py-3  font-medium">Trabajo</a>
        <a href="#" className="text-blue-500  border-solid px-8 py-3  font-medium">Sobre mí</a>
        <a href="#" className="text-blue-500  border-solid px-8 py-3  font-medium">Contacto</a>
      </div>
      <hr></hr>
    </div>
    
      <div className="block my-48 justify-center items-center text-center" id="tsparticles">
      
      <Particle />
        <div className="">
          
        <h1 className="text-6xl font-bold text-center">Yo soy <br></br> <a className="text-blue-500">Ahazel</a>, un gusto.</h1> 
      </div> 
      
        <div className=" my-6">
        <p className=" text-gray-400 font-semibold justify-center text-3xl">Desarrollo de aplicaciones de escritorio, aplicaciones web y servicios prácticos de ciberseguridad.</p> 
      </div>
      
      <div className="flex justify-center">
      <a href="https://github.com/ahazel17"  target="_blank"><i className="fa-brands fa-github fa-2xl px-3 py-3" ></i></a>
      <a href="https://www.linkedin.com/in/condefranco/"  target="_blank"><i className="fa-brands fa-linkedin fa-2xl px-3 py-3"></i></a>
      <a href="https://www.instagram.com/jojovoid_"  target="_blank"><i className="fa-brands fa-instagram fa-2xl px-3 py-3"></i></a>
      </div>
      
    </div>

    <div className="flex  h-1/3 text-black  px-8 py-10 font-bold  ">
      <div className="w-1/2">
        
        <h1 className="text-5xl"> Revisa mis <br></br>  <a className="text-blue-500">trabajos</a>
        
        
        </h1>
      </div>
      

      

    </div>
    
    
    
    
    </>

  );

};