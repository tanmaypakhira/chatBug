import { Route, Routes } from "react-router"
import ChatPage from "./pages/ChatPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import { useAuthStore } from "./store/useAuthStore"

function App() {

  const {authUser, login, isLoggedIn,} = useAuthStore();

  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(80,80,80,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,80,80,0.15)_1px,transparent_1px)] bg-[size:14px_24px] bg-black" />
      <div className="absolute top-0 -left-4 size-96 bg-[rgb(0,255,157)] opacity-15 blur-[110px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-[rgb(0,140,255)] opacity-15 blur-[110px]" />

      <Routes>
        <Route path="/" element={<ChatPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
      </Routes> 
    </div>
  )
}

export default App
