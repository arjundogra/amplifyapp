import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify"
import config from './aws-exports'
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'

Amplify.configure(config)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Logged in using AWS AUTH</h1>
        <AmplifySignOut/>
      </header>
    </div>
  );
}

export default withAuthenticator(App) ;
