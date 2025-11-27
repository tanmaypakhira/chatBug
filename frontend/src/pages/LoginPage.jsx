import { useAuthStore } from "../store/useAuthStore";

function LoginPage() {

  const {authUser, isLoading, login} = useAuthStore();

  return (
    <div>
      login
    </div>
  )
}

export default LoginPage
