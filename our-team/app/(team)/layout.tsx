import { Header } from "../../components/header";

type Props = {
  children: React.ReactNode;
}

const MaketingLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}  
      </main>
    </div>
  );
}

export default MaketingLayout;