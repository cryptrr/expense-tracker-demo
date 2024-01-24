import { useEffect, useState } from 'react'
import './App.css'
import { Button, Column, HeaderH1, HeaderH2, Row, SpacerColumn } from './elements/Components'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './elements/Elements';
import { useExpenseStore, useFriendsStore } from './data/Stores';




function App() {
  

  const navigate = useNavigate()

  const clearFriendsList = useFriendsStore((state) => state.clear)

  const clearExpensesList = useExpenseStore((state) => state.removeAll)


  return (

    <Column style={{ height: "100vh", width: "100%" , justifyContent:"center", padding:"1em", position:"relative"}}
    >

      <Button style={{ backgroundColor: "#64a460", width:"100%" }} onClick={() => {}}>
        <Link style={{color:"black"}} to="/create">Add An Expense</Link>
      </Button>
      <SpacerColumn/>
      <Button style={{ backgroundColor: "#64a460", width:"100%" }} onClick={() => {}}>
        <Link style={{color:"black"}} to="/my_lists">My Bills</Link>
      </Button>
      <SpacerColumn/>

      <Button style={{ backgroundColor: "#64a460", width:"100%" }} onClick={() => {}}>
        <Link style={{color:"black"}} to="/me_included">Bills I'm included in</Link>
      </Button>
      <SpacerColumn/>


      <Button style={{ backgroundColor: "#64a460", width:"100%" }} onClick={() => {}}>
        <Link style={{color:"black"}} to="/balance_list">Balance List</Link>
      </Button>

      <SpacerColumn/>

      

      <Button style={{ backgroundColor: "#64a460",position: "absolute",left: "1em", bottom: "1em" }} onClick={() => {
        
        const okay = confirm("Are you sure you want to delete data?")
        
        if(okay){
          clearExpensesList()
          clearFriendsList()
        }
      }}>
       <p>Clear All Data</p>
      </Button>

      <SpacerColumn height='3em'/>

      <Button onClick={() => { navigate("/add_friend") }} style={{ position: "absolute", right: "1em", bottom: "1em", borderRadius: "15px", backgroundColor: "#64a460" }}>
            Add Friend
      </Button>


      
    </Column>


  )
}

export default App
