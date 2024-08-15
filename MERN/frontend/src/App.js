import React from "react";
import {Routes, Route} from 'react-router-dom'
import Records from "./components/records.js"
import Create from "./components/create.js"
import Edit from "./components/edit.js"
import SessionSet from "./components/session_set.js"
import SessionGet from "./components/session_get.js"
import SessionDelete from "./components/session_delete.js"

const App = () =>{
  return(
    <div>
      <Routes>
        <Route path="/records" element={<Records />} />
        <Route path="/" element={<Create />} />
        <Route path="/edit/:email" element={<Edit />} />
        <Route path="/session_set" element={<SessionSet/>} />
        <Route path="/session_get" element={<SessionGet/>} />
        <Route path="/session_delete" element={<SessionDelete/>} />

      </Routes>
    </div>
  )
}
export default App;
