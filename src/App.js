import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Navbar from './components/Navbar';
import front from "./images/front.jpg"
import Sofia from "./images/sofia.jpg" ; 
import Rista from "./images/rista.jpg" ; 
import './App.css';
import './font.css' ; 
import Faq from './components/Faq';
import Collab from './components/Collab';
import Map from './components/Map';
import Footer from './components/Footer';
import image from './images/image.jpg' 
import one from './images/1.jpg' ; 
import two from './images/2.jpg' ; 
import three from './images/3.jpg' ; 
import four from './images/4.jpg' ; 
import five from './images/5.jpg' ; 
import six from './images/6.jpg' ; 

function App() {
  return (
    <div className="App">
      {/* navbar */}
   
          <Navbar/>

      {/* header */}
      <Fade bottom>
        <div ><img src={image}  
      style={{position:"absolute" ,
      left:"20px",
      borderRadius:"70px",
      opacity:"0.2",
      }} width={600}/>
      </div>
      </Fade>

      <Fade bottom>
    
      <section>
      <div class="container">
       
        <div className='left'>
            <h1>OUR PHILOSOPHY

              </h1>
              <p style={{textAlign:"left"}}>
                Hi everyone we are team divine group 
              We are based in HongKong and we have planned 
              to start Dance class. Team divine was started in early 2022 
              it has continued to grow and we warmly welcome everyone to join our class 
              </p>
          
        </div>
        <div className='right'>
            <img src={front} width='500' height='400' style={{borderRadius:'4px'}} ></img>

        </div>
       
      
    
      </div>

      </section>
      </Fade>

      {/* recent projects */}
      <Fade bottom>
        <section className='grid'>
        <h1> Recent Projects </h1>
          <div className='grid-item'>
            <Slide left>
            <div className='first-block'>
            <img src={one} width={260}  height={160}/>
            <img src={two} width={260}  height={160}/>
            <img src={three} width={260}  height={160}/>
          
            </div>
            </Slide>
            <Slide right>
            <div className='second-block'>
            <img src={four} width={260}  height={160}/>
             <img src={five} width={260}  height={160}/> 
             <img src={six} width={260}  height={160}/>
          
            </div>
            </Slide>
          
          </div>
        </section>
 
      </Fade>


      {/* instructor */}
      <Fade bottom>
      <section> 
         <h1>Meet Our Dancer Teachers</h1>
        <div className='instructor'>
      
      
              
              <Fade left>
                <div className='rista'>
                  <h2>Gurung Rista </h2>
                  <p>Rista Gurung is a skilled dancer and teacher with over 5 years of experience. Her passion and dedication for dance are evident in her teaching, Her teaching style is fun and engaging, with a focus on helping her students build confidence and express themselves through movement. She believes that dance is a powerful form of self-expression and encourages her students to explore their creativity and individuality.
                  </p>
                  <img src={Rista} alt='rista' height={200}  width={170}
                 />
                 
                

                </div>
          </Fade>
          <Fade right>
            <div className='sofiya'>
            <img src={Sofia} alt="sofia" height={150} width={190}/>
        
                 
                  <p>
             Sofiya Gurung is a talented dance instructor who has been dancing for over 5 years. She has a teaching style that is nurturing and encouraging, and she focuses on helping her students build a strong technical foundation while also exploring their own unique style. She believes that dance is a powerful form of self-expression and is passionate about helping her students develop their skills and confidence.     
                  </p>
                
                  <h2>Gurung Sofiya</h2>
            </div>
            </Fade>
            </div>

    
      
      </section>
      </Fade>

      {/* pricing */}
      <Slide left>
      <section>
      <h1>Choose Your Dance Class</h1>
      <div className='price'>
       
        
          <div className='rate'>
            <h5>Tuesday: Hip hop / Jazz Funk / K-pop </h5>
            <h5>Wednesday: Hip hop / Jazz Funk / K-pop </h5>
            <h5>Thrusday: Lyrical / Contemporary</h5>
            <h5>Friday: Bollywood / Nepali / Hip hop </h5>
            

          </div>
          <div className='rate'>
            <h3>Unlimited Dance Pass </h3>
            <h5>1 Month : 750 hkd$</h5>
            <h5>2 Months : 1500 hkd$</h5>

          </div>
          <div className='rate'>
          <h3>Regular Dance Pass </h3>
            <h5>10 Classes : 1200 hkd$ 2months </h5> 
            <h5>22 Classes : 2400 hkd$ 4 months </h5>

          </div>
        

        </div>
      </section>
      </Slide>

      {/* FAQ */}
      <Slide right>
      <section>
        <div className='faq'>
          <h1> FAQ </h1>
          <Faq />
        </div>
      </section>
      </Slide>

      {/* collaboration form */}
      <Slide left>
      <section>
        <h1 style={{marginBottom:'100px'}}>COLLAB ? </h1>
        <div className='collab'>
        
         <div>
          <h1 style={{textAlign:"left"}}>
            WHY <br/>
            DONT <br/>
            WE<br/>
            WORK <br/>
            TOGETHER 
          </h1>

         </div>
         <div>
          <Collab/>
         </div>
        </div>
      </section>
      </Slide>

      {/* location */}
      <section>
        <h1>Location</h1>
        <div className='location'>
          <div><Map /></div>
          
          <div> 
            <h3>Find Us Here</h3>
            <p> 2F Room S15 , Bowring commercial center 150-160 Woosung Street</p>
            <p>5729 3977</p>
            <p>teamdivine2022@gmail.com</p>
          </div>
       


        </div>
      </section>

      <section>
        <Footer /> 
      </section>

     
    </div>
  );
}

export default App;
