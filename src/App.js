import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState, useEffect} from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import "./App.css";
import db from "./firebase";
import {auth, provider} from "./firebase";

function App() {

  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));  //parse is used to convert string to object

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      console.log("Hi");
      setRooms(snapshot.docs.map((doc) => {
        return {id: doc.id, name: doc.data().Name }
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null)
    })

  }

  useEffect(() => {
    getChannels();
  }, [])

  console.log(rooms);

  return (
    <div className="App">
      <Router>
      { !user ? <Login setUser = {setUser}/> : 
        <Container>
          <Header signOut={signOut} user={user}/>
          <Main>
          <Sidebar rooms={rooms}/>
            <Switch>
              <Route path="/room/:channelId">
                <Chat user={user}/>
              </Route>
              <Route path = "/">
                Select or Create a Channel
              </Route>
            </Switch>
          </Main>
        </Container>
      }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh; /*vh stands for vertical height*/
  display : grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
