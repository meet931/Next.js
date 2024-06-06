import Link from 'next/link';

export default function ProductsDetails() {
  return (
    <div>
      <h1>List of Products</h1>
      
      <Link href="/"><h2>Home</h2></Link>
      <Link href="products/1"><h2>Product 1</h2></Link>
      <Link href="products/2"><h2>Product 2</h2></Link> 
      <Link href="products/3" replace><h2>Product 3</h2></Link>
      

      {/* replace will replace history root to home root */}
    </div>
  );
}
