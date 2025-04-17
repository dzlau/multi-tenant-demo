export default async function Shop({ params, }: { params: Promise<{ hostId: string }> }) {
    const { hostId } = await params
    return (
        <h1>Shop   {hostId} </h1>
    )

}