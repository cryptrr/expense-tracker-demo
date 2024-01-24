import { create } from 'zustand'
import { Expense } from './Expenses'
import { ExpenseTrackerUser, ExpenseTrackerUsers, sachin } from './Users'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ExpensesState {
  expenses: Expense[]
  addExpenseItem: (item: Expense) => void
  removeAll: () => void
}




// export const useExpenseStore = create<ExpensesState>(
//   (set) => ({
//   expenses: [],
//   addExpenseItem: (item: Expense) => set((state: ExpensesState) => ({ expenses: [...state.expenses, item]})),
//   removeAll: () => set({ expenses: [] }),
// }))


interface CurrentUserState {
  currentUser: ExpenseTrackerUser
  setCurrentUser: (item: ExpenseTrackerUser) => void
}


// export const useCurrentUserStore = create<CurrentUserState>((set) => ({
//   currentUser: sachin,
//   setCurrentUser: (item: ExpenseTrackerUser) => set((state: CurrentUserState) => ({ currentUser: item })),
// }))

export const useCurrentUserStore = create<CurrentUserState>(
  //@ts-ignore
  persist(
    (set) => ({
      currentUser: sachin,
      setCurrentUser: (item: ExpenseTrackerUser) => set((state: CurrentUserState) => ({ currentUser: item })),
    }),
    {
      name: 'current-user-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)

interface FriendsStoreState {
  friends: ExpenseTrackerUser[]
  addFriend: (item: ExpenseTrackerUser) => void
  clear: () => void
}


// export const useFriendsStore = create<FriendsStoreState>(
//   (set) => ({
//     friends: [...ExpenseTrackerUsers.filter(item => item.name !== "Sachin")],
//     addFriend: (item: ExpenseTrackerUser) => set((state: FriendsStoreState) => ({ friends: [...state.friends, item] })),
//   })
// )

export const useFriendsStore = create<FriendsStoreState>(
  //@ts-ignore
  persist(
    (set) => ({
      friends: [...ExpenseTrackerUsers.filter(item => item.name !== "Sachin")],
      addFriend: (item: ExpenseTrackerUser) => set((state: FriendsStoreState) => ({ friends: [...state.friends, item] })),
      clear: () => set({ friends: [] }),
    }),
    {
      name: 'friends-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)

export const useExpenseStore = create<ExpensesState>(
  //@ts-ignore
  persist(
    (set) => ({
      expenses: [],
      addExpenseItem: (item: Expense) => set((state: ExpensesState) => ({ expenses: [...state.expenses, item] })),
      removeAll: () => set({ expenses: [] }),
    }),
    {
      name: 'expenses-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)