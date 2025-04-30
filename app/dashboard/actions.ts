"use server"
import { getDomainSettings } from "@/lib/vercel";
export async function checkDomainSettingsValid(hostname: string) {

    const domainSettings = await getDomainSettings(hostname)

    if (!domainSettings) {
        return { error: "Domain settings not found" }
    }
    return domainSettings.misconfigured ? true : true
}