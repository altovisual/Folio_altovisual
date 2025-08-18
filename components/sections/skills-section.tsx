import { AsciiArt } from "@/components/ascii-art"
import { useLanguage } from "@/contexts/language-context"

export function SkillsSection() {
  const { t } = useLanguage()
  
  return (
    <div className="space-y-4">
      <AsciiArt art="skills" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2">{t.programmingLanguages}</h3>
          <div className="space-y-2">
            <SkillBar name={t.skills.javascript} percentage={95} />
            <SkillBar name={t.skills.typescript} percentage={90} />
            <SkillBar name={t.skills.python} percentage={85} />
            <SkillBar name={t.skills.react} percentage={95} />
            <SkillBar name={t.skills.nextjs} percentage={90} />
            <SkillBar name={t.skills.nodejs} percentage={88} />
            <SkillBar name={t.skills.express} percentage={85} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">{t.frontendTechnologies}</h3>
          <div className="space-y-2">
            <SkillBar name={t.skills.html} percentage={95} />
            <SkillBar name={t.skills.css} percentage={90} />
            <SkillBar name={t.skills.tailwind} percentage={92} />
            <SkillBar name={t.skills.sass} percentage={85} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">{t.designTools}</h3>
          <div className="space-y-2">
            <SkillBar name={t.skills.figma} percentage={90} />
            <SkillBar name={t.skills.photoshop} percentage={85} />
            <SkillBar name={t.skills.illustrator} percentage={80} />
            <SkillBar name={t.skills.sketch} percentage={75} />
            <SkillBar name={t.skills.aftereffects} percentage={78} />
            <SkillBar name={t.skills.davinci} percentage={72} />
            <SkillBar name={t.skills.unreal} percentage={65} />
            <SkillBar name={t.skills.blender} percentage={70} />
            <SkillBar name={t.skills.flstudio} percentage={68} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">{t.databases}</h3>
          <div className="space-y-2">
            <SkillBar name={t.skills.mongodb} percentage={55} />
            <SkillBar name={t.skills.postgresql} percentage={50} />
            <SkillBar name={t.skills.mysql} percentage={48} />
            <SkillBar name={t.skills.redis} percentage={45} />
            <SkillBar name={t.skills.aws} percentage={52} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">{t.blockchainTech}</h3>
          <div className="space-y-2">
            <SkillBar name={t.skills.solidity} percentage={75} />
            <SkillBar name={t.skills.sui} percentage={70} />
            <SkillBar name={t.skills.web3} percentage={70} />
            <SkillBar name={t.skills.ethers} percentage={68} />
            <SkillBar name={t.skills.hardhat} percentage={65} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">{t.devTools}</h3>
          <div className="space-y-2">
            <SkillBar name={t.skills.git} percentage={95} />
            <SkillBar name={t.skills.docker} percentage={80} />
            <SkillBar name={t.skills.vercel} percentage={90} />
            <SkillBar name={t.skills.github} percentage={95} />
            <SkillBar name={t.skills.vscode} percentage={92} />
            <SkillBar name={t.skills.cursor} percentage={88} />
            <SkillBar name={t.skills.kiro} percentage={85} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">{t.aiTools}</h3>
          <div className="space-y-2">
            <SkillBar name={t.skills.promptEngineering} percentage={90} />
            <SkillBar name={t.skills.contextEngineering} percentage={85} />
            <SkillBar name={t.skills.agentCreation} percentage={80} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} skill level: ${percentage}%`}
        />
      </div>
    </div>
  )
}
