// params is an object that contains the dynamic route parameters as key value pairs.

export default function ProductsDetails({params}: {params: {productId: string}}) {
    return (
        <div>
            <h1>Details of Product {params.productId}</h1>
        </div>
    );
}