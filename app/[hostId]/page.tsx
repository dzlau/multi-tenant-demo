import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingBag, Heart, ChevronDown, MapPin, ChevronRight, ChevronLeft, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const STORE_NAMES: any = {
    '1': "Dennis Weed",
    '2': "Lukes Weed",
    '3': "James Weed",
    '4': "Johns Weed"
}
const getName = (hostId: string) => {
    return STORE_NAMES[hostId[0]] || "Default Store Name"

}
export default async function Home({ params, }: { params: Promise<{ hostId: string }> }) {
    const { hostId } = await params
    const storeName = await getName(hostId)
    return (
        <div className="min-h-screen bg-white">
            {/* Top Bar */}
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-700" />
                    <span className="ml-2 text-sm">How do you want to shop?</span>
                    <ChevronDown className="h-4 w-4 ml-1 text-gray-700" />
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="#" className="text-sm flex items-center">
                        SIGN IN
                    </Link>
                    <Link href="#" className="flex items-center">
                        <Heart className="h-5 w-5" />
                        <span className="ml-1 text-sm">WISHLIST</span>
                    </Link>
                </div>
            </div>

            {/* Main Header */}
            <div className="border-y border-gray-200">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="text-blue-600 text-4xl font-bold">
                        {storeName}
                    </Link>
                    <div className="flex items-center w-full max-w-md mx-4">
                        <Input type="text" placeholder="Search" className="rounded-r-none border-r-0" />
                        <Button variant="default" size="icon" className="h-10 w-10 rounded-l-none bg-blue-600 hover:bg-blue-700">
                            <Search className="h-5 w-5" />
                        </Button>
                    </div>
                    <Button variant="ghost" size="icon">
                        <ShoppingBag className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            {/* Navigation */}
            <div className="border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-6">
                        <Link href="#" className="py-3 flex items-center font-medium">
                            Shop <ChevronDown className="ml-1 h-4 w-4" />
                        </Link>
                        <Link href="#" className="py-3 flex items-center font-medium">
                            <span className="text-orange-500">🔥</span> Deals
                        </Link>
                        <Link href="#" className="py-3 font-medium">
                            Delivery
                        </Link>
                        <Link href="#" className="py-3 font-medium">
                            Loyalty
                        </Link>
                        <Link href="#" className="py-3 flex items-center font-medium">
                            Categories <ChevronDown className="ml-1 h-4 w-4" />
                        </Link>
                        <Link href="#" className="py-3 font-medium">
                            Locations
                        </Link>
                        <Link href="#" className="py-3 flex items-center font-medium">
                            Explore <ChevronDown className="ml-1 h-4 w-4" />
                        </Link>
                        <Link href="#" className="py-3 flex items-center font-medium">
                            About Us <ChevronDown className="ml-1 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hero Banner */}
            <div className="relative bg-purple-800 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/cosmic-amethyst.png')] bg-cover bg-center opacity-80"></div>
                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-white text-7xl font-bold tracking-wider mb-2">SPACE GEM</h1>
                        <p className="text-white text-sm mb-8">
                            out of this world gummies • made with ice water hash • woman owned
                        </p>
                        <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
                            EXPLORE SPACE GEM &gt;
                        </Button>
                    </div>

                    {/* Product Images */}
                    <div className="absolute top-10 left-10">
                        <Image
                            src="/orange-gummy-container.png"
                            alt="Space Gem Product"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </div>
                    <div className="absolute top-20 right-20">
                        <Image
                            src="/rainbow-gummy-mix.png"
                            alt="Space Gem Product"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </div>
                    <div className="absolute bottom-10 left-1/4">
                        <Image
                            src="/red-gummy-treats.png"
                            alt="Space Gem Product"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </div>
                    <div className="absolute bottom-20 right-1/4">
                        <Image
                            src="/green-gummy-treats.png"
                            alt="Space Gem Product"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center pb-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mx-1"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-50 mx-1"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-50 mx-1"></div>
                </div>
            </div>

            {/* Shop by Category */}
            <div className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Shop by Category</h2>
                        <div className="flex items-center">
                            <span className="mr-4">Shop All</span>
                            <div className="flex space-x-2">
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="group relative overflow-hidden rounded-lg">
                            <Image
                                src="/vibrant-cannabis.png"
                                alt="Flower"
                                width={300}
                                height={300}
                                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-white font-bold text-xl">FLOWER</h3>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg">
                            <Image
                                src="/blue-essentials.png"
                                alt="Pre-Rolls"
                                width={300}
                                height={300}
                                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-white font-bold text-xl">PRE-ROLLS</h3>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg">
                            <Image
                                src="/vape-cartridge-red.png"
                                alt="Vapes & Carts"
                                width={300}
                                height={300}
                                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-white font-bold text-xl">VAPES & CARTS</h3>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg">
                            <Image
                                src="/colorful-cannabis-treats.png"
                                alt="Edibles"
                                width={300}
                                height={300}
                                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-white font-bold text-xl">EDIBLES</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Daily Deals */}
            <div className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center">
                            Daily Deals <span className="text-orange-500 ml-2">🔥</span>
                        </h2>
                        <div className="flex items-center">
                            <span className="mr-4">SEE ALL</span>
                            <div className="flex space-x-2">
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <Image
                                src="/cannabis-gummies-sale.png"
                                alt="30% OFF CAMINO GUMMIES"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <Image
                                src="/placeholder.svg?height=300&width=300&query=cannabis+flower+30+percent+off+gold+background"
                                alt="30% OFF MAVEN FLOWER"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <Image
                                src="/placeholder.svg?height=300&width=300&query=cannabis+pre-rolls+20+percent+off+yellow+background"
                                alt="20% OFF KWIK ROLL"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <Image
                                src="/placeholder.svg?height=300&width=300&query=cannabis+edibles+2+for+1+purple+background"
                                alt="2 FOR 1 MARIGOLD"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






// import HostnameDisplay from "@/components/hostname-display";

// export default async function DomainSubdomain({ params, }: { params: Promise<{ hostId: string }> }) {
//     const { hostId } = await params
//     return (
//         <div>
//             <h1>Subdomain</h1>
//             <HostnameDisplay hostId={hostId} />
//         </div>
//     );
// }