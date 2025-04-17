import HostnameDisplay from "@/components/hostname-display";

export default async function DomainSubdomain({ params, }: { params: Promise<{ domain: string }> }) {
    const { domain } = await params
    console.log(domain);
    return (
        <div>
            <h1>Subdomain</h1>
            <HostnameDisplay domain={domain} />
        </div>
    );
}