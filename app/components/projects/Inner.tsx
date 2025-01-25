export const Inner = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative block max-w-inner w-inner mx-auto h-full">{children}</div>;
};