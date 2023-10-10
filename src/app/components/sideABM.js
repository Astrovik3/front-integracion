
export default function SideABM() {
  return (
    <div className="h-4/5 w-80 bg-gray-500">
      <p className="text-center p-3 text-white">Alta nuevo robot</p>

      <form action="" className="p-3 text-white">
        <label>texto campo 1</label>
        <br />
        <input type="text" className="w-11/12"/>
        <br />
        <br />

        <label>texto campo 2</label>
        <br />
        <input type="text" className="w-11/12" />
        <br />
        <br />

        <label>texto campo 3</label>
        <br />
        <input type="text" className="w-11/12" />
        <br />
        <br />

        <label>texto campo 4</label>
        <br />
        <input type="text" className="w-11/12" />
        <br />
        <br />

        <label>texto campo 5</label>
        <br />
        <input type="text" className="w-11/12" />
        <br />
        <button type="button" className="m-3 bg-white text-black">crear</button>

      </form>

    </div>
  )
}