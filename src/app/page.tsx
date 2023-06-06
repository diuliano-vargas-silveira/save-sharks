export default function Home() {
  return (
    <section className="w-full h-[100vh] bg-[url('../assets/white-shark.jpg')] bg-cover bg-center flex items-center justify-between relative overflow-hidden">
      <section className="w-full flex justify-between absolute left-0 my-auto">
        <button className="h-10 group w-32">
          <div className="transition delay-200 h-1 w-full bg-blue-100 group-hover:scale-x-125 transform ease-linear"></div>
        </button>
        <button className="h-10 group w-32">
          <div className="transition delay-200 h-1 w-full bg-blue-100 group-hover:scale-x-125 transform ease-linear"></div>
        </button>
      </section>
    </section>
  )
}
