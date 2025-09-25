import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Palette, Users, Zap, Sparkles, Layers, Pen } from "lucide-react"
import Image from "next/image"
import { AppleLogo, WindowsLogo } from "@/components/icons"

export default function FreeplayLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image src="/freeplay-logo.png" alt="Freeplay" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold text-foreground">Freeplay</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Hero Section - Cursor Style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-purple-900/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
              Your Creative Canvas
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Built to unleash your creativity, Freeplay is the ultimate workspace for visual thinking and collaborative
              design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                <AppleLogo className="w-5 h-5 mr-2" />
                Download for macOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent border-purple-200 hover:bg-purple-50"
              >
                <WindowsLogo className="w-5 h-5 mr-2" />
                Download for Windows
              </Button>
            </div>
          </div>

          <div className="mt-16 lg:mt-24">
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1 shadow-2xl">
                <Image
                  src="/freeplay-app-screenshot.png"
                  alt="Freeplay App Interface"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-950/10 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              <Sparkles className="w-3 h-3 mr-1" />
              {"Soon Available for macOS & Windows"}
            </Badge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance">
              Creative Collaboration
              <span className="block bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              {
                "Where infinite creativity meets precision. Freeplay brings together the best of visual thinking and collaborative design in one powerful workspace."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{"Unleash Your Creative Potential"}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {
                "Every tool you need to transform ideas into reality. From quick sketches to complex collaborative projects."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-white hover:shadow-xl transition-all duration-300 border-black bg-secondary">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Infinite Canvas</h3>
                <p className="text-lg leading-relaxed text-black">
                  {
                    "Break free from constraints. Your canvas grows with your imagination—sketch, design, and explore without limits. Draw, write, and create things with ease. The possibilities are endless."
                  }
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/30 to-transparent rounded-full -translate-y-16 translate-x-16" />
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-white hover:shadow-xl transition-all duration-300 border-black bg-secondary">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Live Collaboration (Coming Soon)</h3>
                <p className="text-lg leading-relaxed text-black">
                  {
                    "Create together in real-time. Watch ideas evolve as your team contributes, with every stroke synchronized instantly."
                  }
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/30 to-transparent rounded-full -translate-y-16 translate-x-16" />
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-white hover:shadow-xl transition-all duration-300 border-black bg-secondary">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Lightning Fast</h3>
                <p className="text-lg leading-relaxed text-black">
                  {"Fluid performance that keeps up with your creativity. No lag, no limits—just pure creative flow."}
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/30 to-transparent rounded-full -translate-y-16 translate-x-16" />
              </CardContent>
            </Card>
          </div>

          <div className="mt-24 text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 rounded-3xl p-12 lg:p-16 text-white">
                <div className="flex justify-center mb-8">
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Pen className="w-6 h-6" />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">{"From Concept to Creation"}</h3>
                <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                  {
                    "Whether you're brainstorming the next big idea, designing user flows, or collaborating on complex diagrams—Freeplay adapts to your creative process."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {"Ready to transform your creative workflow?"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            {"Experience the future of creative collaboration with Freeplay."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
            >
              <AppleLogo className="w-5 h-5 mr-2" />
              Download for macOS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-purple-200 hover:bg-purple-50"
            >
              <WindowsLogo className="w-5 h-5 mr-2" />
              Download for Windows
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section
      <section id="pricing" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{"Choose the Plan That Fits You"}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {"Flexible pricing options to suit your needs. Start with a free trial and upgrade as you grow."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Pricing Card 1 */}
           {/* <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
                <p className="text-muted-foreground">{"Free to use with limited features."}</p>
              </CardContent>
            </Card>

            {/* Pricing Card 2 */}
            {/*<Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
                <p className="text-muted-foreground">{"Advanced features for individual creators."}</p>
              </CardContent>
            </Card>

            {/* Pricing Card 3 */}
           {/*} <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Plan</h3>
                <p className="text-muted-foreground">{"Collaborative tools for teams of all sizes."}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}


      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/freeplay-logo.png" alt="Freeplay" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold">Freeplay</span>
              </div>
              <p className="text-muted-foreground">{"Creative collaboration reimagined for the modern workflow."}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#download" className="hover:text-foreground transition-colors">
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Freeplay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
