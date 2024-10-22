import { z } from 'zod'

const ButtonLinkPropsSchema = z.object({
  href: z.string().url(),
  target: z.string().optional(),
  className: z.string().optional(),
  label: z.string().min(1)
})

export type ButtonLinkProps = z.infer<typeof ButtonLinkPropsSchema>

const ButtonLink = ({
  href,
  target = '_blank',
  className,
  label
}: ButtonLinkProps) => {
  return (
    <a
      href={href}
      target={target}
      className={`relative px-2 py-2 w-full flex items-center text-black whitespace-nowrap ${className}`}
    >
      <span className="font-medium">{label}</span>
    </a>
  )
}

export default ButtonLink

