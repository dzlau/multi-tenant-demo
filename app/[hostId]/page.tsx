import HostnameDisplay from "@/components/hostname-display";

export default async function DomainSubdomain({ params, }: { params: Promise<{ hostId: string }> }) {
    const { hostId } = await params
    return (
        <div>
            <h1>Subdomain</h1>
            <HostnameDisplay hostId={hostId} />
        </div>
    );
}