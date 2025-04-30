import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
    bearerToken: process.env.VERCEL_TOKEN,
});

export async function addDomainToProject(domain: string) {
    const projectId = process.env.VERCEL_PROJECT; // The project name used in the deployment URL
    //if not production, skip
    if (process.env.VERCEL_ENV !== 'production') {
        return
    }
    if (!projectId) {
        console.error('Project ID is not defined. Please set the VERCEL_PROJECT environment variable.');
        return;
    }

    try {
        // Add a new domain
        const addDomainResponse = await vercel.projects.addProjectDomain({
            idOrName: projectId,
            requestBody: {
                name: domain,

            },
        });


        console.log(`Domain added: ${addDomainResponse.name}`);
    } catch (error) {
        console.error(
            error instanceof Error ? `Error: ${error.message}` : String(error),
        );
    }
}


export async function getDomainSettings(domain: string) {
    const projectId = process.env.VERCEL_PROJECT;
    const teamId = process.env.VERCEL_TEAM_ID;
    if (!projectId) {
        console.error('Project ID is not defined. Please set the VERCEL_PROJECT environment variable.');
        return;
    }
    if (!teamId) {
        console.error('Team ID is not defined. Please set the VERCEL_TEAM_ID environment variable.');
        return;
    }

    const result = await vercel.domains.getDomainConfig({
        domain: domain,
        teamId: teamId
    });

    return result
}
