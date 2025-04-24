import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, CreditCard, Globe, Package, ShieldCheck, ShoppingBag, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">StoreForge</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-purple-600 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="text-sm font-medium hover:text-purple-600 transition-colors hidden sm:block">
              Log in
            </Link>
            <Link href="sign-up" passHref>
              <Button className="bg-purple-600 hover:bg-purple-700 cursor-pointer ">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full  ">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Launch your store in minutes
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Build your online store without the complexity
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  StoreForge gives you everything you need to create, manage, and scale your ecommerce business. No
                  coding required.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Start your free trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Watch demo</Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-purple-600" />
                  <span>No credit card required</span>
                  <span className="mx-2">•</span>
                  <Check className="h-4 w-4 text-purple-600" />
                  <span>14-day free trial</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full md:h-[420px] lg:h-[650px]">
                  <Image
                    src="/ecommerce-management-overview.png"
                    alt="StoreForge Dashboard"
                    fill
                    className="object-contain "
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Powerful Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to succeed online
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  StoreForge provides all the tools you need to build, launch, and grow your ecommerce business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/ecommerce-builder-laptop.png"
                alt="StoreForge in action"
                width={550}
                height={550}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-purple-600" />
                        <h3 className="text-xl font-bold">Beautiful Storefronts</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Choose from dozens of professionally designed templates that look great on any device.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-purple-600" />
                        <h3 className="text-xl font-bold">Seamless Payments</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Accept credit cards, PayPal, Apple Pay, and more with our integrated payment processing.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-purple-600" />
                        <h3 className="text-xl font-bold">Inventory Management</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Track stock levels, set up alerts, and manage orders from a single dashboard.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <ShieldCheck className="h-6 w-6 text-purple-600 mb-2" />
                  <CardTitle>Secure Hosting</CardTitle>
                  <CardDescription>
                    Your store is hosted on our secure, reliable infrastructure with 99.9% uptime.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-6 w-6 text-purple-600 mb-2" />
                  <CardTitle>Customer Accounts</CardTitle>
                  <CardDescription>Let customers create accounts, save payment info, and track orders.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-6 w-6 text-purple-600 mb-2" />
                  <CardTitle>SEO Optimization</CardTitle>
                  <CardDescription>Built-in tools to help your store rank higher in search results.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your business. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <Tabs defaultValue="monthly" className="w-full max-w-4xl mx-auto mt-8">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annually">Annually (Save 20%)</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>Perfect for small businesses just getting started</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $29<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Up to 100 products</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>2 staff accounts</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Basic analytics</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>24/7 support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/signin">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="border-purple-600">
                    <CardHeader>
                      <div className="px-3 py-1 text-xs bg-purple-600 text-white rounded-full w-fit mx-auto mb-4">
                        Most Popular
                      </div>
                      <CardTitle>Professional</CardTitle>
                      <CardDescription>For growing businesses with more needs</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $79<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Up to 1,000 products</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>5 staff accounts</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Advanced analytics</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Abandoned cart recovery</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Priority support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large businesses with custom requirements</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $299<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Unlimited products</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Unlimited staff accounts</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Advanced reporting</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Custom integrations</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Dedicated account manager</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="annually">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>Perfect for small businesses just getting started</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $23<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Billed annually at $276</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Up to 100 products</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>2 staff accounts</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Basic analytics</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>24/7 support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-purple-600">
                    <CardHeader>
                      <div className="px-3 py-1 text-xs bg-purple-600 text-white rounded-full w-fit mx-auto mb-4">
                        Most Popular
                      </div>
                      <CardTitle>Professional</CardTitle>
                      <CardDescription>For growing businesses with more needs</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $63<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Billed annually at $756</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Up to 1,000 products</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>5 staff accounts</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Advanced analytics</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Abandoned cart recovery</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Priority support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large businesses with custom requirements</CardDescription>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $239<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Billed annually at $2,868</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Unlimited products</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Unlimited staff accounts</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Advanced reporting</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Custom integrations</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-purple-600" />
                          <span>Dedicated account manager</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by businesses worldwide</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our customers have to say.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/confident-professional.png"
                      alt="Sarah Johnson"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                      <CardDescription>Founder, Bloom Boutique</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "StoreForge transformed our business. We launched our online store in just two days and saw sales
                    increase by 40% in the first month."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/confident-executive.png"
                      alt="David Chen"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">David Chen</CardTitle>
                      <CardDescription>CEO, TechGear</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The analytics tools have been a game-changer for us. We can now make data-driven decisions that
                    have helped us optimize our product offerings."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/confident-professional.png"
                      alt="Maria Rodriguez"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">Maria Rodriguez</CardTitle>
                      <CardDescription>Owner, Artisan Crafts</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "As someone with no technical background, I was worried about setting up an online store. StoreForge
                    made it incredibly easy and their support team is amazing."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently asked questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Everything you need to know about StoreForge.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>How long does it take to set up a store?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most of our customers can set up their store in less than a day. Our templates and intuitive
                    interface make it easy to get started quickly, and you can always customize your store further as
                    you go.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Do I need technical skills to use StoreForge?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Not at all! StoreForge is designed to be user-friendly for everyone, regardless of technical
                    background. Our drag-and-drop interface and pre-built templates make it easy to create a
                    professional-looking store without any coding knowledge.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Can I use my own domain name?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can use your own domain name with any of our plans. If you don't have a domain yet, you can
                    purchase one through us or connect one you already own. We provide easy instructions for setting up
                    your domain.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What payment methods can I accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    StoreForge supports a wide range of payment methods, including credit cards (Visa, Mastercard,
                    American Express), PayPal, Apple Pay, Google Pay, and more. You can also set up manual payment
                    methods like bank transfers or cash on delivery.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Is there a limit to how many products I can sell?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The number of products you can sell depends on your plan. Our Basic plan allows up to 100 products,
                    Professional up to 1,000, and Enterprise has unlimited products. You can upgrade your plan at any
                    time as your business grows.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to start selling online?
                </h2>
                <p className="max-w-[600px] md:text-xl">
                  Join thousands of businesses that trust StoreForge to power their online stores. Start your 14-day
                  free trial today.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">
                    Start your free trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-purple-700">
                    Contact sales
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/smiling-entrepreneur-workspace.png"
                  alt="Business owner using StoreForge"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 md:w-1/3">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">StoreForge</span>
            </div>
            <p className="text-sm text-muted-foreground">
              StoreForge gives you everything you need to create, manage, and scale your ecommerce business.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:w-1/3">
            <h3 className="text-lg font-medium">Company</h3>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
          </div>
          <div className="flex flex-col gap-6 md:w-1/3">
            <h3 className="text-lg font-medium">Support</h3>
            <Link href="#">Pricing</Link>
            <Link href="#">Documentation</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </footer >
    </div>
  )
} 