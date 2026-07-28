export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[200] h-screen w-screen bg-white">
      {children}
    </div>
  );
}
