import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="mt-auto block pb-2 pt-4 text-sm text-zinc-500 dark:text-zinc-400">
      This website is{" "}
      <a
        target="_blank"
        href={`${siteConfig.links.github}/asierbayon.com`}
        className="underline"
      >
        open source
      </a>
      . Do whatever you want with its code.
    </footer>
  )
}
