import { ExpenseTrackerUser } from "./Users"

export type Expense = {
    name: string,
    total: string,
    owner: ExpenseTrackerUser,
    members: UserWithShare[]
}

export type UserWithShare = ExpenseTrackerUser & {share: string}