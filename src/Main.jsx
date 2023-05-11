import styled from "styled-components"
import style from "./DesignOverview.module.css"
import imagem from "/imagens/documento2.jpg"
import imagem1 from "/imagens/graficoImg.png"

const MainCards = styled.div`
   margin: 20px;
`

const Card = styled.div`
  width: 100%;
  background-color: white;
  margin-bottom: 20px;
  -webkit-column-break-inside: avoid;
  box-sizing: border-box;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #35355f;
  height: 7%;
  margin-bottom: 4px;
`

const CardHeaderPriP = styled.p`
  font-family: 'Dosis', sans-serif;
  display: inline;
  padding: 0px 10px;
`

const CardHeaderSegP = styled.p`
  display: inline;
  padding-top: 3px;

`
const CardHeaderTerP = styled.p`
  font-family: 'Dosis', sans-serif;
  padding-top: 2.5px;
  display: inline;
  padding-left: 8px;
  font-size: 0.9em;
  color: #11c5e8;  
`

const CardHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 0.9em;
  margin-right: 10px;
`

const CardHeaderDivSpan = styled.span`
  border: 2px solid #3b3b3b;
  color: #3b3b3b;
  background-color: lightgray; 
`

const CardMainDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`

const CardMainDivPriP = styled.div`
  margin-left: 50px;
  margin-bottom: 45px;
  color: black;
`

const CardMain2div = styled.div`
  position: relative;
  top: 50%;
  height: 86px;
  width: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardMain2divDiv = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

const CardMain2divHr = styled.hr`
  position: relative;
  transform: rotate(90deg) ;
  width: 100%;
`

const CardMain3div = styled.div`
  font-size: 0.7em;
`

const CardMain3divH3 = styled.div` 
  margin: 0px;
  color: #11c5e8;
`

const CardMain3divPriP = styled.p`
  margin-top: 4px;
  color: black;
`

const CardMain3divSegP = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  color: gray;
`

const CardMainDivPriPRetirandoMargin1 = styled.p`
  margin-left: 32px;
  margin-bottom: 45px;
  color: black;
`

const CardMainDivPriPRetirandoMargin2 = styled.p`
  margin-left: 26px;
  margin-bottom: 45px;
  color: black;
`

const CardMainDivPriPRetirandoMargin3 = styled.p`
  margin-left: 48px;
  margin-bottom: 45px;
  color: black;
`
const CardMainDivPriPRetirandoMargin4 = styled.p`
  margin-left: 29px;
  margin-bottom: 45px;
  color: black;
`

const CardHeader1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #35355f;
  height: 17%;
  margin-bottom: 4px;
`

const CardMain1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const CardMainDiv1 = styled.div`
  text-align: center;
  width: 20%;
  height: 100%;
`

const CardMainDivPriP1 = styled.p`
  color: black;
  margin-top: 10px;
  margin-bottom: 5px;
`

const CardMainDivSegP = styled.p`
  margin: 0px;
  color: gray;
  font-size: 0.8em;
`

const CardHeader2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #35355f;
  height: 13%;
  margin-bottom: 4px;
`




