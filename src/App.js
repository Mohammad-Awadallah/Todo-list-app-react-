
import Form from "./components/Form";
import List from "./components/List";
import Card from "./UI/Card";
import './App.css'

function App() {
  return (
    <div className='main'>
    <div className='app'>
      <Card>
      <Form/>
      </Card>
      <Card>
      <List/>
      </Card>
      
    </div>
    </div>
  );
}

export default App;
