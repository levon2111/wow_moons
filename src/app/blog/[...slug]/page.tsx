export default function SingleService({params}: {
    params: {
        slug: string[];
    }
}) {
    console.log(params.slug.length)
    console.log(params.slug[0])
    return (

        <h1>Single Blog {params.slug[0]} </h1>
    )
}
