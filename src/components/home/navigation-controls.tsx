import NavigationButton from './navigation-button'

export default function NavigationControls() {
  return (
    <section className="w-full flex justify-between absolute left-0 my-auto">
      <NavigationButton isLeft />
      <NavigationButton />
    </section>
  )
}
