
import './App.css';
import LinkdIn from './images/Linkdin.png'
import Medium from './images/Medium.png'
import JWall from './images/JohnWall.png'
import PocketDetail from './images/PocketDetail.png'
import PocketLanding from './images/PocketsLanding.png'
import SMB from './images/SMB.png'
import Product from './images/Product.png'
import SMBIcon from './images/SMB.png'
import Coding from './images/Coding.png'

function App() {
  return (
    <div className="App">

      <div className="nav">

        <div className="header">
          <a href="index.js" className="name">Karthik Reddy</a>
          <nav>
            <ul>
              <li><a href="#">My Work</a></li>
              <li><a href="#">My Skills</a></li>
              <li><a href="https://www.linkedin.com/in/karthik-reddy-79443785/">My Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="links">
          <ul>
            <li><a href="https://www.linkedin.com/in/karthik-reddy-79443785/"> <img src={LinkdIn} alt="LinkdIn"></img></a></li>
            <li><a href="https://reddy-s-k.medium.com/"> <img src={Medium} alt="Medium"></img></a></li>
          </ul>
        </div>
        
      </div>


      <div className="main">
        
        <div className="content">
          <h1>Hi, I'm Karthik.</h1>
          <h1>I pride myself in being an analytical and compassionate problem solver.</h1>
          <p1 className="meet">See some of my work</p1>
        </div>
        <svg className ="diagram" width="249" height="375" viewBox="0 0 249 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75.1119 67.6656L150.015 9.0847L150.209 125.998L75.1119 67.6656Z" fill="#E43FCA"/>
          <path d="M1.11186 127.666L76.0149 69.0847L76.2086 185.998L1.11186 127.666Z" fill="#E43FCA"/>
          <path d="M148.112 70.6656L223.015 12.0847L223.209 128.998L148.112 70.6656Z" fill="#555BF5" fill-opacity="0.8"/>
          <path d="M148.112 306.666L223.015 248.085L223.209 364.998L148.112 306.666Z" fill="#5CDFDF"/>
          <path d="M0.111856 243.666L75.0149 185.085L75.2086 301.998L0.111856 243.666Z" fill="#E43FCA"/>
          <path d="M75.1119 186.666L150.015 128.085L150.209 244.998L75.1119 186.666Z" fill="#E43FCA"/>
          <path d="M75.1119 303.666L150.015 245.085L150.209 361.998L75.1119 303.666Z" fill="#E43FCA"/>
          <path d="M225.041 130.561L150.006 188.972L150.077 72.0586L225.041 130.561Z" fill="#E43FCA"/>
          <path d="M225.041 246.561L150.006 304.972L150.077 188.059L225.041 246.561Z" fill="#E43FCA"/>
          <path d="M151.041 244.561L76.0056 302.972L76.0774 186.059L151.041 244.561Z" fill="#5056EA"/>
          <path d="M150.041 127.561L75.0056 185.972L75.0774 69.0586L150.041 127.561Z" fill="#5CDFDF" fill-opacity="0.8"/>
        </svg>

      </div>

      <section className="first-project">
        <div className="left-column">
          <div className="inner">
            <p className="subtitle">Data Analysis</p>
            <a href="https://reddy-s-k.medium.com/2020-nba-offseason-analysis-with-python-houston-rockets-pt-1-fd64e2c79bc5" className="first-title">Python Analysis: John Wall to the Houston Rockets </a>

            <p className="first-desc">An analysis of John Wall’s last full season and how he may be a fit for his new NBA team, the Houston Rockets.</p>

          </div>
        </div>

        <img className = "johnwall-img" src={JWall} alt="JohnWallData"></img>

      </section>

      <section className="skills">
        <div className="skills-container">
          <ul>
            <li>
              <br/>
              <p className="skill-title">Product Management and design</p>
              <p className="skill-desc">2 Years of experience with Product Managent and customer-centered design thinking</p>
              <br/>
            </li>

            <li>
              <br/>
              <p className="skill-title">Data Analysis</p>
              <p className="skill-desc">Professional experience working with python, GCP BigQuery and Excel in data analysis.</p>
            </li>

            <li>
              <br/>
              <p className="skill-title">Fullstack Development</p>
              <p className="skill-desc">1 Year of experience building projects with JS, React, Node.js, and MongoDB.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="portfolio">

        <div className="portfolio-container">
          <div className="portfolio-left">
            <div className="inner">
              <p className="subtitle">Product Design</p>
              <p className="feature-title">Digital Banking App Concept</p>
              <p className="feature-desc">Designed and developed a concept for a Digital Banking app, highlighting behavioral savings features such as "Pockets".</p>
            </div>
          </div>
          <img className = "pocketsImg" href="" src={PocketLanding}></img>
        </div>

        <div className = "portfolio-container">
          <div className="portfolio-left">
            <div className="inner">
              <p className="subtitle">Customer Centered Design Thinking</p>
              <a href="https://doblin.com/dist/images/uploads/Serving-Small-Businesses-in-a-Time-of-Crisis.pdf" className="feature-title">Serving Small Businesses in a Time of Crisis</a>
              <p className="feature-desc">Co-contributor on Deloitte's report on Small Business needs within financial services and how banks can better support Small Business customers during the pandemic.</p>
            </div>
          </div>
          <img className = "smb-img" src={SMB}></img>
        </div>

      </section>



    </div>
  );
}

export default App;
