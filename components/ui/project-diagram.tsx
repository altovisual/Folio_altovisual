import { cn } from "@/lib/utils"

const DiagramBox = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("border border-primary/30 rounded-md p-2 text-center text-xs bg-primary/5 shadow-sm", className)}>
    {children}
  </div>
)

const DiagramArrow = () => (
  <div className="flex items-center justify-center mx-2 text-primary/60 font-mono text-sm md:text-base">
    --&gt;
  </div>
)

const DiagramGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col md:flex-row items-center">{children}</div>
)

export const ProjectDiagram = ({ type }: { type: string }) => {
  if (type === "ecommerce") {
    return (
      <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-wrap md:justify-center">
        <DiagramGroup>
          <DiagramBox>React UI<br/>Components</DiagramBox>
          <DiagramArrow />
          <DiagramBox>Next.js API<br/>Routes</DiagramBox>
          <DiagramArrow />
          <DiagramBox>MongoDB<br/>Database</DiagramBox>
        </DiagramGroup>
        <div className="flex justify-center w-full my-2">
          <span className="font-mono text-primary/60">|</span>
        </div>
        <DiagramGroup>
          <DiagramBox className="bg-green-500/10 border-green-500/30">Stripe<br/>Payment</DiagramBox>
          <DiagramArrow />
          <DiagramBox>Admin<br/>Dashboard</DiagramBox>
        </DiagramGroup>
      </div>
    )
  }

  if (type === "defi") {
    return (
      <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-wrap md:justify-center">
        <DiagramGroup>
          <DiagramBox>React DApp<br/>Interface</DiagramBox>
          <DiagramArrow />
          <DiagramBox>Web3 Provider<br/>Connection</DiagramBox>
          <DiagramArrow />
          <DiagramBox>Smart<br/>Contracts</DiagramBox>
        </DiagramGroup>
        <div className="flex justify-center w-full my-2">
          <span className="font-mono text-primary/60">|</span>
        </div>
        <DiagramGroup>
          <DiagramBox className="bg-orange-500/10 border-orange-500/30">MetaMask<br/>Wallet</DiagramBox>
          <DiagramArrow />
          <DiagramBox>Blockchain<br/>Transactions</DiagramBox>
        </DiagramGroup>
      </div>
    )
  }

  if (type === "mobile") {
    return (
      <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-wrap md:justify-center">
        <DiagramGroup>
          <DiagramBox>React Native<br/>UI</DiagramBox>
          <DiagramArrow />
          <DiagramBox>Figma API<br/>Integration</DiagramBox>
          <DiagramArrow />
          <DiagramBox>Cloud<br/>Storage</DiagramBox>
        </DiagramGroup>
        <div className="flex justify-center w-full my-2">
          <span className="font-mono text-primary/60">|</span>
        </div>
        <DiagramGroup>
          <DiagramBox className="bg-purple-500/10 border-purple-500/30">Animation<br/>Engine</DiagramBox>
          <DiagramArrow />
          <DiagramBox>Portfolio<br/>Showcase</DiagramBox>
        </DiagramGroup>
      </div>
    )
  }

  return null
}
