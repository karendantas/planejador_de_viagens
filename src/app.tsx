import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  
  return (
    <div className="w-full h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">

      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src = "./public/logo.svg"/>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>
        <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center gap-3 shadow-shape">
          <div className="flex flex-1 items-center gap-2">
            <MapPin className="size-5 text-zinc-400 flex-1"/>
            <input className="bg-transparent text-lg placeholder-zinc-400 outline-none"  placeholder="Para onde voce vai?" />
          </div> 

          <div className="flex items-center gap-2 ">
            <Calendar className="size-5 text-zinc-400"/>
            <input placeholder="Quando?"  className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
          </div> 
          
          <div className="w-px h-6 bg-zinc-800" />
          <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              Confirmar
              <ArrowRight className="size-5"/>
          </button>
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda 
          com nossos <a href="text-zinc-300 underline"> termos de uso </a> e <a href="text-zinc-300 underline"> políticas de privacidade. </a> 
        </p>
      </div>
    </div>
  )
}


