import { AltovisualArt } from "@/components/altovisual-art"
import { Award, Trophy, Flag, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CertificationsSection() {
  const { t, language } = useLanguage()
  
  return (
    <div className="space-y-4">
      <AltovisualArt art="certifications" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Star className="h-4 w-4 mr-2" />
            {t.competenciesTitle}
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">
                  {language === 'es' ? 'Desarrollo Avanzado en React y Next.js' : 'Advanced Development in React and Next.js'}
                </p>
                <p className="text-xs text-muted-foreground">{language === 'es' ? 'Demostrado a través de múltiples proyectos full-stack.' : 'Demonstrated through multiple full-stack projects.'}</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">
                  {language === 'es' ? 'Experiencia Práctica en Despliegue con AWS' : 'Hands-on Experience with AWS Deployment'}
                </p>
                <p className="text-xs text-muted-foreground">{language === 'es' ? 'Gestión y despliegue de aplicaciones en la nube.' : 'Managing and deploying applications in the cloud.'}</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">
                  {language === 'es' ? 'Desarrollo de Smart Contracts con Solidity' : 'Smart Contract Development with Solidity'}
                </p>
                <p className="text-xs text-muted-foreground">{language === 'es' ? 'Conocimiento profundo de los principios de blockchain.' : 'In-depth knowledge of blockchain principles.'}</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">
                  {language === 'es' ? 'Diseño de Experiencia de Usuario (UX/UI)' : 'User Experience (UX/UI) Design'}
                </p>
                <p className="text-xs text-muted-foreground">{language === 'es' ? 'Creación de interfaces intuitivas y centradas en el usuario.' : 'Creating intuitive and user-centered interfaces.'}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Trophy className="h-4 w-4 mr-2" />
            {t.competitionsTitle}
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>
                {language === 'es' 
                  ? 'Mención a Mejor Día de Proyecto con Sonar v1 - NerdConf (Evento de Polkadot)'
                  : 'Best Project Day Mention with Sonar v1 - NerdConf (Polkadot Event)'
                }
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Flag className="h-4 w-4 mr-2" />
            {t.initiativesTitle}
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>
                {language === 'es' 
                  ? 'Contribuidor Open Source - Proyectos React y Next.js'
                  : 'Open Source Contributor - React and Next.js Projects'
                }
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>
                {language === 'es'
                  ? 'Mentor de Desarrollo Web - Bootcamp Local'
                  : 'Web Development Mentor - Local Bootcamp'
                }
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>
                {language === 'es'
                  ? 'Organizador de Meetup de Blockchain'
                  : 'Blockchain Meetup Organizer'
                }
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>
                {language === 'es'
                  ? 'Voluntario en Eventos de Tecnología'
                  : 'Tech Conference Volunteer'
                }
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
