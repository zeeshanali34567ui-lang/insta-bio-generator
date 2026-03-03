"use client"

import { useState, useCallback } from "react"
import { Copy, Check, RefreshCw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const toneOptions = [
  "Attitude",
  "Cool",
  "Stylish",
  "VIP",
  "Swag",
  "Professional",
  "Funny",
  "Motivational",
  "Simple",
  "Creative",
] as const

const categoryOptions = [
  "General",
  "Gaming",
  "Fitness",
  "Music",
  "Travel",
  "Photography",
  "Student",
  "Entrepreneur",
] as const

type Tone = (typeof toneOptions)[number]
type Category = (typeof categoryOptions)[number]

const bioTemplates: Record<Tone, string[]> = {
  Attitude: [
    "Born to express, not to impress {emoji}",
    "Silent but deadly. My success makes the noise {emoji}",
    "I don't have an attitude problem. You have a perception problem {emoji}",
    "Not everyone likes me, but not everyone matters {emoji}",
    "My life, my rules, my attitude {emoji}",
    "Too glam to give a damn {emoji}",
    "I am who I am. Your approval isn't needed {emoji}",
    "Walking through fire doesn't make you weak {emoji}",
    "Be a warrior, not a worrier {emoji}",
    "Lions don't lose sleep over the opinions of sheep {emoji}",
  ],
  Cool: [
    "Living my best life, one story at a time {emoji}",
    "Making memories around the world {emoji}",
    "Coffee addict and adventure seeker {emoji}",
    "Chasing sunsets and dreams {emoji}",
    "Just a cool guy in a warm world {emoji}",
    "Vibes speak louder than words {emoji}",
    "Low key but high value {emoji}",
    "Keeping it real since day one {emoji}",
    "Dream big, hustle hard, stay cool {emoji}",
    "Life is short, make it cool {emoji}",
  ],
  Stylish: [
    "Dressed to kill, born to thrill {emoji}",
    "Style is a way to say who you are without speaking {emoji}",
    "Fashion fades, but style is eternal {emoji}",
    "Simplicity is the ultimate sophistication {emoji}",
    "Making the world my runway {emoji}",
    "Elegance is not standing out but being remembered {emoji}",
    "Classy with a touch of sassy {emoji}",
    "My outfit speaks before I do {emoji}",
    "Stay stylish, stay humble {emoji}",
    "Dapper by nature, gentleman by choice {emoji}",
  ],
  VIP: [
    "VIP mentality, boss lifestyle {emoji}",
    "Living like a king in my own kingdom {emoji}",
    "First class mind in a world full of economy thinkers {emoji}",
    "Premium vibes only {emoji}",
    "Luxury is a necessity that begins where necessity ends {emoji}",
    "Don't watch me, watch my moves {emoji}",
    "Building an empire while they sleep {emoji}",
    "Exclusive mindset, inclusive heart {emoji}",
    "VIP access to greatness {emoji}",
    "Born to stand out from the VIP section {emoji}",
  ],
  Swag: [
    "Swag is not something you wear, it's something you are {emoji}",
    "Too much swag, zero apologies {emoji}",
    "My swag is on autopilot {emoji}",
    "Walk it like I talk it {emoji}",
    "Dripping in confidence {emoji}",
    "They see me rolling, they admiring {emoji}",
    "Swag game: infinity {emoji}",
    "Making moves in silence {emoji}",
    "Unbothered, moisturized, in my lane {emoji}",
    "Swag is the art of confidence {emoji}",
  ],
  Professional: [
    "Entrepreneur | Dreamer | Achiever {emoji}",
    "Turning vision into reality, one step at a time {emoji}",
    "CEO mindset with a hustler's work ethic {emoji}",
    "Building something meaningful {emoji}",
    "Passionate about growth and innovation {emoji}",
    "On a mission to create impact {emoji}",
    "Leadership is action, not position {emoji}",
    "Investing in myself daily {emoji}",
    "Goal-oriented | Purpose-driven {emoji}",
    "Creating value in everything I do {emoji}",
  ],
  Funny: [
    "I'm not lazy, I'm on energy saving mode {emoji}",
    "Professional overthinker, part-time human {emoji}",
    "Running on coffee and bad decisions {emoji}",
    "My brain has too many tabs open {emoji}",
    "I put the 'pro' in procrastinator {emoji}",
    "Currently pretending to be a functioning adult {emoji}",
    "Sarcasm is my love language {emoji}",
    "I followed my heart and it led me to the fridge {emoji}",
    "Error 404: Bio not found {emoji}",
    "If I was funny, I'd have a better bio {emoji}",
  ],
  Motivational: [
    "Dream it. Believe it. Build it {emoji}",
    "Your only limit is your mind {emoji}",
    "Rising and grinding every single day {emoji}",
    "Be the change you wish to see in the world {emoji}",
    "Hard work beats talent when talent doesn't work hard {emoji}",
    "Focused on becoming a better version of myself {emoji}",
    "Stay hungry, stay foolish {emoji}",
    "Progress, not perfection {emoji}",
    "The best time to start was yesterday. The next best time is now {emoji}",
    "Turning obstacles into opportunities {emoji}",
  ],
  Simple: [
    "Just a simple guy with big dreams {emoji}",
    "Keeping things simple and real {emoji}",
    "Less drama, more karma {emoji}",
    "Simple living, high thinking {emoji}",
    "Life is simple, don't complicate it {emoji}",
    "Happiness is homemade {emoji}",
    "Good vibes only {emoji}",
    "Be kind, always {emoji}",
    "Living simply so others can simply live {emoji}",
    "Simplicity is the key to brilliance {emoji}",
  ],
  Creative: [
    "Painting my life in bold colors {emoji}",
    "Creating art in everyday life {emoji}",
    "Mind full of ideas, heart full of dreams {emoji}",
    "Life is a canvas, make it a masterpiece {emoji}",
    "Imagine. Create. Inspire {emoji}",
    "Thinking outside the box since day one {emoji}",
    "Turning ideas into reality {emoji}",
    "Creative soul with a logical mind {emoji}",
    "Every day is a chance to create something beautiful {emoji}",
    "Art is not what I do, it's what I am {emoji}",
  ],
}

const emojiSets: Record<Tone, string[]> = {
  Attitude: ["\u{1F525}", "\u{1F4AF}", "\u{1F60E}", "\u26A1", "\u{1F5A4}", "\u{1F451}", "\u{1F43A}", "\u{1F4AA}"],
  Cool: ["\u{1F30A}", "\u2728", "\u{1F3AF}", "\u{1F919}", "\u{1F60E}", "\u{1F3C4}", "\u{1F334}", "\u{1F3A7}"],
  Stylish: ["\u{1F3A9}", "\u{1F454}", "\u{1F48E}", "\u2728", "\u{1F31F}", "\u{1FA84}", "\u{1F5A4}", "\u{1F935}"],
  VIP: ["\u{1F451}", "\u{1F48E}", "\u{1F3C6}", "\u2B50", "\u{1F525}", "\u{1F4AB}", "\u{1F947}", "\u{1F3AF}"],
  Swag: ["\u{1F4AF}", "\u{1F525}", "\u{1F624}", "\u{1F4AA}", "\u270C\uFE0F", "\u{1F918}", "\u{1F60F}", "\u26A1"],
  Professional: ["\u{1F4C8}", "\u{1F4BC}", "\u{1F3AF}", "\u{1F680}", "\u{1F4A1}", "\u{1F310}", "\u{1F4CA}", "\u2B50"],
  Funny: ["\u{1F602}", "\u{1F923}", "\u{1F61C}", "\u{1F92A}", "\u{1F604}", "\u{1F355}", "\u{1F3AE}", "\u{1F480}"],
  Motivational: ["\u{1F4AA}", "\u{1F680}", "\u{1F31F}", "\u{1F525}", "\u{1F3AF}", "\u2B50", "\u{1F3C6}", "\u{1F4A1}"],
  Simple: ["\u270C\uFE0F", "\u{1F33F}", "\u2600\uFE0F", "\u{1F90D}", "\u{1F338}", "\u{1F343}", "\u{1F60A}", "\u{1F54A}\uFE0F"],
  Creative: ["\u{1F3A8}", "\u2728", "\u{1F308}", "\u{1F4A1}", "\u{1F58C}\uFE0F", "\u{1F4F7}", "\u{1F3AD}", "\u{1F31F}"],
}

const hashtagSets: Record<Tone, string[]> = {
  Attitude: ["#AttitudeBoy", "#BornToRule", "#AlphaVibes", "#KingMindset"],
  Cool: ["#CoolVibes", "#ChillMode", "#GoodVibesOnly", "#StayCool"],
  Stylish: ["#StylishBoy", "#Fashion", "#Dapper", "#StyleGame"],
  VIP: ["#VIPLife", "#BossMode", "#LuxuryLife", "#Exclusive"],
  Swag: ["#SwagBoy", "#SwagLife", "#DrippingSwag", "#OwnTheGame"],
  Professional: ["#Hustle", "#Grind", "#Entrepreneur", "#Success"],
  Funny: ["#JustKidding", "#LOL", "#FunnyBio", "#Humor"],
  Motivational: ["#Motivation", "#NeverGiveUp", "#DreamBig", "#Inspire"],
  Simple: ["#SimpleLife", "#Minimalist", "#KeepItReal", "#GoodVibes"],
  Creative: ["#Creative", "#ArtLife", "#ThinkDifferent", "#Visionary"],
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function BioGeneratorTool() {
  const [name, setName] = useState("")
  const [tone, setTone] = useState<Tone>("Cool")
  const [category, setCategory] = useState<Category>("General")
  const [includeEmojis, setIncludeEmojis] = useState(true)
  const [includeHashtags, setIncludeHashtags] = useState(false)
  const [generatedBios, setGeneratedBios] = useState<string[]>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateBios = useCallback(() => {
    setIsGenerating(true)
    setCopiedIndex(null)

    setTimeout(() => {
      const templates = bioTemplates[tone]
      const emojis = emojiSets[tone]
      const hashtags = hashtagSets[tone]

      const shuffled = shuffleArray(templates)
      const selected = shuffled.slice(0, 5)

      const bios = selected.map((bio) => {
        let result = bio

        if (includeEmojis) {
          const randomEmojis = shuffleArray(emojis).slice(0, 2)
          result = result.replace("{emoji}", randomEmojis.join(" "))
        } else {
          result = result.replace(" {emoji}", "").replace("{emoji}", "")
        }

        if (name.trim()) {
          const nameVariations = [
            `${name} | `,
            `It's ${name}. `,
            `${name} here. `,
            `~ ${name}`,
          ]
          const randomName =
            nameVariations[Math.floor(Math.random() * nameVariations.length)]
          if (Math.random() > 0.5) {
            result = randomName + result
          } else {
            result = result + ` ${randomName.trim()}`
          }
        }

        if (category !== "General") {
          const categoryTags: Record<string, string> = {
            Gaming: "Gamer",
            Fitness: "Fitness Enthusiast",
            Music: "Music Lover",
            Travel: "Traveller",
            Photography: "Photographer",
            Student: "Student Life",
            Entrepreneur: "Entrepreneur",
          }
          result = `${categoryTags[category]} | ${result}`
        }

        if (includeHashtags) {
          const randomHashtags = shuffleArray(hashtags).slice(0, 2)
          result = `${result}\n${randomHashtags.join(" ")}`
        }

        return result.trim()
      })

      setGeneratedBios(bios)
      setIsGenerating(false)
    }, 600)
  }, [name, tone, category, includeEmojis, includeHashtags])

  const copyBio = useCallback(async (bio: string, index: number) => {
    try {
      await navigator.clipboard.writeText(bio)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = bio
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    }
  }, [])

  return (
    <>
      {/* Generator Form Card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
        <div className="flex flex-col gap-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Your Name (Optional)
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-2 rounded-xl border-border bg-background"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="category" className="text-sm font-medium text-foreground">
                Category
              </Label>
              <Select
                value={category}
                onValueChange={(v) => setCategory(v as Category)}
              >
                <SelectTrigger id="category" className="mt-2 rounded-xl border-border bg-background">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="tone" className="text-sm font-medium text-foreground">
                Tone / Style
              </Label>
              <Select
                value={tone}
                onValueChange={(v) => setTone(v as Tone)}
              >
                <SelectTrigger id="tone" className="mt-2 rounded-xl border-border bg-background">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  {toneOptions.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Switch
                id="emoji"
                checked={includeEmojis}
                onCheckedChange={setIncludeEmojis}
              />
              <Label htmlFor="emoji" className="text-sm text-foreground cursor-pointer">
                Include Emojis
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch
                id="hashtags"
                checked={includeHashtags}
                onCheckedChange={setIncludeHashtags}
              />
              <Label htmlFor="hashtags" className="text-sm text-foreground cursor-pointer">
                Include Hashtags
              </Label>
            </div>
          </div>

          <Button
            onClick={generateBios}
            disabled={isGenerating}
            size="lg"
            className="w-full rounded-xl bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate 5 Bio Ideas
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Generated Bios Output */}
      {generatedBios.length > 0 && (
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">
              Your Generated Instagram Bios
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={generateBios}
              className="rounded-full border-border text-foreground"
            >
              <RefreshCw className="mr-2 h-3.5 w-3.5" />
              Regenerate
            </Button>
          </div>

          {generatedBios.map((bio, index) => (
            <div
              key={`${bio}-${index}`}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="flex-1 whitespace-pre-line text-sm leading-relaxed text-foreground">
                  {bio}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyBio(bio, index)}
                  className="shrink-0 text-muted-foreground hover:text-primary"
                  aria-label={`Copy bio ${index + 1}`}
                >
                  {copiedIndex === index ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="ml-1.5 text-xs">
                    {copiedIndex === index ? "Copied!" : "Copy"}
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
