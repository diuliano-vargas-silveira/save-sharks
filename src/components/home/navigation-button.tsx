interface NavigationButtonProps {
  isLeft?: boolean
}

export default function NavigationButton({
  isLeft = false,
}: NavigationButtonProps) {
  const positionLeft = isLeft ? 'right-[-57px]' : 'left-[-57px]'

  return (
    <button className="h-10 group w-32 relative cursor-pointer ">
      <div className="transition delay-200 h-1 w-full bg-blue-100 group-hover:scale-x-125 group-hover:scale-y-125 transform ease-linear" />
      <div
        className={`bg-transparent border-blue-100 border-4 rounded-full absolute z-10 h-[120px] w-[120px] ${positionLeft} bottom-[-41px] hidden
         group-hover:flex group-hover:bg-transparent`}
      />
    </button>
  )
}
