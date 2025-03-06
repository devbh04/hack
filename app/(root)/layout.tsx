import AppBar from "@/components/shared/appbar";

export default function RootLayout({ children }) {
  return (
    <main lang="en" className="">
      <AppBar itemName={"Milk"} itemCat={"Dairy"} />
      <div className="pt-20"> {/* Add padding to prevent overlap with AppBar */}
        {children}
      </div>
    </main>
  );
}