export default function Main() {

  const backgroundPurple = {
    backgroundColor:"purple"
  }
  const backgroundGreen = {
    backgroundColor:"green"
  }
  const backgroundRed = {
    backgroundColor:"red"
  }

  return(
  <>
    <main className="main">
      <div className="main-header">
        <div className="main-header__heading"><p className="main-header_-firstP">
          Welcome, <b>Matthew</b> </p>
          <p>How are you today??</p>
        </div> 
        <div className="main-header__updates">
          <div className="main-header__updates_-AlignPDiv">
            <p>41</p>
            <div className="main-header__updates_-AlingCalendarText">
              <span className="material-symbols-outlined">calendar_month</span>
              <p>Events</p>
            </div>
          </div>
          
          <div className="main-header__updates_-AlignPDiv">
            <p>64</p>
            <div className="main-header__updates_-AlingCalendarText">
              <span className="material-symbols-outlined">chat_bubble</span>
              <p>Events</p>
            </div>
          </div>

          <div className="main-header__updates_-AlignPDiv">
            <p>27*</p>
            <div className="main-header__updates_-AlingCalendarText">
              <span className="material-symbols-outlined">location_on</span>
              <p>Events</p>
            </div>
          </div>
         
        </div>
               
      </div>

      <div className={style.mainOverview}>
        <div className={style.overviewcard}>
          <div className={style.overviewcard__icon}> 
            <div className={style.overviewcard__icon__iconsCircle}> 
              <span className="material-symbols-outlined">description</span>
            </div>
          </div>
          <div className={style.overviewcard__info}>
            <div className={style.overviewcard__info__divAlignP}>
              <p className={style.overviewcard__info__divP}>New <b>Document</b></p>
              <p className={style.overviewcard__info__divPSegundo}>Europe Trip</p>
            </div>
          </div>
        </div>
        <div className={style.overviewcard}>
          <div className={style.overviewcard__icon}>
            <div style={backgroundGreen} className={style.overviewcard__icon__iconsCircle}> 
              <span className="material-symbols-outlined">event_available</span>
            </div>
          </div>
          <div className={style.overviewcard__info}>
            <div className={style.overviewcard__info__divAlignP}>
              <p className={style.overviewcard__info__divP}>Upcoming <b>Event</b></p>
              <p className={style.overviewcard__info__divPSegundo}>Chilli Cookof</p>
            </div>
          </div>
        </div>
        <div className={style.overviewcard}>
          <div className={style.overviewcard__icon}>
            <div style={backgroundRed} className={style.overviewcard__icon__iconsCircle}> 
              <span className="material-symbols-outlined">mail</span>
            </div>
          </div>
          <div className={style.overviewcard__info}>
            <div className={style.overviewcard__info__divAlignP}>
              <p className={style.overviewcard__info__divP}>Recent <b>Emails</b></p>
              <p className={style.overviewcard__info__divPSegundo}>+10</p>
            </div>
          </div>
        </div>
        <div className={style.overviewcard}>
          <div className={style.overviewcard__icon}>
            <div style={backgroundPurple} className={style.overviewcard__icon__iconsCircle}> 
              <span className="material-symbols-outlined">photo_library</span>
            </div>  
          </div>
          <div className={style.overviewcard__info}>
            <div className={style.overviewcard__info__divAlignP}>
              <p className={style.overviewcard__info__divP}>New <b>Album</b></p>
              <p className={style.overviewcard__info__divPSegundo}>House Concert</p>
            </div>
          </div>
        </div>
      </div>



      
      <MainCards>
        <Card>
          <CardHeader>
            <div>
              <CardHeaderPriP>Your</CardHeaderPriP>
              <CardHeaderSegP>Events</CardHeaderSegP>
              <CardHeaderTerP>View All</CardHeaderTerP>
            </div>
            
            <CardHeaderDiv>        
              <CardHeaderDivSpan className="material-symbols-outlined">settings</CardHeaderDivSpan>
              <CardHeaderDivSpan className="material-symbols-outlined"> edit_note </CardHeaderDivSpan>         
            </CardHeaderDiv>          
          </CardHeader>

          
          <div className="card-main">
            <CardMainDiv>   
              <CardMainDivPriP>Today</CardMainDivPriP>
            
              <CardMain2div>
                <CardMain2divDiv style={{backgroundColor: "#11c5e8"}} > 
                  <span className="material-symbols-outlined"> redeem </span> 
                </CardMain2divDiv>     
                <CardMain2divHr/>
                
              </CardMain2div>
              <CardMain3div>
                <CardMain3divH3>Jonathan G</CardMain3divH3>
                <CardMain3divPriP>Going away party at 8:30pm. bring a friend</CardMain3divPriP>
                <CardMain3divSegP>1404 Gibson St</CardMain3divSegP>
              </CardMain3div>
                      
            </CardMainDiv>
        
          </div>

          
          
          <div className="card-main">
            <CardMainDiv>    

              <CardMainDivPriPRetirandoMargin1>Tuesday</CardMainDivPriPRetirandoMargin1>
      
              <CardMain2div>
                <CardMain2divDiv className="card_main_2div_div" style={{backgroundColor: "red"}} > 
                  <span className="material-symbols-outlined"> flight </span> 
                </CardMain2divDiv>
              
                <CardMain2divHr/>
                
              </CardMain2div>
              <CardMain3div>
                <CardMain3divH3>Matthew H</CardMain3divH3>
                <CardMain3divPriP>Flying to bora bora at 4:30pm</CardMain3divPriP>
                <CardMain3divSegP>Delta, Gate 27B</CardMain3divSegP>
              </CardMain3div>
                      
            </CardMainDiv> 
        
          </div>


          
          <div className="card-main">
            <CardMainDiv>   
              <CardMainDivPriPRetirandoMargin2>Thursday</CardMainDivPriPRetirandoMargin2>
            
              <CardMain2div>
                <CardMain2divDiv style={{backgroundColor: "#11c5e8"}} > 
                  <span className="material-symbols-outlined"> menu_book </span>
                </CardMain2divDiv>
              
                <CardMain2divHr/>
                
              </CardMain2div>
              <CardMain3div>
                <CardMain3divH3>National Institute of Science</CardMain3divH3>
                <CardMain3divPriP>Join the institute for an in-depth look at Stephen Hawking</CardMain3divPriP>
                <CardMain3divSegP>7:30pm, Carnegie Center for Science</CardMain3divSegP>
              </CardMain3div>
                      
            </CardMainDiv>
        
          </div>

          

           <div className="card-main">
            <CardMainDiv>      
              <CardMainDivPriPRetirandoMargin3>Friday</CardMainDivPriPRetirandoMargin3>
            
              <CardMain2div>
                <CardMain2divDiv style={{backgroundColor: "red"}} > 
                  <span className="material-symbols-outlined"> favorite </span>  
                </CardMain2divDiv>
              
                <CardMain2divHr/>
                
              </CardMain2div>
              <CardMain3div>
                <CardMain3divH3>24th Annual Heart Ball</CardMain3divH3>
                <CardMain3divPriP>Join us and contribute to your favorite local charity</CardMain3divPriP>
                <CardMain3divSegP>6:45pm, Austin Convention Ctr</CardMain3divSegP>
              </CardMain3div>
                      
            </CardMainDiv>   
        
          </div>


          
          <div className="card-main">
            <CardMainDiv>  
              <CardMainDivPriPRetirandoMargin4>Saturday</CardMainDivPriPRetirandoMargin4>
            
              <CardMain2div>
                <CardMain2divDiv className="card_main_2div_div" style={{backgroundColor: "#11c5e8"}} > 
                  <span className="material-symbols-outlined"> favorite </span>  
                </CardMain2divDiv>
              
                <CardMain2divHr/>
                
              </CardMain2div>
              <CardMain3div>
                <CardMain3divH3>Little Rock Air Show</CardMain3divH3>
                <CardMain3divPriP>See the Blue Angels fly with roarng thunder</CardMain3divPriP>
                <CardMain3divPriP>11:00pm, Jacksonville AirForce Base</CardMain3divPriP>
              </CardMain3div>
                      
            </CardMainDiv>
            
          </div>
    
        </Card>

       
        <Card>
          <CardHeader1>
            <div>
              <CardHeaderPriP>Recent</CardHeaderPriP>
              <CardHeaderSegP>Documents</CardHeaderSegP>
              <CardHeaderTerP>View All</CardHeaderTerP>
            </div>
            
            <CardHeaderDiv>        
                <CardHeaderDivSpan className="material-symbols-outlined">settings</CardHeaderDivSpan>
                <CardHeaderDivSpan className="material-symbols-outlined"> edit_note </CardHeaderDivSpan>         
            </CardHeaderDiv>
          </CardHeader1>

          <CardMain1>
            <CardMainDiv1>
              <img className="card_main_div_1Img" src={imagem}/> 
              <CardMainDivPriP1>tesla-patents</CardMainDivPriP1>
              <CardMainDivSegP>07/16/2018</CardMainDivSegP>
            </CardMainDiv1>
          
          
          
            <CardMainDiv1>
              <img className="card_main_div_1Img" src={imagem}/> 
              <CardMainDivPriP1>tesla-patents</CardMainDivPriP1>
              <CardMainDivSegP>07/16/2018</CardMainDivSegP>
            </CardMainDiv1>
          

          
            <CardMainDiv1>
              <img className="card_main_div_1Img" src={imagem}/> 
              <CardMainDivPriP1>tesla-patents</CardMainDivPriP1>
              <CardMainDivSegP>07/16/2018</CardMainDivSegP>
            </CardMainDiv1>
         

          
            <CardMainDiv1>
              <img className="card_main_div_1Img" src={imagem}/> 
              <CardMainDivPriP1>tesla-patents</CardMainDivPriP1>
              <CardMainDivSegP>07/16/2018</CardMainDivSegP>
            </CardMainDiv1>
          </CardMain1>
        </Card>



        
        <Card>
          <CardHeader2>
            <div>
              <CardHeaderPriP>Recent</CardHeaderPriP>
              <CardHeaderSegP>Documents</CardHeaderSegP>
              <CardHeaderTerP>View All</CardHeaderTerP>
            </div>
            
            <CardHeaderDiv>        
                <CardHeaderDivSpan className="material-symbols-outlined">settings</CardHeaderDivSpan>
                <CardHeaderDivSpan className="material-symbols-outlined"> edit_note </CardHeaderDivSpan>         
            </CardHeaderDiv>
          </CardHeader2>

          <div className="card-main_2">
            <img src= {imagem1}/>
          </div>
        </Card>
      </MainCards>
    </main>
  </>
  );
}