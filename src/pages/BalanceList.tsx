import { useExpenseStore } from "../data/Stores"
import { Column, HeaderH2, Row, SpacerColumn } from "../elements/Components"

export function BalancesList() {
    const myExpenses = useExpenseStore((state) => state.expenses)


    //Could use useMemo if this is an expensive operation
    function calculateBalances() {
        let userBalances: {
            [key: string]: number;
        } = {}
        myExpenses.forEach(expense => {
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








    return (
        <Column style={{ height: "100%", width: "100%", justifyContent: "flex-start", alignItems: "flex-start" }}>
            <HeaderH2 style={{ padding: "1em", width: "100%", justifyContent: "flex-start" }}>Balances List</HeaderH2>
            <Column style={{padding:"1em", width:"100%"}}>
                {
                    myExpenses.length === 0 ? (
                        <>
                            <Column style={{ height: "70vh", width: "100vw", alignItems: "center" }}>
                                <Row>List is empty</Row>
                            </Column>
                        </>
                    ) : (
                        Object.entries(calculateBalances()).map((key) => (
                            <Column key={key[0]} style={{ backgroundColor: "black", width:"100%", borderRadius: "15px", padding: "1em", marginBottom:"1em" }}>
                                <Row style={{width:"100%",justifyContent:"space-between"}}>

                                    <Row>{key[0]}</Row>
                                    <Row>Ows: {key[1].toFixed(2)}</Row>
                                </Row>  
                            </Column>
                        ))
                    )
                }
            </Column>
        </Column>
    )
}