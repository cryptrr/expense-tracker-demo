import { useEffect } from "react";
import { useExpenseStore } from "../data/Stores";
import { Column, HeaderH2, Row, SpacerColumn } from "../elements/Components";


export function ListMyExpenses() {
    const myExpenses = useExpenseStore((state) => state.expenses.filter(item => item.owner.name === "Sachin"))

    useEffect(() => {
        console.log(JSON.stringify(myExpenses))
    }, [myExpenses])

    
    return (
        <Column style={{ height: "100%", width: "100%", justifyContent: "flex-start", alignItems: "flex-start" }}>
            <HeaderH2 style={{ padding: "1em", width: "100%", justifyContent: "flex-start" }}>My Bills</HeaderH2>
            <Column style={{ padding: "1em", width: "100%" }} >
                {
                    myExpenses.length === 0 ? (
                        <>
                            <Column style={{ height: "70vh", width: "100vw", alignItems: "center" }}>
                                <Row>List is empty</Row>
                            </Column>
                        </>
                    ) : (
                        myExpenses.map((expense) => (
                            <Column key={expense.total} style={{ backgroundColor: "black", borderRadius: "15px", padding: "1em", width: "100%", marginBottom:"1em" }}>
                                <Row style={{ justifyContent: "space-between", width: "100%" }}>
                                    <Column style={{alignItems:"flex-start"}}>
                                        <Row>{expense.name}</Row>
                                        <Row>{expense.members.map(item => item.name).join(", ")}</Row>
                                    </Column>
                                    <Row>
                                        <HeaderH2>{expense.total}</HeaderH2>
                                    </Row>
                                </Row>
                            </Column>
                            
                        ))
                    )
                }
            </Column>
        </Column>
    )
}