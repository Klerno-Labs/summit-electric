const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <section className="py-16 bg-slate-50">{children}</section>;
};

export default SectionWrapper;