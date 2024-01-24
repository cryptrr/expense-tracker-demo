import { useState } from "react"
import { ExpenseTrackerUser, ExpenseTrackerUsers } from "../data/Users"
import { Button, Column, HeaderH2, Row, SpacerColumn, SpacerRow, StyledInput } from "../elements/Components"
import { useExpenseStore, useFriendsStore } from "../data/Stores"
import { Expense } from "../data/Expenses"
import { useNavigate } from "react-router-dom"

export const NewExpense = () => {

    const addExpenseItem = useExpenseStore((state) => state.addExpenseItem)

    const [selectedUsers, setSelectedUsers] = useState<ExpenseTrackerUser[]>([])


    const [userShares, setUserShares] = useState<{
        [key: string]: string;
    }>({})

    const [expenseName, setExpenseName] = useState("")

    const [totalExpense, setTotalExpense] = useState("")

    const navigate = useNavigate()

    const friends = useFriendsStore(state => state.friends)




    function onUserClicked(user: ExpenseTrackerUser) {
        //console.log(selectedUsers)
        if (!selectedUsers.map((item) => item.name).includes(user.name)) {

            setSelectedUsers([...selectedUsers, user])



        }
        else {
            const newList = selectedUsers.filter((item) => user.userId !== item.userId)

            setSelectedUsers(newList)

            //Deleting from shares
            let newUserShares = userShares

            delete newUserShares[user.userId]


            setUserShares(newUserShares)



        }
    }

    const [myContribution, setMyContribution] = useState(100)

    function updateMyContribution(){

       

        const remainingContribution = Object.values(userShares).map(item => Number(item)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)

        
       
        setMyContribution(100 - remainingContribution)

        if((100 - remainingContribution) < 0) {
            alert("Math Doesn't Check Out, Bro")
            return
        }
        

    }

    function onShareChange(event: any, user: ExpenseTrackerUser, newShare: string) {

        if (Number(newShare) > 100) {
            event.preventDefault()
            alert("Cannot be more than 100")
            return
        }

        let newUserShares = userShares

        newUserShares[user.userId] = newShare

        setUserShares(newUserShares)
        updateMyContribution()

    }

    function createExpense() {
        console.log(userShares)
        if (expenseName.length === 0 || totalExpense.length === 0) {
            alert("Fill out the forms first.")
            return
        }

        if (myContribution < 0) {
            alert("Math Doesn't Check Out, Bro")
            return
        }
        // if (Object.values(userShares).map((item) => Number(item)).reduce((accumulator, currentValue) => accumulator + currentValue, 0) !== 100) {
        //     console.log("Math doesn't check out")
        //     alert("Math doesn't check out")
        //     return
        // }

        // const expenses = selectedUsers.map((user) => {
        //     return {...user, share: ""}
        // })

        const expense: Expense = {
            name: expenseName,
            total: totalExpense,
            owner: ExpenseTrackerUsers[2],
            members: selectedUsers.map((user) => {
                return { ...user, share: userShares[user.userId] }
            })
        }

        console.dir(expense)

        addExpenseItem(expense)


        navigate("/")

        alert("New Bill Added")

    }


    return (
        <Column style={{ height: "100vh", width: "100%", position:"relative" }}>
            <Column style={{ padding: "1em", width: "100%", alignItems: "flex-start" }}>
                <HeaderH2>Expense Name</HeaderH2>
                <SpacerColumn />
                <StyledInput onChange={(e) => setExpenseName(e.target.value)} style={{ width: "100%" }} />

                <HeaderH2>Total</HeaderH2>
                <SpacerColumn />

                <StyledInput type="number" onChange={(e) => setTotalExpense(e.target.value)} style={{ width: "100%" }} />

                <HeaderH2>Include users</HeaderH2>

                <Column style={{ width: "100%" }}>
                    <Row style={{ justifyContent: "space-between", borderRadius: "15px", height: "4em", width: "100%", color:"#8dbc8a"}} >
                        <HeaderH2 style={{color:"#8dbc8a"}} >
                            Your Contribution
                        </HeaderH2>
                        <HeaderH2 style={{color:"#8dbc8a"}} >
                            {`${myContribution}%`}
                        </HeaderH2>
                    </Row>
                </Column>

                

                <SpacerColumn />

                {
                    friends.map((user) => (
                        <Column key={user.userId} style={{ width: "100%" }}>
                            <Row onClick={() => { onUserClicked(user) }} style={{ justifyContent: "space-between", padding: "0 1em 0 1em", borderRadius: "15px", height: "5.5em", width: "100%", backgroundColor: selectedUsers.map((item) => item.name).includes(user.name) ? "#64a460" : "black" }} >
                                <HeaderH2  >
                                    {user.name}

                                </HeaderH2>
                                {
                                    selectedUsers.includes(user) ? (
                                        <Row>
                                            <StyledInput type="number" onClick={(e) => e.stopPropagation()} onChange={(event) => onShareChange(event, user, event.target.value)} style={{ width: "5em" }} />
                                            <SpacerRow />
                                            <div>%</div>
                                        </Row>
                                    ) : (<></>)

                                }
                            </Row>

                            <SpacerColumn />

                        </Column>


                    ))
                }

<Column onClick={() => { createExpense() }} style={{ padding: "1em", right: "1em",width:"100%", bottom: "6em", borderRadius: "15px", backgroundColor: "#64a460" }}>
                    Add
                </Column>



            </Column>
        </Column>
    )
}