export default function Layout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { id: string }
}) {
  return (
    <section className="h-screen relative my-8 px-4 max-w-[1000px] mx-auto">
      {children}
    </section>
  )
}