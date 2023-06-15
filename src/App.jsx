import "./styles/global.css"
import { Card } from "./Card"
import { HandWaving } from "@phosphor-icons/react"

function App() {
  return (
    <main className="flex flex-col p-7 bg-blue-900 min-w-screen min-h-screen h-full">
      
      <header>
        <div className="flex gap-3">
          <h1 className="text-3xl pb-2 font-bold text-gray-200">Olá, bem vindo</h1>
          <HandWaving size={32} color="rgb(229 231 235)"/>
        </div>
        <hr />
      </header>
      <body className="flex pt-3">
       <Card />
       <div className="w-full"></div>
        {/* <div className="w-40">
          <img className="rounded-3xl border-solid border-4 border-green-700" src="https://github.com/giovanageile.png" alt="" />
        </div> */}

      </body>

    </main>

  )
}

export default App
