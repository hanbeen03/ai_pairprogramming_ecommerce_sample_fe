import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "베이직 티셔츠",
      price: "29,000",
      category: "티셔츠",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "슬림핏 청바지",
      price: "59,000",
      category: "바지",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "데님 자켓",
      price: "89,000",
      category: "자켓",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "오버핏 티셔츠",
      price: "35,000",
      category: "티셔츠",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 5,
      name: "와이드 슬랙스",
      price: "65,000",
      category: "바지",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 6,
      name: "가죽 자켓",
      price: "129,000",
      category: "자켓",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-wrap gap-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="카테고리 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체</SelectItem>
            <SelectItem value="티셔츠">티셔츠</SelectItem>
            <SelectItem value="바지">바지</SelectItem>
            <SelectItem value="자켓">자켓</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="group">
            <div className="border rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative aspect-square">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{product.category}</span>
                  <span className="font-semibold">￦{product.price}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

