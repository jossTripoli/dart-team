type Props = {
  children: React.ReactNode;
}

const TeamLayout = ({ children }: Props) => {
  return (
    <main className="">
      {children}  
    </main>
  );
}

export default TeamLayout;