'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [creatingUser, setCreatingUser] = useState(false)
  const [userCreated, setUserCreated] = useState(false)
  const [error, setError] = useState(false)

  async function handleFromSubmit(v) {
    setCreatingUser(true)
    setError(false)
    setUserCreated(false)
    v.preventDefault()
    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {'Content-Type': 'application/json'}
    })
    if (res.status === 200) {
      setUserCreated(true)
    } else {
      setError(true)
    }
    setCreatingUser(false)
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className='my-4 text-center'>
          User created.<br />
          Now you can {' '}
          <Link className='underline' href={'/login'}>Login &raquo;</Link>
        </div>
      )}
      {error && (
        <div className='my-4 text-center'>
        Error.<br />
        Please try again later
      </div>
      )}
      <form action="" className="block max-w-xs mx-auto" onSubmit={handleFromSubmit}>
        <input
          type="email"
          placeholder="email"
          disabled={creatingUser}
          value={email}
          onChange={v => setEmail(v.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          disabled={creatingUser}
          value={password}
          onChange={v => setPassword(v.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-gray-500 text-center">or login with provider</div>
        <button className='flex gap-4 justify-center items-center'>
          <Image src={'/google.png'} alt={'login with google'} width={32} height={32} />
          Login with Google
        </button>
      </form>
    </section>
  )
}
