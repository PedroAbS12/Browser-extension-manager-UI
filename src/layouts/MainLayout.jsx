export default function MainLayout({ children }) {
  return (
    <main
      className={`
        min-h-screen max-w-full overflow-x-hidden
        px-2 sm:px-6 md:px-12 lg:px-16 xl:px-18
        py-6 sm:py-8 md:py-10
        bg-[#ebf4fd] dark:bg-gradient-to-b dark:from-[#050a1d] dark:to-[#09153f]
      `}
    >
      {children}
    </main>
  );
}
