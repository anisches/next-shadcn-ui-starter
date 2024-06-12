'use client'
import { useTheme } from "next-themes"
import { Switch } from "./switch"
import { useEffect, useState } from "react"


const ThemeTogg = () => {


  const [bool, setBool] = useState<boolean>(false)

  const { setTheme } = useTheme()
  useEffect(() => {
    const whichTheme = bool ? 'dark' : 'light'
    setTheme(whichTheme)
  }, [bool])

  return (
    <section>
      <Switch checked={bool} onCheckedChange={() => { setBool(!bool) }} />
    </section>
  )
}

export default ThemeTogg
