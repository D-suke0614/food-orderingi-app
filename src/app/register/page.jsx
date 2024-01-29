import Image from 'next/image'

export default function RegisterPage() {
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form action="" className="block max-w-xs mx-auto">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>
        <div className="my-4 text-gray-500 text-center">or login with provider</div>
        <button className='flex gap-4 justify-center items-center'>
          <Image src={'/google.png'} alt={'login with google'} width={32} height={32} />
          Login with Google
        </button>
      </form>
    </section>
  )
}
