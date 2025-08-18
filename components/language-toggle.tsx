"use client"

import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="bg-black/50 hover:bg-black/70 text-white border-white/30 font-mono text-xs"
      title={`${t.language}: ${t.currentLanguage}`}
    >
      <Languages className="h-3 w-3 mr-1" />
      {language.toUpperCase()}
    </Button>
  )
}