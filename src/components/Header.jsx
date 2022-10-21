import ethlogo from '../assets/ethlogo.png'

const Header = () => {
  return (
    <nav className="w-4/5 flex justify-between md:justify-center
    items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center
      md:flex-[0.5] flex-initial">
        <img className='w-8 cursor-pointer' src={ethlogo} alt="Logo eth" />
        <span className=' text-white text-2xl ml-2'> Rulox NFT </span>
      </div>
      <ul className='md:flex md:flex-[0.5] text-white hidden list-none flex-row justify-between items-center flex-initial'>
        <li className='mx-4 cursor-pointer'>Explore</li>
        <li className='mx-4 cursor-pointer'>Features</li>
        <li className='mx-4 cursor-pointer'>Community</li>
      </ul>
      <button className='shadow-xl shadow-black text-white bg-[#e32978]
       hover:bg-[#bd255f] md:text-xl p-2 rounded-full cursor-pointer'>Connect Wallet</button>
    </nav>
      
  )
}

export default Header