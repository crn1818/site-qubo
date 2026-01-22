import { motion } from "framer-motion";

const technologies = [
  { name: "Microsoft 365", category: "Produtividade & Cloud" },
  { name: "Azure", category: "Cloud Computing" },
  { name: "AWS", category: "Cloud Computing" },
  { name: "Fortinet", category: "Segurança de Rede" },
  { name: "Cisco", category: "Redes & Conectividade" },
  { name: "Ubiquiti (Unifi)", category: "Wi-Fi Corporativo" },
  { name: "Arcserve", category: "Backup & Disaster Recovery" },
  { name: "Veeam", category: "Backup Corporativo" },
  { name: "Windows Server", category: "Sistemas Operacionais" },
  { name: "BitDefender", category: "Antivírus e Segurança" },
  { name: "VMware", category: "Virtualização" },
  { name: "Idrive", category: "Backup cloud to cloud" },
];
const TechSection = () => {
  return (
    <section id="tecnologias" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tecnologias & <span className="text-gradient">Ferramentas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Utilizamos as tecnologias mais confiáveis do mercado para entregar soluções e serviços de alta qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 rounded-xl glass-card text-center cursor-default group"
            >
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
