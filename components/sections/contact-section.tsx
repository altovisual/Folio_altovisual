import { AsciiArt } from "@/components/ascii-art"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t, language } = useLanguage()
  
  return (
    <div className="space-y-4">
      <AsciiArt art="contact" />

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:altovisual.ba@gmail.com"
            className="flex items-center text-sm hover:text-primary transition-colors"
            title={`${t.email}: altovisual.ba@gmail.com`}
          >
            <Mail className="h-4 w-4 mr-2 text-primary" />
            altovisual.ba@gmail.com
          </a>
          <a 
            href="tel:" 
            className="flex items-center text-sm hover:text-primary transition-colors"
            title={`${t.phone}: `}
          >
            <Phone className="h-4 w-4 mr-2 text-primary" />
            
          </a>
          <div className="flex items-center text-sm" title={`${t.location}: ${language === 'es' ? 'Remoto / Global' : 'Remote / Global'}`}>
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            {language === 'es' ? 'Remoto / Global' : 'Remote / Global'}
          </div>
          <a
            href="www.linkedin.com/in/manuel-mendoza-50695321a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
            title={`${t.linkedin}: linkedin.com/in/manuel-mendoza-50695321a`}
          >
            <Linkedin className="h-4 w-4 mr-2 text-primary" />
            linkedin.com/in/manuel-mendoza-50695321a
          </a>
          <a
            href="https://github.com/altovisual"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
            title={`${t.github}: github.com/altovisual`}
          >
            <Github className="h-4 w-4 mr-2 text-primary" />
            github.com/altovisual
          </a>
        </div>

        <div className="mt-6 p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold mb-2">
            {language === 'es' ? '¿Tienes un proyecto en mente?' : 'Have a project in mind?'}
          </h3>
          <p className="text-sm text-muted-foreground">
            {language === 'es' 
              ? 'Estoy disponible para proyectos freelance y colaboraciones. Especializado en desarrollo full stack, diseño UX/UI y tecnologías blockchain.'
              : "I'm available for freelance projects and collaborations. Specialized in full stack development, UX/UI design, and blockchain technologies."
            }
          </p>
        </div>
      </div>
    </div>
  )
}
