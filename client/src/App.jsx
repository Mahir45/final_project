import { Navbar, Welcome, Transactions, Footer, Services} from "./components"
import './App.css'

function App  () {
 

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome"> 
      <Navbar/>
      <Welcome/>
      </div>
      <Transactions/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
