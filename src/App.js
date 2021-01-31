import './App.css';
import profilePic from './Images/ProfilePic.png'
import JohnWall from './Images/JohnWall3ptShooting.png'
import Bank from './Images/PocketsLanding.png'
import Pocket from './Images/PocketDetail.png'
import SMB from './Images/SMB.png'
import Background from './Images/Background.png'

const wallAnalysis = "https://reddy-s-k.medium.com/2020-nba-offseason-analysis-with-python-houston-rockets-pt-1-fd64e2c79bc5"
const SMBAnalysis = "https://doblin.com/dist/images/uploads/Serving-Small-Businesses-in-a-Time-of-Crisis.pdf"

function App() {
  return (
    
    <div className="App" >
        <div className="Header" style={{ backgroundImage: `url(${Background})` }}>
          <img className= "ProfilePic" src={profilePic} alt="Profile Pic" ></img>
          <h1>Hi, I'm Karthik.</h1>
          <h2 className="Interests">I have a passion for technology, problem solving with data, and design.</h2>
        </div>
        <div className="Skills">
          <h1 className="SkillsTitle">My Skills</h1>
          <div className="SkillsList">
            <div className = "Skill">
              <img src='https://static.thenounproject.com/png/2725604-200.png'></img>
              <p>Data Analysis</p>
              <p>Excel, Python, Tableau</p>
            </div>
            <div className = "Skill"> 
              <img src="https://static.thenounproject.com/png/1778980-200.png"></img>
              <p>Fullstack Development</p>
              <p>Node.js and React</p>
            </div>
            <div className = "Skill">
              <img src="https://static.thenounproject.com/png/3211707-200.png"></img>
              <p>Product Management</p>
              <p>Miro, Sketch</p>
            </div>
            
          </div>
        </div>
        <div className="Work">
          <h1 className="WorkTitle">My Latest Work</h1>
          <div className="WorkList">
            <div className="WorkItem">
              <div className="WorkSummary">
                <h2><a href= {wallAnalysis}>Python Analysis: John Wall's Fit With The Houston Rockets</a></h2>
                <p>An analysis of John Wall and his fit with his new team: The Houston Rockets. </p>
              </div>
              <div className="WorkImage">
                <img src={JohnWall} style={{margin:"1.5em"}}></img>
              </div>
            </div>

            <div className="WorkItem">
              <div className="WorkImage">
                <img src={Bank} style={{margin:"1.5em"}}></img>
                <img src={Pocket}></img>
              </div>
              <div className="WorkSummary">
                <h2>Product Design: Digital Banking App</h2>
                <p>Designed and developed a concept for a Digital Banking app, highlighting behavioral savings features such as "Pockets".</p>
              </div>
            </div>

            <div className="WorkItem">
              <div className="WorkSummary">
                <h2><a href= {wallAnalysis}>Research: Serving Small Businesses in a Time of Crisis</a></h2>
                <p>Co-contributor on Deloitte's report on Small Business needs within financial services and how banks can better support Small Business customers during the pandemic.</p>
              </div>
              <div className="WorkImage">
                <img src={SMB} style={{margin:"1.5em"}}></img>
              </div>
            </div>
        
          </div>
        </div>
        <h2>Contact me:</h2>
        <p>Email: reddy.s.karthik@gmail.com</p>
    </div>
  );
}

export default App;
