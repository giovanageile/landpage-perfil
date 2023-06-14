import "./styles/global.css"

function App() {
  return (
    <main className="flex flex-col p-7 bg-blue-900 min-w-screen min-h-screen h-full">
      
      <header>
        <h1 className="text-3xl font-bold text-gray-200">Olá, bem vindo</h1>
      </header>
      <body className="flex">
        <div className="w-40">
          <img className="rounded-3xl border-solid border-4 border-green-700" src="https://github.com/giovanageile.png" alt="" />
        </div>

      </body>

    </main>

  )
}

export default App
