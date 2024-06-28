import { Link } from 'react-router-dom'
import myimg from "../assets/myimg.jpeg";

function PageNotFound() {
  return (
    <div className='h-full flex justify-center items-center h-screen flex-col gap-4'>
      <img src={myimg} className='h-12 w-12 rounded-full' alt="" />
      <div className='flex items-center flex-col gap-4'>
        <h1 className='text-xl'>Page not Found!</h1>
        <Link to="/" className='border border-black pl-2 pr-2  pt-1 pb-1 rounded-full text-sm '>Go to Home</Link>
      </div>
    </div>
  )
}

export default PageNotFound
