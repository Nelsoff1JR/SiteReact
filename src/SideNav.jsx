import imagem3 from "/imagens/tonyStark.jpg"

export default function SideNav(){

  return(
    <>
    <aside className="sidenav">
      <div className="sidenav__close-icon">
        <i className="fas fa-times sidenav__brand-close"></i>
      </div>
      <div style={{display: "flex", 
                   alignItems: "center",
                   width: "100%", 
                   height: "8vh", 
  
      }}>
        <span className="material-symbols-outlined" style={{margin: "0px 10px"}}> 
          eco 
        </span>
        <h1 style={{display: "inline"}}>Ux</h1>
        <p  style={{display: "inline", fontSize: "1.6em"}}>Pro</p>
      </div>
      <div style={{width: "100%",
                   height: "12vh",
                   backgroundColor: "#474f6b",
                   display: "flex",
                   alignItems : "center",
      
      }}>
        <img style= {{width: "50px",
                     height: "50px",
                     borderRadius: "50%", 
                     marginLeft: "10px", 
                     
      }} src= {imagem3}/>

        <p style={{marginLeft: "12px"}}> Matthew H</p>
      </div>






      
      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "6vh",
                   marginBottom: "5px"
                  }}>
        <h5 style={{marginLeft: "10px", color: "lightgray"}}>DOCUMENTS</h5> 
        <span style={{marginRight: "10px", color: "lightgray"}} className="material-symbols-outlined">
          description
        </span>
      </div>







      
      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            photo_camera
          </span>
          <p>Insurance</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>

      
      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            flight_takeoff
          </span>
          <p>Travel</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>

      
      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            monetization_on
          </span>
          <p>Taxes</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>

      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "6vh",
                   marginBottom: "5px"
                  }}>
        <h5 style={{marginLeft: "10px", color: "lightgray"}}>MESSAGES</h5> 
        <span style={{marginRight: "10px", color: "lightgray"}} className="material-symbols-outlined">
          mail
        </span>
      </div>


      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            inbox
          </span>
          <p>Inbox</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>


      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            visibility
          </span>
          <p>Unread</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>


      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            menu_book
          </span>
          <p>Archives</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>




      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "6vh",
                   marginBottom: "5px"
                  }}>
        <h5 style={{marginLeft: "10px", color: "lightgray"}}>PHOTO ALBUM</h5> 
        <span style={{marginRight: "10px", color: "lightgray"}} className="material-symbols-outlined">
          image
        </span>
      </div>




      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            change_history
          </span>
          <p>Vacation</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>


      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            wine_bar
          </span>
          <p>Anniversary</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>


      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            school
          </span>
          <p>University</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>



      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "6vh",
                   marginBottom: "5px"
                  }}>
        <h5 style={{marginLeft: "10px", color: "lightgray"}}>STATISTICS</h5> 
        <span style={{marginRight: "10px", color: "lightgray"}} className="material-symbols-outlined">
          leaderboard
        </span>
      </div>



      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            credit_card
          </span>
          <p>Finances</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>


      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            call
          </span>
          <p>Call Stats</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>


      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            flight
          </span>
          <p>Trip Logs</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>





      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "6vh",
                   marginBottom: "5px"
                  }}>
        <h5 style={{marginLeft: "10px", color: "lightgray"}}>EVENTS</h5> 
        <span style={{marginRight: "10px", color: "lightgray"}} className="material-symbols-outlined">
          calendar_month
        </span>
      </div>



      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            wine_bar
          </span>
          <p>Weddings</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>


      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            church
          </span>
          <p>Playdates</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>


      <div style={{display: "flex", 
                   alignItems: "center",
                   justifyContent: "space-between",
                   height: "4vh",
                   marginBottom: "20px"
                  }}>
        <div  style={{display: "flex", 
                   alignItems: "center",
                   fontSize: "0.8em"   
                  }}>
          <span style={{marginLeft: "25px", marginRight:"10px", color: "lightgray"}} className="material-symbols-outlined">
            groups
          </span>
          <p>Networking</p>
        </div>
        <span style={{color: "lightgray", marginRight: "10px"}} className="material-symbols-outlined">
          navigate_next
        </span>
        
      </div>


    </aside>
    </>
  );
}
