import Image from 'next/image'

import iconSharkLoading from '@/assets'

export default function Header() {
  return (
    <header className="flex px-[6%] h-20 absolute top-0 left-0 items-center z-10">
      <h1 className="font-white-500 font-mono text-2xl font-bold text-white-500">
        SAVE_SHARKS
      </h1>
      <Image src={iconSharkLoading} alt="shark" width={60} />
    </header>
  )
}
