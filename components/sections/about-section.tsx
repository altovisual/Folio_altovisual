import { AsciiArt } from "@/components/ascii-art"
import { AsciiPortraitComparison } from "@/components/ascii-portrait-comparison"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()
  
  return (
    <div className="space-y-4">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5">
          <AsciiPortraitComparison />
          <div className="text-center text-xs text-muted-foreground mt-2">
            altovisual
            <br />
            <span className="text-primary/60">{t.aboutTitle}</span>
          </div>
        </div>

        <div className="space-y-3 md:w-3/5">
          <p>
            {t.aboutIntro}
          </p>

          <p>
            {t.aboutDescription}
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">{t.personalBio}</h3>
            <div className="space-y-2 text-sm">
              <p>
                I'm someone who thrives on challenges, whenever someone tells me something is impossible, my first
                thought is always "how can I make this possible?" This mindset drives me in both my personal and
                professional development journey.
              </p>

              <p>
                I'm passionate about creating digital solutions that make a real impact. From crafting intuitive user
                interfaces to building robust backend systems, I enjoy every aspect of the development process.
              </p>

              <p>
                My interest in blockchain technology stems from its potential to revolutionize how we think about
                digital ownership, decentralization, and trust in applications.
              </p>

              <p>
                When I'm not coding, I enjoy exploring new design trends, learning about emerging technologies, and
                contributing to open-source projects that align with my values.
              </p>

              <p>
                I believe that great software is born from the intersection of solid technical skills, creative design
                thinking, and a deep understanding of user needs.
              </p>
            </div>
          </div>

          <p>
            I'm passionate about staying current with the latest development trends and building innovative solutions
            that push the boundaries of what's possible on the web.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">{t.quickFacts}</h3>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground">{t.locationLabel}</span> Remote / Global
              </li>
              <li>
                <span className="text-muted-foreground">{t.educationLabel}</span> Computer Science & Design
              </li>
              <li>
                <span className="text-muted-foreground">{t.specialtyLabel}</span> Full Stack Development, UI/UX Design, Blockchain
              </li>
              <li>
                <span className="text-muted-foreground">{t.certificationsLabel}</span> React, Node.js, AWS, Solidity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
