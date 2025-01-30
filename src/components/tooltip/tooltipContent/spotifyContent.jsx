import bioimg from '@/assets/myimg.webp'

const SpotifyProfile = () => {
  return (
     <div className="instagram-profile ">
    <div className="profile-header flex items-center gap-1">
      <img
        src={bioimg}
        alt="profile"
        className="w-10 h-10 rounded-full border-2 "
      />
      <div>      
       <span className='font-semibold'>@sujanthapa</span>
      </div>
    </div>
  </div>
  )
}
export default SpotifyProfile;
