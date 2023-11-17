import SideBar from './components/sidebar/SideBar'
import NavBar from './components/navbar/Navbar'
function App() {
 

  return (
    <>
     <div className="navbar">
        <NavBar/>
     </div>
       <div>
        <div className="sidebar">
          <SideBar/>
        </div>
        <div className="content">
          write your content here
        </div>
      </div> 
    </>
  )
}

export default App
