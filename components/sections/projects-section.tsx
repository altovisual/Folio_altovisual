import { AsciiArt } from "@/components/ascii-art"
import { useLanguage } from "@/contexts/language-context"

export function ProjectsSection() {
  const { t, language } = useLanguage()
  
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">
            {language === 'es' ? 'E-Commerce Full Stack' : 'Full Stack E-Commerce'}
          </h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | React UI    |---->| Next.js API    |---->| MongoDB        |
  | Components  |     | Routes         |     | Database       |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| Stripe       |<-------------+
                      | Payment      |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Admin         |
                      | Dashboard     |
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            {language === 'es' 
              ? 'Plataforma de comercio electrónico completa con carrito de compras, procesamiento de pagos, panel de administración y gestión de inventario en tiempo real.'
              : 'Complete e-commerce platform with shopping cart, payment processing, admin dashboard, and real-time inventory management.'
            }
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            <span className="font-semibold">{t.technologies}</span> React, Next.js, MongoDB, Stripe API, Tailwind CSS
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">
            {language === 'es' ? 'DApp de Finanzas Descentralizadas' : 'DeFi DApp Platform'}
          </h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | React DApp  |---->| Web3 Provider  |---->| Smart          |
  | Interface   |     | Connection     |     | Contracts      |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| MetaMask     |<-------------+
                      | Wallet       |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Blockchain    |
                      | Transactions  |
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            {language === 'es'
              ? 'Aplicación descentralizada para staking, yield farming y intercambio de tokens con interfaz intuitiva y integración con MetaMask.'
              : 'Decentralized application for staking, yield farming, and token swapping with intuitive interface and MetaMask integration.'
            }
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            <span className="font-semibold">{t.technologies}</span> React, Solidity, Web3.js, Hardhat, Sui Move
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">
            {language === 'es' ? 'App Móvil de Diseño' : 'Design Portfolio Mobile App'}
          </h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | React       |---->| Figma API      |---->| Cloud          |
  | Native UI   |     | Integration    |     | Storage        |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| Animation    |<-------------+
                      | Engine       |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Portfolio     |
                      | Showcase      |
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            {language === 'es'
              ? 'Aplicación móvil para mostrar portafolios de diseño con animaciones fluidas, integración con Figma y funcionalidades de realidad aumentada.'
              : 'Mobile application for showcasing design portfolios with smooth animations, Figma integration, and augmented reality features.'
            }
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            <span className="font-semibold">{t.technologies}</span> React Native, Figma API, Three.js, AR Kit
          </p>
        </div>
      </div>
    </div>
  )
}
