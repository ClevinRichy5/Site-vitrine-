"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageSquare, X, Send, Milk, Truck, MapPin, ShieldCheck, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

const quickQuestions = [
  { id: "q1", text: "Quels sont vos produits laitiers phares ?", icon: <Milk className="h-3 w-3" /> },
  { id: "q2", text: "Proposez-vous une livraison à domicile ?", icon: <Truck className="h-3 w-3" /> },
  { id: "q3", text: "Où puis-je trouver vos produits ?", icon: <MapPin className="h-3 w-3" /> },
  { id: "q4", text: "Quels sont vos engagements en matière de qualité ?", icon: <ShieldCheck className="h-3 w-3" /> },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Bonjour ! Je suis CamlaitBot, votre assistant laitier. Comment puis-je vous aider aujourd'hui ?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      setTimeout(async () => {
        let responseText = ""

        try {
          if (content.toLowerCase().includes("produit") || content.toLowerCase().includes("recommand")) {
            responseText =
              "Notre Lait Étoile est actuellement notre produit phare ! Riche en calcium et certifié biologique, il convient à toute la famille. Souhaitez-vous en savoir plus sur nos autres produits ?";
          } else if (content.toLowerCase().includes("livraison") || content.toLowerCase().includes("domicile")) {
            responseText =
              "Oui ! Nous proposons la livraison à domicile dans plusieurs régions. Les délais de livraison varient entre 2 à 5 jours ouvrables. Nous nous efforçons de garder vos produits frais et en parfait état !";
          } else if (content.toLowerCase().includes("où") || content.toLowerCase().includes("trouver")) {
            responseText =
              "Nos produits sont disponibles dans la plupart des supermarchés de votre région. Vous pouvez également consulter nos points de vente sur notre site web !";
          } else if (content.toLowerCase().includes("qualité") || content.toLowerCase().includes("engagement")) {
            responseText =
              "Chez Camlait, nous sommes fiers de garantir des produits de qualité supérieure, élaborés avec des ingrédients 100 % naturels. Nos normes respectent les certifications ISO pour la sécurité alimentaire.";
          } else {
            responseText =
              "Merci pour votre question ! Je suis là pour vous aider. Pouvez-vous m'en dire plus pour que je puisse vous fournir des informations détaillées sur nos produits et services ?";
          }
        } catch (error) {
          responseText =
            "J'ai des difficultés à me connecter en ce moment. Veuillez réessayer ou contacter notre équipe d'assistance directement."
          console.error("Erreur lors de la génération de la réponse:", error)
        }

        const assistantMessage: Message = {
          id: Date.now().toString(),
          content: responseText,
          role: "assistant",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error)
      setIsLoading(false)
    }
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <>
      {/* Bouton Chat */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-500 hover:bg-green-500/90 shadow-lg z-50 flex items-center justify-center"
        size="icon"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Ouvrir le chat</span>
      </Button>

      {/* Fenêtre de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] bg-zinc-700 border border-green-500/30 rounded-xl shadow-xl z-50 flex flex-col overflow-hidden"
          >
            {/* En-tête du Chat */}
            <div className="bg-green-500/10 backdrop-blur-sm p-4 border-b border-green-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10 bg-green-500/20 border border-green-500/30">
                    <Milk className="h-5 w-5 text-green-500" />
                  </Avatar>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                </div>
                <div>
                  <h3 className="font-semibold">CamlaitBot</h3>
                  <p className="text-xs text-muted-foreground">Assistant Laitier</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-green-500/10"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Fermer le chat</span>
              </Button>
            </div>

            {/* Messages du Chat */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} gap-2`}
                >
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8 bg-green-500/20 border border-green-500/30 flex-shrink-0">
                      <User className="h-4 w-4 text-green-500" />
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user" ? "bg-green-500 text-white" : "bg-muted/50 border border-green-500/20"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-[10px] text-muted-foreground mt-1 text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  {message.role === "user" && (
                    <Avatar className="h-8 w-8 bg-green-500 flex-shrink-0">
                      <span className="text-xs font-semibold text-white">VOUS</span>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start gap-2">
                  <Avatar className="h-8 w-8 bg-green-500/20 border border-green-500/30 flex-shrink-0">
                    <User className="h-4 w-4 text-green-500" />
                  </Avatar>
                  <div className="max-w-[80%] rounded-lg p-3 bg-muted/50 border border-green-500/20">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-green-500/50 animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500/50 animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500/50 animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Questions Rapides */}
            <div className="p-3 bg-background/50 border-t border-green-500/20">
              <p className="text-xs text-muted-foreground mb-2">Questions rapides :</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question) => (
                  <Badge
                    key={question.id}
                    className="cursor-pointer bg-green-500/10 hover:bg-green-500/20 text-foreground border-green-500/30"
                    onClick={() => handleQuickQuestion(question.text)}
                  >
                    {question.icon}
                    <span className="ml-1">{question.text}</span>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Saisie du Chat */}
            <div className="p-3 bg-background/80 border-t border-green-500/20">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage(inputValue)
                }}
                className="flex items-center gap-2"
              >
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Tapez votre message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-muted/50 border-green-500/20 focus:border-green-500"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-10 w-10 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-500/90"
                  disabled={!inputValue.trim() || isLoading}
                >
                  <Send className="h-4 w-4 text-white" />
                  <span className="sr-only">Envoyer le message</span>
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
