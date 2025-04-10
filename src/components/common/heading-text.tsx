interface HeadingProps {
  children: React.ReactNode
  subtext?: string
}

export function HeadingText({ children, subtext }: HeadingProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold">{children}</h2>
      {subtext && (
        <p className="font-light text-zinc-500 dark:text-zinc-400">{subtext}</p>
      )}
    </div>
  )
}
