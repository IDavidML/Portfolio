import FixedHeader from "@/components/FixedHeader"

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { id: string }
}) {
  return (
    <>
      <FixedHeader/>
      <section className="relative mt-32 mb-8 px-4 max-w-[1100px] mx-auto">
        {children}
      </section>
    </>
  )
}