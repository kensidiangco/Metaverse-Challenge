import Image from 'next/image'
import {useMoralis} from 'react-moralis'

function login() {
    const { authenticate } = useMoralis()

    return (
        <div className="bg-black relaitve">
            <h1>I am a login page</h1>
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
                <Image
                    className="object-cover rounded-full"
                    src="/profilepic.jpg" 
                    height={200} 
                    width={200}
                />

                <button 
                    className="bg-blue-600 rounded-lg p-5 font-bold animate-pulse"
                    onClick={authenticate}    
                >Login to Metaverse</button>
            </div>

            <div className="w-full h-screen">
                <Image
                    src="https://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default login
