type Props = {
  children: React.ReactNode;
}

const TeamLayout = ({ children }: Props) => {
  return (
    <main className="bg-gray-50">
      <h1 className="text-2xl font-bold p-4">Fall 2024</h1>
      {children}  
    </main>
  );
}

export default TeamLayout;