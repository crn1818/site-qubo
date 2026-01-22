const QuboLogo = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  // Ajustando os tamanhos para pixel (h-8 é 32px, h-12 é 48px, etc)
  const pixelSizes = {
    sm: 32,
    md: 48,
    lg: 64
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Aqui estamos chamando a SUA imagem em vez de desenhar o SVG */}
      <img 
        src="/image1.png" 
        alt="QUBO" 
        style={{ height: pixelSizes[size], width: "auto" }}
        className="object-contain"
      />
    </div>
  );
};

export default QuboLogo;