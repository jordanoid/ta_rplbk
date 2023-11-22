import NavScroll from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import './Home.css';




const Home = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
          toast.warning("Login dulu bang Pindah-Pindah AE!!");
          navigate('/login');
        }
      }, []);

    return ( 
        <>
        <NavScroll></NavScroll>
        <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Kelompok 04</h3>

        
              <h4 class="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Eren Beban</h4>
              <p class="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Dalam dunia "Attack on Titan" (AOT), Titan merupakan makhluk raksasa humanoid yang memegang peran sentral dalam konflik cerita. 
              Asal usul Titan terkait erat dengan manusia, 
              yang dapat berubah menjadi Titan melalui proses yang dikenal sebagai Titanization. 
              Jenis-jenis Titan bervariasi, dengan masing-masing memiliki kekuatan dan kemampuan yang unik. 
              Ada Titan dengan ukuran besar, sementara yang lain memiliki kemampuan khusus seperti berlari cepat, 
              mengeluarkan panas tinggi, atau bahkan mengendalikan Titan lain. 
              Dinding-dinding raksasa yang melindungi manusia dari Titan ternyata juga terdiri dari Wall Titans, 
              yang membuka sejumlah misteri terkait sejarah dunia mereka
              </p>
            </div>

        </MDBCol>



        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://www.bhmpics.com/downloads/armored-titan-Wallpapers/11.q4hkv2ngs6881.png"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>

        </>
     );
};
 
export default Home;