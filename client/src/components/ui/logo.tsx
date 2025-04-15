import { Link } from "wouter";
import logo from "../../assets/images/worksta-logo.png";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
  darkMode?: boolean;
  className?: string;
}

export function Logo({ size = "medium", showText = true, darkMode = false, className = "" }: LogoProps) {
  const sizeMap = {
    small: "h-8 w-8",
    medium: "h-10 w-10",
    large: "h-12 w-12"
  };

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className={`rounded-full overflow-hidden ${darkMode ? 'shadow-lg' : 'shadow-md'} bg-primary animate-pulse-soft`}>
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