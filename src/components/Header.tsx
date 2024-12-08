import Link from "next/link"

export default function Header() {
  return (
    <header className='text-white font-bold bg-green-900 text-2xl p-2 mb-3 rounded-b-lg shadow-gray-700 shadow-lg flex'>
      <div className='flex flex-grow'>
        <Link href='/'>GPT Chat</Link>
        <Link href='/about' className='ml-5 font-light'>
          About
        </Link>
      </div>
      <div></div>
    </header>
  )
}
