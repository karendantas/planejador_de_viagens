import { ArrowRight, AtSign, Calendar, MapPin, Plus, Settings2, UserRoundPlus, X } from "lucide-react";
import { FormEvent, useState } from "react";

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([
    'karendantas@gmail.com',
    'isolinda@gmail.com'
  ])
  
  function openGuestInput (){
    setIsGuestInputOpen(true)
  }

  function closeGuestsInput (){
    setIsGuestInputOpen(false)
  }
  
  function openGuestsModal (){
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal(){
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()
    
    if (!email){
      return 
    }

    if (emailsToInvite.includes(email)){
      return
    }

    setEmailsToInvite((state) => [...state, email])

    event.currentTarget.reset()
  }

  function removeEmailsToInvite (emailToRemove:string){
    const newEmailsList = emailsToInvite.filter((email) => email !== emailToRemove)
    setEmailsToInvite(newEmailsList)
    
  }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">

      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src = "./public/logo.svg"/>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center gap-3 shadow-shape">
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="size-5 text-zinc-400"/>
              <input disabled={isGuestInputOpen} className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"  placeholder="Para onde voce vai?" />
            </div> 

            <div className="flex items-center gap-2 ">
              <Calendar className="size-5 text-zinc-400"/>
              <input disabled={isGuestInputOpen} placeholder="Quando?"  className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1" />
            </div> 
            
            <div className="w-px h-6 bg-zinc-800" />
            
            {
              isGuestInputOpen ? (
                <button
                  className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
                  onClick={closeGuestsInput}
                >
                  Alterar local/data
                  <Settings2 />
                </button>
              ) : (
                <button 
                  className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                  onClick = {openGuestInput}
                >
                  Confirmar
                  <ArrowRight className="size-5"/>
              </button>
              )
            }
          </div>

          {
            isGuestInputOpen && (
              <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center gap-3 shadow-shape">
                <button type="button" onClick={openGuestsModal} className="flex flex-1 items-center gap-2 text-left">
                  <UserRoundPlus className="size-5 text-zinc-400"/>
                  <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem? </span>
              
                </button> 
                
                <div className="w-px h-6 bg-zinc-800" />

                <button 
                    className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                    
                    >
                    Confirmar
                    <ArrowRight className="size-5"/>
                </button>
              </div>
            )
            }
        </div>


        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda 
          com nossos <a href="text-zinc-300 underline"> termos de uso </a> e <a href="text-zinc-300 underline"> políticas de privacidade. </a> 
        </p>
      </div>

      {
        isGuestsModalOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold"> Selecionar convidados </h2>
                  <button onClick={closeGuestsModal}>
                    <X className="size-5 text-zinc-400"/>
                  </button>
                </div>

                <p className="text-zinc-400 text-sm"> Os convidados irão receber e-mails para confirmar a participação na viagem. </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {
                  emailsToInvite.map(email => {
                    return (
                      <div key = {email} className="bg-zinc-800 py-1.5 px-2.5 rounded-md flex items-center gap-2">
                      <span className="text-zinc-300"> {email} </span>
                      <button onClick={() => removeEmailsToInvite(email)}>
                        <X className="size-4 text-zinc-400"/>
                      </button>
                    </div> 
                    )
                  })
                }
                </div>
              

              <div className="w-full h-px bg-zinc-800" />

              <form onSubmit={addNewEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <AtSign className="text-zinc-400 size-5 ml-2" />
                <input 
                  type="email" 
                  name = "email"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" placeholder="Digite o e-mail do convidado" />

                <button 
                    type = "submit"
                    className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                  
                    >
                    Convidar
                    <Plus className="size-5"/>
                </button>
              </form>
            </div>
          </div>
        )
      }
    </div>
  )
}


