'use client';
import Particle from "./components/particle";
import Wparticle from "./components/wparticle";
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

    <div className="flex  text-white font-semibold bg-black">
      <div className="w-1/2 justify-center mt-10 flex">
        {/* <Wparticle /> */}
        <h1 className=" text-7xl"> Mira mis  <a className="text-blue-500">trabajos</a>
        <p className=" text-2xl mt-3 font-thin ">Comprueba las tecnologías con las que he estado trabajando.</p>
        
        
        </h1>
      </div>
      <div className="w-1/2 ">
        {/* <Wparticle /> */}
      <img className=" h-4/6 justify-center m-10" src="https://productivityist.com/wp-content/uploads/testpattern.jpg"></img>        
      </div>
      

      

    </div>
    
    <div>
 {/* Contact Div */}
    <h1> hola xd</h1>

    </div>
    
    
    </>

  );

};