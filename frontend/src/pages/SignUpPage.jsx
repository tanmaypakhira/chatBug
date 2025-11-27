import React from 'react'
import { useAuthStore } from '../store/useAuthStore';

function SignUpPage() {

  const {authUser, isLoading, login} = useAuthStore();

  return (
    <div>
      signup
    </div>
  )
}

export default SignUpPage
