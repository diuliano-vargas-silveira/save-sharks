'use client'

import { useEffect } from 'react'

import NavigationControls from '@/components/home/navigation-controls'

export default function Home() {
  useEffect(() => {
    let cursor = document.getElementById('cursor')
    document.addEventListener('mousemove', moveCursor)

    function moveCursor(e: MouseEvent) {
      const widthDiscount = window.innerWidth * 0.08
      const heigthDiscount = window.innerHeight * 0.15
      const x = e.clientX - widthDiscount
      const y = e.clientY - heigthDiscount

      if (cursor) {
        cursor.style.left = `${x}px`
        cursor.style.top = `${y}px`
      }

      console.log(x, y)
    }
  }, [])

  return (
    <section className="w-full h-[100vh] bg-[url('../assets/white-shark.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden animate-bg-move">
      <NavigationControls />
      <h2 className="stroke-text text-transparent text-[12rem] leading-none uppercase text-center transition delay-200 hover:text-blue-100 max-h-min max-w-min ease-out cursor-pointer relative z-[2]">
        WHITE SHARK
      </h2>

      <div
        id="cursor"
        className="bg-blue-100 h-[120px] w-[120px] fixed z-1 left-0 top-0 transform translate-y-1/2 translate-x-1/2 pointer-events-none transition delay-500 rounded-full"
      />
    </section>
  )
}
