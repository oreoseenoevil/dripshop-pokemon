import Sidebar from './components/sidebar'
import Footer from './components/footer'
import Main from './components/main'

function App() {
  return (
    <div className="w-full flex h-full">
      <Sidebar />
      <div className="w-full flex flex-col h-screen">
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App

