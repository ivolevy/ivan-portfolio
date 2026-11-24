import { profile } from "../data/portfolioData";

export const Footer = () => {
  return (
    <footer className="border-t border-line py-8 text-xs text-muted">
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-8">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>Buenos Aires, Argentina</span>
      </div>
    </footer>
  );
};
