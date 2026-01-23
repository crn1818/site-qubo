import { Instagram, Linkedin, Github } from "lucide-react";
import QuboLogo from "./QuboLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <QuboLogo size="sm" />
            {/* 1. MUDAR AQUI O TEXTO AO LADO DO LOGO */}
            <span className="text-muted-foreground"> Qubo Tecnologia</span> 
          </div>

          <div className="flex items-center gap-4">
            {/* ... seus ícones de redes sociais continuam iguais ... */}
            
           <a
  href="https://www.linkedin.com/company/qubotecnologia/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
  aria-label="LinkedIn"
>
  <Linkedin size={20} />
</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            
            © {currentYear} Qubo Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;