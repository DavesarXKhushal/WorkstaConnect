import { Link } from "wouter";
import logo from "../../assets/worksta-logo.png";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
  darkMode?: boolean;
}

export function Logo({ size = "medium", showText = true, darkMode = false }: LogoProps) {
  const sizeMap = {
    small: "h-8 w-8",
    medium: "h-10 w-10",
    large: "h-12 w-12"
  };

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className={`rounded-full overflow-hidden ${darkMode ? 'shadow-lg' : 'shadow-md'} ${darkMode ? 'bg-primary' : 'bg-primary'}`}>
        <img src={logo} alt="Worksta" className={`${sizeMap[size]}`} />
      </div>
      {showText && (
        <span className="font-bold tracking-tight text-2xl">
          <span className={darkMode ? "text-white" : "text-gray-900"}>Work</span>
          <span className="text-primary">sta</span>
        </span>
      )}
    </Link>
  );
}