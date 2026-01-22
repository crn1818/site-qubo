import { motion } from "framer-motion";
import { 
  Network,       
  Server,       
  Briefcase,     
  ShieldCheck,   
  MonitorCog,    
  Cloud          
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Redes de computadores",
    description: "Projetamos e gerenciamos redes corporativas (cabeadas e Wi-Fi) de alta performance. Garantimos conectividade estável, segura e veloz para manter sua equipe sempre online e produtiva.",
  },
  {
    icon: Server,
    title: "Infraestrutura de TI",
    description: "A base sólida que seu negócio precisa. Implementamos e mantemos servidores, estações de trabalho e equipamentos essenciais, criando um ambiente tecnológico robusto, organizado e pronto para crescer.",
  },
  {
    icon: Briefcase,
    title: "Consultoria de TI",
    description: "Sistemas sob medida Inteligência estratégica para sua empresa. Analisamos seus processos e indicamos as melhores soluções tecnológicas para reduzir custos, otimizar tarefas e impulsionar a inovação no seu negócio. automatizar processos e aumentar a eficiência do seu negócio.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança da Informação",
    description: "Soluções de Blindagem completa para seus ativos digitais. Implementamos firewalls, proteção de dados e políticas de segurança avançadas para defender sua empresa contra ciberataques, vírus e vazamento de informações.banco de dados, BI e análise de dados para decisões estratégicas.",
  },
  {
    icon: MonitorCog,
    title: "Gestão de TI",
    description: "Foque no seu negócio enquanto cuidamos da tecnologia. Oferecemos monitoramento constante, suporte técnico ágil (Helpdesk) e manutenção preventiva para evitar paradas inesperadas na sua operação.",
  },
  {
    icon: Cloud,
    title: "Armazenamento em Nuvem",
    description: "Assessoria Mobilidade e segurança para seus arquivos. Realizamos a migração e gestão de dados na nuvem (Cloud), permitindo acesso remoto seguro e backups automáticos para que você nunca perca informações importantes. para modernizar e escalar suas operações tecnológicas.",
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
