import NavBar from "../components/navBar"
import SideABM from "../components/sideABM"

export default function Home() {
  return (
    <main className="flex h-screen min-h-screen flex-col justify-between">
      <NavBar />

      <div className="h-full">
        <SideABM />

      </div>
    </main>
  )
}
