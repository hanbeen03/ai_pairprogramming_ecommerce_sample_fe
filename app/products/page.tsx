import { useEffect, useState } from 'react';
import ProductList from "@/shop-page";

const Page = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://api.example.com/products');
            const data = await res.json();
            setProducts(data);
        }

        fetchData();
    }, []);

    if (!products) return <div>Loading...</div>;

    return (
        <div>
            <ProductList />
        </div>
    );
}

export default Page;