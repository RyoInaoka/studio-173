export const Inner = ({ children, className, isNarrow }: { children: React.ReactNode, className?: string, isNarrow?: boolean }) => {
  return <div className={`relative block max-w-inner mx-auto h-full ${className || ''} ${isNarrow ? 'w-[750px]' : 'w-inner'}`}>{children}</div>;
};