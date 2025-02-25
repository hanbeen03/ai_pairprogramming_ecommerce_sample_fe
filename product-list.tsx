import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

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

export function ProductList({ products }: ProductListProps) {

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
                <Image src={product.image_url || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{product.category_id}</span>
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

