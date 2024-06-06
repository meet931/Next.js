// params is an object that contains the dynamic route parameters as key value pairs.

import { notFound } from "next/navigation";

export default function ProductsDetails({params}: {params: {productId: string}}) {

    if(parseInt(params.productId) > 1000) {
        return notFound();
    }
    
    return (
        <div>
            <h1>Details of Product {params.productId}</h1>
        </div>
    );
}