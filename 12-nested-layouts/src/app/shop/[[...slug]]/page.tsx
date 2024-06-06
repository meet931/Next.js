export default function Shop({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
    // here ? is used for optional chaining. It checks whether slug is present or not. If yes then check the length of slug. If length is 2 then it will show the details of feature and concept. If length is 1 then it will show the details of feature. If length is not 1 or 2 then it will show the details of shop.

    // shop/feature/concept -> here, feature/concept is the slug.
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing Details of Feature: {params.slug[0]} and Concept: {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Details of Feature: {params.slug[0]}</h1>;
  }
  return <h1>Details of Shop</h1>
}
