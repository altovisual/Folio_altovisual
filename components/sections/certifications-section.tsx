import { AsciiArt } from "@/components/ascii-art"
import { Award, Trophy, Flag } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CertificationsSection() {
  const { t, language } = useLanguage()
  
  return (
    <div className="space-y-4">
      <AsciiArt art="certifications" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Award className="h-4 w-4 mr-2" />
            {t.certificationsTitle}
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">
                  {language === 'es' ? 'Desarrollador React Certificado' : 'React Developer Certification'}
                </p>
                <p className="text-xs text-muted-foreground">Meta (Facebook)</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">
                  {language === 'es' ? 'Arquitecto de Soluciones AWS' : 'AWS Solutions Architect'}
                </p>
                <p className="text-xs text-muted-foreground">Amazon Web Services</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">
                  {language === 'es' ? 'Desarrollador Blockchain Certificado' : 'Certified Blockchain Developer'}
                </p>
                <p className="text-xs text-muted-foreground">Ethereum Foundation</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">
                  {language === 'es' ? 'Especialista en UX/UI Design' : 'UX/UI Design Specialist'}
                </p>
                <p className="text-xs text-muted-foreground">Adobe Certified Expert</p>
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
