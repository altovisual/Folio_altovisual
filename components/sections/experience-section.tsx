import { AltovisualArt } from "@/components/altovisual-art"
import { useLanguage } from "@/contexts/language-context"

export function ExperienceSection() {
  const { language } = useLanguage()
  
  return (
    <div className="space-y-4">
      <AltovisualArt art="experience" />

      <div className="space-y-6">
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">
              {language === 'es' ? 'Desarrollador Full Stack Senior' : 'Senior Full Stack Developer'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {language === 'es' ? 'Freelance | 2021 - Presente' : 'Freelance | 2021 - Present'}
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
              {language === 'es' 
                ? 'Desarrollo de aplicaciones web robustas con React, TypeScript y Next.js para clientes internacionales'
                : 'Development of robust web applications with React, TypeScript and Next.js for international clients'
              }
            </li>
            <li>
              {language === 'es'
                ? 'Desarrollo de páginas web estáticas y con interacción usando HTML5, CSS3, JavaScript y frameworks modernos'
                : 'Development of static and interactive websites using HTML5, CSS3, JavaScript and modern frameworks'
              }
            </li>
            <li>
              {language === 'es'
                ? 'Diseño y desarrollo de plataformas e-commerce completas con sistemas de pago y gestión de inventario'
                : 'Design and development of complete e-commerce platforms with payment systems and inventory management'
              }
            </li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">
              {language === 'es' ? 'Diseñador de Marcas & UI/UX' : 'Brand Designer & UI/UX'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {language === 'es' ? 'Freelance | 2019 - 2021' : 'Freelance | 2019 - 2021'}
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
              {language === 'es'
                ? 'Diseño y creación de marcas completas, incluyendo identidad visual, logotipos y guidelines de marca'
                : 'Design and creation of complete brands, including visual identity, logos and brand guidelines'
              }
            </li>
            <li>
              {language === 'es'
                ? 'Desarrollo de interfaces de usuario intuitivas con enfoque en experiencia del usuario y accesibilidad'
                : 'Development of intuitive user interfaces with focus on user experience and accessibility'
              }
            </li>
            <li>
              {language === 'es'
                ? 'Colaboración con equipos multidisciplinarios para implementar diseños pixel-perfect'
                : 'Collaboration with multidisciplinary teams to implement pixel-perfect designs'
              }
            </li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">
              {language === 'es' ? 'Desarrollador Blockchain' : 'Blockchain Developer'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {language === 'es' ? 'Freelance | 2022 - Presente' : 'Freelance | 2022 - Present'}
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
              {language === 'es'
                ? 'Creación de smart contracts en Solidity para proyectos DeFi y NFT en Ethereum y redes compatibles'
                : 'Creation of smart contracts in Solidity for DeFi and NFT projects on Ethereum and compatible networks'
              }
            </li>
            <li>
              {language === 'es'
                ? 'Desarrollo de DApps (Aplicaciones Descentralizadas) con Web3.js y integración con wallets'
                : 'Development of DApps (Decentralized Applications) with Web3.js and wallet integration'
              }
            </li>
            <li>
              {language === 'es'
                ? 'Auditoría y optimización de contratos inteligentes para seguridad y eficiencia de gas'
                : 'Smart contract auditing and optimization for security and gas efficiency'
              }
            </li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">
              {language === 'es' ? 'Desarrollador de Juegos & Automatización' : 'Game Developer & Automation Specialist'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {language === 'es' ? 'Freelance | 2020 - 2022' : 'Freelance | 2020 - 2022'}
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
              {language === 'es'
                ? 'Creación de entornos inmersivos y juegos interactivos en Unreal Engine con Blueprint y C++'
                : 'Creation of immersive environments and interactive games in Unreal Engine with Blueprint and C++'
              }
            </li>
            <li>
              {language === 'es'
                ? 'Desarrollo de automatizaciones a medida con Python para optimizar procesos empresariales y workflows'
                : 'Development of custom automations with Python to optimize business processes and workflows'
              }
            </li>
            <li>
              {language === 'es'
                ? 'Integración de sistemas y APIs para automatización de tareas repetitivas y análisis de datos'
                : 'System and API integration for automation of repetitive tasks and data analysis'
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}