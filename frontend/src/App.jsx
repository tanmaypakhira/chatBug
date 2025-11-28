import { Navigate, Route, Routes } from "react-router"
import ChatPage from "./pages/ChatPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import PageLoader from "./components/PageLoader"
import { Toaster } from "react-hot-toast"

function App() {

  const { checkAuth, isCheckingAuth, authUser }= useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if(isCheckingAuth) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(80,80,80,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,80,80,0.15)_1px,transparent_1px)] bg-[size:40px_40px] bg-black" />
      <div className="absolute top-0 -left-4 size-96 bg-[rgb(0,140,255)] opacity-30 blur-[110px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-[rgb(0,140,255)] opacity-30 blur-[110px]" />

      <Routes>
        <Route 
          path="/" 
          element={authUser ? <ChatPage /> : <Navigate to={"/login"} />}
        />

        <Route 
          path="/login" 
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />

        <Route 
          path="/signup" 
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
      </Routes> 

      <Toaster />
    </div>
  )
}

export default App
