import { Link } from "wouter";
import logo from "../../assets/worksta-logo.png";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
}

export function Logo({ size = "medium", showText = true }: LogoProps) {
  const sizeMap = {
    small: "h-8 w-8",
    medium: "h-10 w-10",
    large: "h-12 w-12"
  };

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="rounded-md overflow-hidden bg-primary">
        <img src={logo} alt="Worksta" className={`${sizeMap[size]}`} />
      </div>
      {showText && (
        <span className="font-extrabold tracking-tight text-2xl">
          <span className="text-white">Work</span>
          <span className="text-[#fdf568]">sta</span>
        </span>
      )}
    </Link>
  );
}