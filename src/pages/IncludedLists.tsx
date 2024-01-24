import { useEffect } from "react"
import { useExpenseStore } from "../data/Stores"
import { Column, HeaderH2, Row } from "../elements/Components"

export function IncludedLists(){
    const myExpenses = useExpenseStore((state) => state.expenses.filter(item => item.members.map(member => member.name).includes("Sachin")))

    useEffect(() => {
        console.log(JSON.stringify(myExpenses))
    }, [myExpenses])

    return(
        <Column  style={{height: "100%",width:"100%",justifyContent:"flex-start", alignItems: "flex-start"}}>
            <HeaderH2 style={{padding:"1em", width:"100%", justifyContent:"flex-start"}}>Bills I am Included In</HeaderH2>
            <Column style={{padding:"1em", width: "100%"}}>
            {
                myExpenses.length === 0 ?  (
                <>
                <Column style={{height:"70vh",width:"100%", alignItems:"center"}}>
                <Row>List is empty</Row>
                </Column>
                </>
                ) : (
                    myExpenses.map((expense) => (
                        <Column key = {expense.total} style={{backgroundColor: "black", borderRadius:"15px",padding: "1em", marginBottom:"1em"}}>
                            <Row>Name: {expense.name}</Row>
                            <Row>Created By: {expense.owner.name}</Row>
                            <Row>Total: {expense.total}</Row>
                            <Row>With {expense.members.map(item => item.name).join(", ")}</Row>
                        </Column>
                    ))
                )
            }
            </Column>
        </Column>
    )
}