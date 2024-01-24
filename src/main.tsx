import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Column } from './elements/Components.tsx'
import { Footer, Header } from './elements/Elements.tsx'
import { sachin } from './data/Users.ts'
import { NewExpense } from './pages/NewExpense.tsx'
import { ListMyExpenses } from './pages/MyExpenses.tsx'
import { IncludedLists } from './pages/IncludedLists.tsx'
import { BalancesList } from './pages/BalanceList.tsx'
import { CurrentUserDetails } from './pages/CurrentUserDetails.tsx'
import { AddNewFriend } from './pages/AddNewFriend.tsx'
import { useMediaQuery } from 'react-responsive'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "/create",
    element: (
      <NewExpense />
    ),
  },
  {
    path: "/my_lists",
    element: (
      <ListMyExpenses />
    ),
  },
  {
    path: "/me_included",
    element: (
      <IncludedLists />
    ),
  },
  {
    path: "/balance_list",
    element: (
      <BalancesList />
    ),
  },
  {
    path: "/me",
    element: (
      <CurrentUserDetails />
    ),
  },
  {
    path: "/add_friend",
    element: (
      <AddNewFriend />
    ),
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
)

function Content() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


  return (
    <>
      {isDesktopOrLaptop && 

      <>
      <>
          <Column style={{ height: "100vh", width: "22vw", position:"relative", justifyContent:"center", backgroundColor:"#242424" }}
          >
            <Header />
            <RouterProvider router={router} />

            <Footer name={sachin.name} />

            
          </Column>
        </>
      </>
      }

      {isTabletOrMobile &&

        <>
          <Column style={{ height: "100vh", width: "100vw", position:"relative" , justifyContent:"center", backgroundColor:"#242424"}}
          >
            <Header />
            <RouterProvider router={router} />

            <Footer name={sachin.name} />

          </Column>
        </>
      }
    </>
  )
}
