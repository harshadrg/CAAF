import { Outlet } from "react-router"
import Header from "./components/headerLayout/Header"
import Footer from "./components/footerLayout/Footer"

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <Header />
        <main className="flex-1 w-full" id="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
