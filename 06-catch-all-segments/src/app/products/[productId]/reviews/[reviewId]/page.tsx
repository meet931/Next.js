export default function ReviewIdOfProucts(
    {params}: {
        params: {
            productId: string, 
            reviewId: string
        }
    }
) {
    return (
        <div>
            <h1>
                Review ID : {params.reviewId} of Product ID: {params.productId}
            </h1>
        </div>
    );
}