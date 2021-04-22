import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState, useEffect} from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import "./App.css";
import db from "./firebase";

function App() {

  const [rooms, setRooms] = useState([]);

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return {id: doc.id, name: doc.data().Name }
      }))
    })
  }

  useEffect(() => {
    getChannels();
  }, [])

  console.log(rooms);

  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
          <Sidebar rooms={rooms}/>
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh; /*vh stands for vertical height*/
  display : grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
