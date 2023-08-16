export default function Home() {
  return (
    <main>
      <h1 className="text-6xl font-bold text-center">Tarefas de casa</h1>
      <div className="flex flex-row">
        {/* Div de pessoas */}
        <div className="w-1/3 p-4 bg-gray-200"></div>
        {/* Div de tarefas */}
        <div className="w-1/3 p-4 bg-gray-300"></div>
        {/* Div de histórico */}
        <div className="w-1/3 p-4 bg-gray-400"></div>
      </div>
    </main>
  )
}
