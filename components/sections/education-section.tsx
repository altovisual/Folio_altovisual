import { AltovisualArt } from "@/components/altovisual-art"
import { useLanguage } from "@/contexts/language-context"

export function EducationSection() {
  const { t, language } = useLanguage()

  return (
    <div className="space-y-4">
      <AltovisualArt art="education" />

      <p className="text-sm text-center italic text-muted-foreground px-4">
        {t.educationIntro}
      </p>

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">
            {language === 'es' ? 'Universidad Tecnológica' : 'Technology University'}
          </h3>
          <p className="text-sm">
            <span className="text-muted-foreground">{t.educationDegree}</span>
          </p>
          <p className="text-xs text-muted-foreground">
            <span>{t.educationDate}</span> {language === 'es' ? 'Diciembre 2022' : 'December 2022'}
          </p>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">{t.relevantCoursework}</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>{language === 'es' ? 'Estructuras de Datos y Algoritmos' : 'Data Structures & Algorithms'}</li>
              <li>{language === 'es' ? 'Desarrollo Web Full Stack' : 'Full Stack Web Development'}</li>
              <li>{language === 'es' ? 'Bases de Datos Relacionales' : 'Relational Database Design'}</li>
              <li>{language === 'es' ? 'Programación Orientada a Objetos' : 'Object-Oriented Programming'}</li>
              <li>{language === 'es' ? 'Ingeniería de Software' : 'Software Engineering'}</li>
              <li>{language === 'es' ? 'Diseño de Interfaces de Usuario' : 'User Interface Design'}</li>
              <li>{language === 'es' ? 'Arquitectura de Software' : 'Software Architecture'}</li>
            </ul>
          </div>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">
            {language === 'es' ? 'Cursos Especializados' : 'Specialized Courses'}
          </h3>
          <div className="mt-2 space-y-2">
            <div>
              <p className="text-sm font-semibold">
                {language === 'es' ? 'Desarrollo Blockchain' : 'Blockchain Development'}
              </p>
              <p className="text-xs text-muted-foreground">
                {language === 'es' ? 'Ethereum, Solidity, Smart Contracts' : 'Ethereum, Solidity, Smart Contracts'}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold">
                {language === 'es' ? 'Diseño UX/UI Avanzado' : 'Advanced UX/UI Design'}
              </p>
              <p className="text-xs text-muted-foreground">
                {language === 'es' ? 'Figma, Prototipado, Investigación de Usuario' : 'Figma, Prototyping, User Research'}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold">
                {language === 'es' ? 'Arquitectura de Aplicaciones Web' : 'Web Application Architecture'}
              </p>
              <p className="text-xs text-muted-foreground">
                {language === 'es' ? 'Microservicios, APIs RESTful, GraphQL' : 'Microservices, RESTful APIs, GraphQL'}
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">
            {language === 'es' ? 'Aprendizaje Continuo' : 'Continuous Learning'}
          </h3>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">
              {language === 'es' ? 'Actualmente estudiando:' : 'Currently studying:'}
            </h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>{language === 'es' ? 'Desarrollo de DApps (Aplicaciones Descentralizadas)' : 'DApp Development (Decentralized Applications)'}</li>
              <li>{language === 'es' ? 'Protocolos DeFi y Web3' : 'DeFi Protocols & Web3'}</li>
              <li>{language === 'es' ? 'Arquitectura de Sistemas Distribuidos' : 'Distributed Systems Architecture'}</li>
              <li>{language === 'es' ? 'Optimización de Performance Frontend' : 'Frontend Performance Optimization'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
