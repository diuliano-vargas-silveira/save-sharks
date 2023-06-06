'use client'

import { BANNER_TEXTS } from '@/constants/banner-texts'
import { useEffect } from 'react'
import TextBanner from './text-banner'

const SCROLL_BANNER__ID = 'banner'

export default function Banner() {
  useEffect(() => {
    function pageScroll() {
      document.getElementById(SCROLL_BANNER__ID)?.scrollBy(0, 1)
      setTimeout(pageScroll, 10)
    }

    pageScroll()
  }, [])

  return (
    <footer className="w-[200%] h-12 scroll-smooth overflow-hidden absolute bottom-8 left-0">
      <ul
        id={SCROLL_BANNER__ID}
        className="flex w-[200%] h-12 justify-around scroll-smooth overflow-hidden left-0 gap-20 absolute animate"
      >
        {BANNER_TEXTS.map((text, index) => (
          <TextBanner key={`banner-1${index}`} text={text} />
        ))}

        {BANNER_TEXTS.map((text, index) => (
          <TextBanner key={`banner-2${index}`} text={text} />
        ))}
      </ul>
    </footer>
  )
}
