import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h2>Link Component Navigation</h2>

            <pre>
                <Link href="/">Home</Link> &nbsp; &nbsp;
                <Link href="products">Products</Link> &nbsp; &nbsp;
                <Link href="products/1">Product 1</Link> &nbsp; &nbsp;
                <Link href="products/2">Product 2</Link> &nbsp; &nbsp;
                <Link href="products/3">Product 3</Link> &nbsp; &nbsp;
                <Link href="shop">Shop</Link>  &nbsp; &nbsp;
                <Link href="login">Login</Link> &nbsp; &nbsp;
                <Link href="register">Register</Link>
            </pre>
            
        </div>
    );
}