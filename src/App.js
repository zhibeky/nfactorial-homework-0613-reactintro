import './App.css';
import profileImage from "./icons/second.JPG";
import {format} from "date-fns";  


function App() {
  return (
    <div className='body'>
      <div className='header'>
        <div className='input-wrapper'>
          <img src={profileImage} className="profile-image" alt='Profile' />
          <input type="text" placeholder="" />
        </div>
        <div className='date-time'>
          {format(new Date(), "yyyy-MM-dd HH:mm z")}
        </div>
      </div>
      <div className='main'>
        <div className='firstImg image'>
          <text>Hard work is </text>
        </div>
        <div className='secondImg image'>
          <text>worthless </text>
        </div>
        <div className='thirdImg image'>
          <text>for those that </text>
        </div>
        <div className='fourthImg image'>
          <text>do not believe </text>
        </div>
        <div className='fifthImg image'>
          <text> in themselves</text>
        </div>
      </div>
    </div>
  );
}

export default App;
