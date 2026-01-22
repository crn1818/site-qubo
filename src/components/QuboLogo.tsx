const QuboLogo = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        className={sizes[size]} 
        viewBox="0 0 200 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="30" r="20" stroke="currentColor" strokeWidth="6" className="text-primary"/>
        <rect x="15" y="52" width="20" height="6" rx="3" fill="currentColor" className="text-primary"/>
        <path d="M55 10 Q55 50 55 50 Q55 50 75 50 Q95 50 95 30 Q95 10 75 10 Q55 10 55 10 Z" stroke="currentColor" strokeWidth="6" fill="none" className="text-primary"/>
        <path d="M105 10 L105 40 Q105 50 115 50 Q135 50 135 40 L135 10" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" className="text-primary"/>
        <circle cx="165" cy="30" r="20" stroke="currentColor" strokeWidth="6" className="text-primary"/>
        <line x1="180" y1="45" x2="190" y2="55" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-primary"/>
      </svg>
    </div>
  );
};

export default QuboLogo;
