import Card from "./Card";




function Novidades() {
  return (
    <div className="flex justify-center h-section">
            <div className="flex flex-col w-4/5">

            <div className="flex justify-center">
                <h1 className="text-zinc-700 font-semibold text-3xl">Novidades</h1>
            </div>

            <div className="flex justify-around pt-10">
            <Card/>
            <Card/>
            <Card/>
            </div>
         </div>

    </div>
  );
}

export default Novidades;
