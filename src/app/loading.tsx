import Image from 'next/image'

import Banner from '@/components/loading/banner'
import iconSharkLoading from '@/assets'

export default function Loading() {
  return (
    <section className="h-[100vh] w-full overflow-hidden bg-blue-900 flex flex-col items-center justify-center relative">
      <Image
        src={iconSharkLoading}
        alt="Great white shark"
        sizes="(max-width: 768px) 70%"
      />
      <Banner />
    </section>
  )
}
