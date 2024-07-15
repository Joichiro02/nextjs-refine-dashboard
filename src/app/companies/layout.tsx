import LayoutContainer from "@components/layout";

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
   <LayoutContainer>
    {children}
   </LayoutContainer>
  )
}
