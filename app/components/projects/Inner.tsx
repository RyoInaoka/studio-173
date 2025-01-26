export const Inner = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={`relative block max-w-inner w-inner mx-auto h-full ${className || ''}`}>{children}</div>;
};