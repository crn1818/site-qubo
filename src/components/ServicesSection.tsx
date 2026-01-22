import { motion } from "framer-motion";
import { Code, Globe, Smartphone, Database, Cloud, Cog } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações web modernas, responsivas e otimizadas para performance.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e híbridos para iOS e Android com experiência de usuário excepcional.",
  },
  {
    icon: Code,
    title: "Software Personalizado",
    description: "Sistemas sob medida para automatizar processos e aumentar a eficiência do seu negócio.",
  },
  {
    icon: Database,
    title: "Gestão de Dados",
    description: "Soluções de banco de dados, BI e análise de dados para decisões estratégicas.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Migração, gerenciamento e otimização de infraestrutura em nuvem.",
  },
  {
    icon: Cog,
    title: "Consultoria Tech",
    description: "Assessoria estratégica para modernizar e escalar suas operações tecnológicas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços tecnológicos para impulsionar o crescimento do seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
