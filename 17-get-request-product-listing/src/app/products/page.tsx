"use client";
import { useEffect, useState } from "react";
import Button from "../components/Button";

interface Product {
  id: number;
  title: string;
  description: string;
  rating: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      let data = await response.json();

      console.log("Data: ", data);

      setProducts(data.products);
    };

    fetchData();

  }, []);

  const addToCart = (id:number) => {
    console.log("Clicked"); 
    console.log(id);

    let productData = JSON.parse(localStorage.getItem("products")) || [];
    console.log("Product Data: ", productData);

    products.find((product) => {
      if(product.id === id) {
        productData.push(product);
        localStorage.setItem("products", JSON.stringify(productData));
      }

    });
  }

  const removeProduct = (id:number) => {
    console.log(id, "Remove Clicked");
    fetch("https://dummyjson.com/products", {
      method: "DELETE"
    })
    .then(response => {
      if(response.ok) {
        console.log("Product is removed successfully...")
      } else {
        console.log("Product is not removed...")
      }
      return response.json();
    }
  )
    .then(error => console.error(error))

    let confirmed = confirm("Are you sure you want to remove this product?");

    if(confirmed) {
      if(localStorage.getItem("products")){
        let productData = JSON.parse(localStorage.getItem("products"));
        console.log("Product Data: ", productData);
       
        // console.log("ID: ", id);
        productData.splice(id,1)
      } else {
        localStorage.setItem("products", JSON.stringify(products));
      }
    }



  }

  
  return (
    <div>
      <h1 className="flex justify-center font-extrabold text-white text-lg">
        Product Lists
      </h1>
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <li key={product.id} className="bg-slate-200 h-screen">
            <div className="w-[300px] rounded-md border bg-slate-500">
              <img
                src={product.images[0]}
                alt="Laptop"
                className="h-[200px] w-full rounded-t-md object-cover"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold text-black">
                  {product.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </h1>
                <p className="mt-3 text-sm text-white-600">
                  {product.description}
                </p>
                <div className="mt-4">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    Rating: {product.rating}
                  </span>
                </div>
                {/* onClick={storeData} */}

                {/* <Button btnName="Add to Cart" onClick={addToCart(product.id)}  /> */}
                <Button btnName="Add to Cart" onClick={() => addToCart(product.id)} />
                <Button btnName="Remove" onClick={() => removeProduct(product.id)} />
                
                {/* onClick={remove} */}
                
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Products;
