import ButtonLink, { type ButtonLinkProps } from '../ButtonLink'

const LINKS: ButtonLinkProps[] = [
  {
    label: 'Tanstack Query',
    href: 'https://tanstack.com/query/latest'
  },
  {
    label: 'Axios',
    href: 'https://axios-http.com/docs/intro'
  },
  {
    label: 'Zod',
    href: 'https://zod.dev/'
  }
]

const Sidebar = () => {
  return (
    <div className="flex">
      <aside className="flex h-screen flex-col  py-2 px-2 items-center border-r border-gray-200 bg-inherit">
        {LINKS.map(item => (
          <ButtonLink label={item.label} href={item.href} key={item.label} />
        ))}
      </aside>
    </div>
  )
}

export default Sidebar

