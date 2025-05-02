import { Redis } from "@upstash/redis"

const redis = new Redis({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
})

export async function addDomainToRedis(domain: string, shopId: number) {
    await redis.set(domain, shopId)
}

export async function getIdFromHostname(hostname: string) {
    console.log('hostname', hostname)
    const shopId = await redis.get(hostname)
    console.log('shopId', shopId)
    return shopId
}



