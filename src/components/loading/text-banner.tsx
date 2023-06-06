interface TextBannerProps {
  text: string
}

export default function TextBanner({ text }: TextBannerProps) {
  return (
    <li className="uppercase font-mono text-5xl font-bold min-w-max text-blue-100">
      {text}
    </li>
  )
}
