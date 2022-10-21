import ethlogo from '../assets/ethlogo.png'

const Artworks = () => {
    const BASE_URI = `https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg`

  return (
    <div className='bg-[#131825] py-10'>
        <div className='w-4/5 mx-auto'>
            <h4 className='text-gradient uppercase text-2xl'>Artworks</h4>

            <div className="flex flex-wrap justify-center items-center mt-4">
            {Array(8).fill().map((nft, i) => (
            <div
              key={i}
                className="relative shadow-xl shodow-black p-3 bg-white 
                rounded-lg w-64 h-64 object-contain bg-no-repeat bg-cover overflow-hidden 
                mr-2 mb-2 cursor-pointer transition-all duration-75 delay-100 hover:shadow-[bd255f]"
                style={{backgroundImage: `url(${BASE_URI}.webp)`}}>
                    <div 
                    className="absolute bottom-0 left-0 right-0 flex justify-between
                    items-center label-gradient p-2 w-full text-white test-sm">
                        
                        <p>Rulox NFT #{i + 1}</p>
                        <div className='flex justify-center items-center space-x-2'>
                        <img 
                        className="w-5 cursor-pointer" 
                        src={ethlogo} 
                        alt="logo" />3.3
                        </div>
                    </div>

                </div>
            ))}
            </div>
            <div className="flex flex-row justify-center items-center
              mx-auto mt-4">
                <button
className="shadow-xl shadow-black text-white
bg-[#e32970] hover:bg-[#bd255f] p-2
rounded-full cursor-pointer my-4"
>
Load more
</button>

            </div>
          
            
        </div>
    </div>
  )
}

export default Artworks