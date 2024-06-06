"use client";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
}

const ProductsPage = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {

    const fetchData = async() => {
      const response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
    
      setProducts(data.products);
      console.log(data.products)
    }

    fetchData();
  }, []);


  return (
    <>
      <h1>Product Lists</h1>
      <ul>
        {products.map((product) => 
          <li key={product.id}>
            {product.title}
          </li>
        )}
      </ul>
    </>
  );
};

export default ProductsPage;
