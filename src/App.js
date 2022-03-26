import './styles/App.css';
import TrialMessage from './Components/TrialMessage/index.js';
import SignUpForm from "./Components/SignUpForm/index.js"

function App() {
  return (
    <div className="App">
      <div className="app-elements-cont">
        <div className="text" >
          <h1 className="head-text" >Learn to code by watching others</h1>
          <p className="body-text" >
            See how experienced developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how
            developers think is invaluable.
          </p>
        </div>
        <div className="form-cont">
          <TrialMessage
            maxDays="7"
            monthlyCost="20"
          />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default App;
