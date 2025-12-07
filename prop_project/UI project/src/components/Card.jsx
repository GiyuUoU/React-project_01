import React from 'react'

const Card = () => {
  return (
    <div id="card1">
          <div id="top">
           <div id="logo">
            <img src="https://imgs.search.brave.com/v93cWjhaSlTSUmaHnibH54EXUPveHF_BrSizq3ou_WY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGVtaWEub3JnL2Nv/bnRlbmlkby9zdWJp/ZGFzLzIwMjIvMTEv/dGlwb2dyYWZpYS15/LXBhbGV0YS1kZS1j/b2xvci0xMDI0eDU3/Ni5wbmc" alt="Amazon Logo" />
           </div>
           <button id='save-button'>Save <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg></button>
          </div>
          <div id="mid">
            <div id="company">
             <h3>Amazon</h3>
             <div id="days">5 days ago</div>
            </div>
           <h2>Senior UI/UX Designer</h2>
           <div id="work-type">
            <div id="type">Part - Time</div>
            <div id="level">Senior Level</div>
           </div>
          </div>
          <div id="line"></div>
          <div id="bottom">
            <div id="salary-loc">
             <div id="salary">$120/hr</div>
             <div id="location">Mumbai, India</div>
            </div>
            <button id='apply-now'>Apply now</button>
          </div>
    </div>
  )
}

export default Card