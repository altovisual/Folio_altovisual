"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { TerminalIcon, User, Briefcase, Code, Mail, GraduationCap, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AboutSection } from "@/components/sections/about-section"
import { EducationSection } from "@/components/sections/education-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ImageAsciiLogo } from "@/components/image-ascii-logo"
import { useLanguage } from "@/contexts/language-context"

type Command = {
  input: string
  output: React.ReactNode
  timestamp: Date
}

export default function Terminal() {
  const { language, setLanguage, t } = useLanguage()
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<Command[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Available commands for autocomplete
  const availableCommands = [
    "about", "education", "skills", "experience", "projects", 
    "certifications", "contact", "clear", "cls", "help", "build", "lang"
  ]

  // Use useCallback to memoize the scrollToBottom function
  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    // Focus input on mount and when clicking anywhere in the terminal
    inputRef.current?.focus()

    const handleClick = () => {
      inputRef.current?.focus()
    }

    document.addEventListener("click", handleClick)

    // Add welcome message
    setCommandHistory([
      {
        input: "welcome",
        output: (
          <div className="space-y-2">
            <ImageAsciiLogo />
            <p className="font-mono text-white">
              {t.welcome}
            </p>
          </div>
        ),
        timestamp: new Date(),
      },
    ])

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [commandHistory, currentSection, scrollToBottom])

  // Update suggestions when input changes
  useEffect(() => {
    if (input.trim()) {
      const filtered = availableCommands.filter(cmd => 
        cmd.toLowerCase().startsWith(input.toLowerCase())
      )
      setSuggestions(filtered)
      setSelectedSuggestion(-1)
    } else {
      setSuggestions([])
      setSelectedSuggestion(-1)
    }
  }, [input])

  // Update welcome message when language changes
  useEffect(() => {
    setCommandHistory(prev => {
      if (prev.length > 0 && prev[0].input === "welcome") {
        return [
          {
            input: "welcome",
            output: (
              <div className="space-y-2">
                <ImageAsciiLogo />
                <p className="font-mono text-white">
                  {t.welcome}
                </p>
              </div>
            ),
            timestamp: new Date(),
          },
          ...prev.slice(1)
        ]
      }
      return prev
    })
  }, [language, t.welcome])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const command = input.trim().toLowerCase()
    let output: React.ReactNode

    // Process command
    switch (command) {
      case "help":
        output = (
          <div className="space-y-2 text-white">
            <p className="font-bold">{t.availableCommands}</p>
            <ul className="space-y-1">
              <li>
                <span className="text-white font-bold">about</span> - {t.helpDescriptions.about}
              </li>
              <li>
                <span className="text-white font-bold">education</span> - {t.helpDescriptions.education}
              </li>
              <li>
                <span className="text-white font-bold">skills</span> - {t.helpDescriptions.skills}
              </li>
              <li>
                <span className="text-white font-bold">experience</span> - {t.helpDescriptions.experience}
              </li>
              <li>
                <span className="text-white font-bold">projects</span> - {t.helpDescriptions.projects}
              </li>
              <li>
                <span className="text-white font-bold">certifications</span> - {t.helpDescriptions.certifications}
              </li>
              <li>
                <span className="text-white font-bold">contact</span> - {t.helpDescriptions.contact}
              </li>
              <li>
                <span className="text-white font-bold">clear</span> / <span className="text-white font-bold">cls</span> - {t.helpDescriptions.clear}
              </li>
              <li>
                <span className="text-white font-bold">lang</span> - {t.helpDescriptions.lang}
              </li>
              <li>
                <span className="text-white font-bold">help</span> - {t.helpDescriptions.help}
              </li>
              <li>
                <span className="text-white font-bold">scan</span> - {t.helpDescriptions.scan}
              </li>
            </ul>
          </div>
        )
        setCurrentSection(null)
        break

      case "about":
        output = <AboutSection />
        setCurrentSection("about")
        break

      case "education":
        output = <EducationSection />
        setCurrentSection("education")
        break

      case "skills":
        output = <SkillsSection />
        setCurrentSection("skills")
        break

      case "experience":
        output = <ExperienceSection />
        setCurrentSection("experience")
        break

      case "projects":
        output = <ProjectsSection />
        setCurrentSection("projects")
        break

      case "certifications":
        output = <CertificationsSection />
        setCurrentSection("certifications")
        break

      case "contact":
        output = <ContactSection />
        setCurrentSection("contact")
        break

      case "clear":
      case "cls":
        setCommandHistory([])
        setCurrentSection(null)
        setInput("")
        return

      case "lang":
        const newLang = language === 'en' ? 'es' : 'en'
        setLanguage(newLang)
        output = (
          <div className="text-white">
            <p>{language === 'en' ? 'Language changed to Spanish' : 'Idioma cambiado a Inglés'}</p>
          </div>
        )
        setCurrentSection(null)
        break

      case "build":
        output = (
          <div className="space-y-2 text-white">
            <p>{t.buildRunning}</p>
            <pre className="text-xs my-2 text-white/70">
              {`
[+] Installing dependencies...
[+] Compiling TypeScript...
[+] Building React components...
[+] Optimizing assets...
[+] Generating static files...
[+] Running tests...
[+] Creating production bundle...
`}
            </pre>
            <p className="text-green-500">{t.buildComplete}</p>
          </div>
        )
        setCurrentSection(null)
        break

      default:
        output = (
          <p className="text-white">
            {t.commandNotFound}: {command}. {t.typeHelp}
          </p>
        )
        setCurrentSection(null)
    }

    // Add command to history
    setCommandHistory((prev) => [
      ...prev,
      {
        input: command,
        output,
        timestamp: new Date(),
      },
    ])

    // Reset input and history index
    setInput("")
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle autocomplete suggestions
    if (suggestions.length > 0) {
      if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedSuggestion(prev => 
          prev <= 0 ? suggestions.length - 1 : prev - 1
        )
        return
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedSuggestion(prev => 
          prev >= suggestions.length - 1 ? 0 : prev + 1
        )
        return
      } else if (e.key === "Tab" || e.key === "Enter") {
        if (selectedSuggestion >= 0) {
          e.preventDefault()
          setInput(suggestions[selectedSuggestion])
          setSuggestions([])
          setSelectedSuggestion(-1)
          return
        } else if (e.key === "Tab" && suggestions.length === 1) {
          e.preventDefault()
          setInput(suggestions[0])
          setSuggestions([])
          return
        }
      } else if (e.key === "Escape") {
        setSuggestions([])
        setSelectedSuggestion(-1)
        return
      }
    }

    // Handle command history navigation when no suggestions
    if (suggestions.length === 0) {
      if (e.key === "ArrowUp") {
        e.preventDefault()
        if (historyIndex < commandHistory.length - 1) {
          const newIndex = historyIndex + 1
          setHistoryIndex(newIndex)
          setInput(commandHistory[commandHistory.length - 1 - newIndex].input)
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1
          setHistoryIndex(newIndex)
          setInput(commandHistory[commandHistory.length - 1 - newIndex].input)
        } else if (historyIndex === 0) {
          setHistoryIndex(-1)
          setInput("")
        }
      }
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-black border border-white/30 rounded-t-md p-2 flex items-center">
        <TerminalIcon className="h-4 w-4 text-white mr-2" />
        <span className="text-sm font-mono text-white">
          altovisual@dev ~ {currentSection ? `/${currentSection}` : ""}
        </span>
      </div>

      <div ref={terminalRef} className="flex-1 bg-black border-x border-white/30 p-4 overflow-y-auto font-mono text-sm">
        {commandHistory.map((cmd, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center text-white/70">
              <span className="text-white mr-2">$</span>
              <span>{cmd.input}</span>
            </div>
            <div className="mt-1 ml-4">{cmd.output}</div>
          </div>
        ))}
      </div>

      <div className="bg-black border border-white/30 rounded-b-md p-2 relative">
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-white mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none font-mono text-white"
            aria-label="Terminal input"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
        
        {/* Autocomplete suggestions */}
        {suggestions.length > 0 && (
          <div className="absolute bottom-full left-0 right-0 bg-black/90 border border-white/30 rounded-t-md max-h-32 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <div
                key={suggestion}
                className={`px-4 py-1 font-mono text-sm cursor-pointer ${
                  index === selectedSuggestion 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/70 hover:bg-white/10'
                }`}
                onClick={() => {
                  setInput(suggestion)
                  setSuggestions([])
                  setSelectedSuggestion(-1)
                  inputRef.current?.focus()
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      <nav className="mt-4 flex flex-wrap justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("about")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <User className="h-3 w-3 mr-1" />
          {t.nav.about}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("education")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <GraduationCap className="h-3 w-3 mr-1" />
          {t.nav.education}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("skills")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <Shield className="h-3 w-3 mr-1" />
          {t.nav.skills}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("experience")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <Briefcase className="h-3 w-3 mr-1" />
          {t.nav.experience}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("projects")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <Code className="h-3 w-3 mr-1" />
          {t.nav.projects}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("certifications")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <Award className="h-3 w-3 mr-1" />
          {t.nav.certifications}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("contact")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30"
        >
          <Mail className="h-3 w-3 mr-1" />
          {t.nav.contact}
        </Button>
      </nav>
    </div>
  )
}
