import { useCurrentUserStore, useExpenseStore } from "../data/Stores";
import { ExpenseTrackerUser } from "../data/Users";
import { Column, Row, SpacerColumn } from "../elements/Components";

export function CurrentUserDetails(){

    const currentUser = useCurrentUserStore((state) => state.currentUser)

    const expenses = useExpenseStore((state) => state.expenses)

    function calculateYouOwe(){
        let userBalances: {
            [key: string]: number;
        } = {}
        expenses.forEach(expense => {
            expense.members.forEach(member => {
                if (!userBalances[member.name]) {
                    userBalances[member.name] = 0
                    userBalances[member.name] = userBalances[member.name] + Number(expense.total) * (Number(member.share) /100)
                } else {
                    userBalances[member.name] = userBalances[member.name] + Number(expense.total) * (Number(member.share) /100)
                }
            })
        })

        console.log(userBalances)

        return userBalances
    }

    function calculateYoureOwed(){
        let data = {
            total: 0
        }
        expenses.forEach(expense => {
            if(expense.owner.userId === currentUser.userId){
                expense.members.forEach(member => {
                    data["total"] = data["total"] + Number(expense.total) * (Number(member.share) /100)
                })
            }
        })

        console.log(data["total"])

        return data["total"]
    }

    return(
        <Column style={{width: "100%", height: "100vh", justifyContent:"center"}}>
            <Row>Name : {currentUser.name}</Row>
            <Row>UserId : {currentUser.userId}</Row>
            <Row>Phone : {currentUser.mobile}</Row>
            <Row>Email : {currentUser.email}</Row>

            <SpacerColumn/>

            <Row>
                {`You Owe: ${calculateYouOwe()[currentUser.name] ?? 0}`}
            </Row>

            <Row>
                {`You're Owed: ${calculateYoureOwed() ?? 0}`}
            </Row>

        </Column>
    )
}