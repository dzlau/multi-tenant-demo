import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Search, Heart, Menu, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getStore } from "@/drizzle/db"
import { notFound, redirect } from "next/navigation"


// Sample data
const products = [
    {
        id: 1,
        name: "Casual Cotton T-Shirt",
        category: "Clothing",
        price: 24.99,
        oldPrice: 29.99,
        image: "/shop-placeholder/tshirt.jpg",
    },
    {
        id: 2,
        name: "Wireless Earbuds",
        category: "Electronics",
        price: 89.99,
        oldPrice: 119.99,
        image: "/shop-placeholder/earbuds.jpg",
    },
    {
        id: 3,
        name: "Ceramic Coffee Mug",
        category: "Home & Garden",
        price: 12.99,
        image: "/shop-placeholder/mug.jpg",
    },
    {
        id: 4,
        name: "Moisturizing Face Cream",
        category: "Beauty",
        price: 34.99,
        oldPrice: 39.99,
        image: "/shop-placeholder/face-cream.jpg",
    },
    {
        id: 5,
        name: "Fitness Tracker Watch",
        category: "Electronics",
        price: 49.99,
        oldPrice: 69.99,
        image: "/shop-placeholder/fitness-watch.jpg",
    },
    {
        id: 6,
        name: "Leather Wallet",
        category: "Accessories",
        price: 29.99,
        image: "/shop-placeholder/wallet.jpg",
    },
    {
        id: 7,
        name: "Stainless Steel Water Bottle",
        category: "Sports",
        price: 19.99,
        image: "/shop-placeholder/water-bottle.jpg",
    },
    {
        id: 8,
        name: "Wallet Set",
        category: "Home & Garden",
        price: 24.99,
        oldPrice: 34.99,
        image: "/shop-placeholder/wallet.jpg",
    },
]


export default async function Home({ params, }: { params: Promise<{ hostId: number }> }) {
    // Get hostId from params
    const { hostId } = await params
    // get storeName from hostID
    const store = await getStore(hostId)

    if (!store) {
        notFound()
    }
    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-6 md:gap-10">
                        <Link href="/" className="hidden items-center space-x-2 md:flex">
                            <span className="text-xl font-bold">{store.name}</span>
                        </Link>
                        <button className="flex items-center space-x-2 md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="font-bold">Menu</span>
                        </button>
                        <nav className="hidden gap-6 md:flex">
                            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                                Home
                            </Link>
                            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                Shop
                            </Link>
                            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                Categories
                            </Link>
                            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                Deals
                            </Link>
                            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                About
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <form className="hidden items-center lg:flex">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[300px]"
                                />
                            </div>
                        </form>
                        <Button variant="ghost" size="icon" className="text-muted-foreground">
                            <Search className="h-5 w-5 md:hidden" />
                            <Heart className="hidden h-5 w-5 md:block" />
                        </Button>
                        <Button variant="ghost" size="icon" className="relative text-muted-foreground">
                            <ShoppingCart className="h-5 w-5" />
                            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
                        </Button>
                        <Button className="hidden md:flex">Sign In</Button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative">
                    <div className="container py-6 md:py-12">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Summer Collection 2024
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Discover our new summer collection with up to 40% off on selected items.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button size="lg" className="h-12">
                                        Shop Now
                                    </Button>
                                    <Button size="lg" variant="outline" className="h-12">
                                        Explore Collection
                                    </Button>
                                </div>
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-xl bg-muted lg:aspect-square">
                                <Image src="/shop-placeholder/hero-summer.jpg" alt="Summer Collection" fill className="object-cover" priority />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="py-12">
                    <div className="container">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Products</h2>
                            <p className="text-muted-foreground">Check out our most popular products</p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {products.map((product) => (
                                <Card key={product.id} className="overflow-hidden">
                                    <div className="relative aspect-square">
                                        <Image
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-2 top-2 rounded-full bg-white/80 backdrop-blur-sm"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <CardContent className="p-4">
                                        <div className="space-y-1">
                                            <h3 className="font-medium">{product.name}</h3>
                                            <p className="text-sm text-muted-foreground">{product.category}</p>
                                        </div>
                                        <div className="mt-2 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold">${product.price.toFixed(2)}</span>
                                                {product.oldPrice && (
                                                    <span className="text-sm text-muted-foreground line-through">
                                                        ${product.oldPrice.toFixed(2)}
                                                    </span>
                                                )}
                                            </div>
                                            <Button size="sm" variant="ghost" className="h-8 w-8 rounded-full p-0">
                                                <ShoppingCart className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-10 flex justify-center">
                            <Button variant="outline" className="gap-1">
                                View All Products
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Special Offer */}
                <section className="bg-muted py-12">
                    <div className="container">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="relative aspect-video overflow-hidden rounded-xl bg-muted lg:aspect-square">
                                <Image src="/shop-placeholder/special-offer.jpg" alt="Special Offer" fill className="object-cover" />
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                                    Limited Time Offer
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Up to 50% Off</h2>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Get amazing discounts on our premium collection. Offer valid until June 30, 2024.
                                    </p>
                                </div>
                                <Button size="lg" className="w-fit">
                                    Shop the Sale
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="py-12">
                    <div className="container">
                        <div className="rounded-xl bg-primary/5 p-6 md:p-10">
                            <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-2xl font-bold md:text-3xl">Subscribe to our Newsletter</h2>
                                <p className="mt-2 text-muted-foreground">Stay updated with our latest products and exclusive offers</p>
                                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
                                    <Input type="email" placeholder="Enter your email" className="sm:w-[300px]" />
                                    <Button>Subscribe</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t bg-muted/40">
                <div className="container py-10">
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                        <div>
                            <h3 className="mb-4 text-lg font-medium">ShopNow</h3>
                            <p className="text-sm text-muted-foreground">Your one-stop destination for all your shopping needs.</p>
                            <div className="mt-4 flex gap-4">
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-facebook"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-twitter"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-instagram"
                                    >
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 text-lg font-medium">Shop</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        All Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        New Arrivals
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        Best Sellers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        Deals & Promotions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-lg font-medium">Customer Service</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        Shipping & Returns
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        Track Order
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-lg font-medium">About</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        Our Story
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Separator className="my-6" />
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-center text-sm text-muted-foreground">
                            © {new Date().getFullYear()} ShopNow. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <Image src="/shop-placeholder/visa.png" alt="Visa" width={50} height={30} className="h-8 w-auto" />
                            <Image src="/shop-placeholder/mastercard.png" alt="Mastercard" width={50} height={30} className="h-8 w-auto" />
                            <Image src="/shop-placeholder/paypal.png" alt="PayPal" width={50} height={30} className="h-8 w-auto" />
                            <Image src="/shop-placeholder/applepay.png" alt="Apple Pay" width={50} height={30} className="h-8 w-auto" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

