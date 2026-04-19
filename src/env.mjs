import { z } from "zod"

const resolvedVercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL

const resolvedAppUrl =
  process.env.NEXT_PUBLIC_APP_URL ??
  (resolvedVercelUrl ? `https://${resolvedVercelUrl}` : undefined)

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_APP_URL: resolvedAppUrl,
})

if (!parsedEnv.success) {
  throw new Error("Invalid environment variables")
}

export const env = parsedEnv.data
