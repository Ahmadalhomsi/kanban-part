import Board from "@/components/kanban/Board";
import Image from "next/image";


export default function Home() {
  return (
    <section className="section h-full" aria-labelledby="page-title">
      <div className="mx-auto max-w-full">
        <h2 className="heading2 mb-4" id="page-title">
          Kanban
        </h2>
        <Board />
      </div>
    </section>
  )
}
