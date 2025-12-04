import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PawPrint, Heart, ShieldCheck } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <PawPrint className="h-6 w-6 text-primary mr-2" />
          <span className="font-bold text-lg">PetHaven</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Available Pets
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About Us
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                New Arrivals
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Find Your Perfect <span className="text-primary">Companion</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We connect loving families with adorable pets. Adopt, shop, and care for your furry friends with us.
              </p>
              <div className="space-x-4">
                <Button size="lg">Adopt Now</Button>
                <Button variant="outline" size="lg">Shop Supplies</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <PawPrint className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Wide Variety</CardTitle>
                  <CardDescription>
                    From playful puppies to calm kittens, we have pets of all breeds and ages.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Explore our extensive catalog of pets waiting for a home.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Health Guarantee</CardTitle>
                  <CardDescription>
                    All our pets come with a comprehensive health check and vaccination records.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">We prioritize the well-being of every animal in our care.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheck className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Lifetime Support</CardTitle>
                  <CardDescription>
                    We offer ongoing support and advice for new pet owners.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Our team is here to help you every step of the way.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Pets Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Pets
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Meet some of our adorable friends looking for a forever home.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Pet 1 */}
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=60"
                    alt="Golden Retriever Puppy"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Bella</CardTitle>
                  <CardDescription>Golden Retriever • 3 Months</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Playful and energetic, Bella loves fetch and belly rubs.
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full">Adopt Bella</Button>
                </div>
              </Card>
              {/* Pet 2 */}
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1529778873920-4da4926a7071?w=800&auto=format&fit=crop&q=60"
                    alt="Tabby Cat"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Luna</CardTitle>
                  <CardDescription>Tabby Cat • 2 Years</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Calm and affectionate, Luna enjoys sunny spots and naps.
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full">Adopt Luna</Button>
                </div>
              </Card>
              {/* Pet 3 */}
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&auto=format&fit=crop&q=60"
                    alt="Bulldog"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Max</CardTitle>
                  <CardDescription>Bulldog • 4 Years</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Loyal and protective, Max is a great companion for walks.
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full">Adopt Max</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to meet your new best friend?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Visit our store or browse our online catalog today.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="w-full sm:w-auto">View Available Pets</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-6 md:px-8 md:py-0 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Pet Store Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}