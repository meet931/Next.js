import { notFound } from "next/navigation";

export default function ReviewIdOfProucts(
    {params}: {
        params: {
            productId: string, 
            reviewId: string
        }
    }
) {
    if(parseInt(params.reviewId) > 1000) {
        return notFound();
    }
    return (
        <div>
            <h1>
                Review ID : {params.reviewId} of Product ID: {params.productId}
            </h1>
        </div>
    );
}