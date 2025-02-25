import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Product {
  category_id: string;
  id: string;
  name: string;
  price: number;
  image_url: string;
}

interface ProductListProps {
  products: Product[];
}

export function ProductList({products}: ProductListProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo and Navigation */}
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold">MallCo</h1>
              <nav className="hidden md:flex gap-6">
                <Link href="#" className="text-gray-600 hover:text-black">
                  Women
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  Men
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  Kids
                </Link>
              </nav>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 flex-1 justify-end max-w-md">
              <Input type="search" placeholder="Search for products" className="max-w-[300px]" />
              <Button className="bg-gray-900 hover:bg-gray-800">Search</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-base font-medium mb-4">Category</h2>
          <div className="flex gap-2">
            {["All", "T-shirts", "Pants", "Jacket"].map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-200 rounded-md transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative aspect-square">
                <Image src={product.image_url || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-xl font-bold mt-1">${product.price}</p>
                {/* <p className="text-sm text-gray-600 mt-2">{product.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

