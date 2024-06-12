import ThemeTogg from "./ui/themeToggle"



const Prologue = () => {
  return (
    <section className="flex items-center justify-center relative">
      <h3 className=" text-[4vw] translate-x-[6vw]">NextJS</h3>

      <div
        className="px-[9vw]
      backdrop-blur-[.3vw]
      z-10
      py-[5vw]
      rounded-[2vw]
      shadow-2xl
      dark:bg-opacity-60
      bg-zinc-700 dark:bg-zinc-200 bg-opacity-50">
        <ThemeTogg />

      </div>

      <h3 className=" text-[4vw] translate-x-[-6vw]">shadcn/ui</h3>
    </section>
  )
}

export default Prologue
