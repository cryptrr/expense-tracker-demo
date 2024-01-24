import { useState } from "react"
import { Column, HeaderH1, HeaderH2, SpacerColumn, StyledInput } from "../elements/Components"
import { ExpenseTrackerUser } from "../data/Users"
import { useFriendsStore } from "../data/Stores"
import { useNavigate } from "react-router-dom"

export function AddNewFriend(){


    const addFriend = useFriendsStore(state => state.addFriend)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const navigate = useNavigate()

    function getRandomDigitNumber() {
        const baseNumber = Math.floor(Math.random() * 9000000000);
        const randomNumber = baseNumber + 1000000000;
        return randomNumber;
      }

    function createFriend(){
        const friend : ExpenseTrackerUser = {
            name,
            email,
            mobile: phone,
            userId: getRandomDigitNumber().toString()
        }


        addFriend(friend)

        alert("Friend Added")

        navigate("/")

    }


    return(
        <Column style={{ height: "85vh", width: "100%" }}>
                        <HeaderH1>Add Friend</HeaderH1>

            <Column style={{ padding: "1em", width: "100%", alignItems: "flex-start" }}>

                <HeaderH2>Name</HeaderH2>
                <SpacerColumn />
                <StyledInput onChange={(e) => setName(e.target.value)} style={{ width: "100%" }} />

                <HeaderH2>Email</HeaderH2>
                <SpacerColumn />

                <StyledInput onChange={(e) => setEmail(e.target.value)} style={{ width: "100%" }} />

                <HeaderH2>Phone</HeaderH2>
                <SpacerColumn />

                <StyledInput type="number" onChange={(e) => setPhone(e.target.value)} style={{ width: "100%" }} />

                <SpacerColumn height="3em"/>

                <Column onClick={() => { createFriend() }} style={{ position: "sticky", padding: "1em",width:"100%", right: "1em", bottom: "6em", borderRadius: "15px", backgroundColor: "#64a460" }}>
                    Add
                </Column>

                <SpacerColumn />

            </Column>
        </Column>
    )
}