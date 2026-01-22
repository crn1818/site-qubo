import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Carlos Silva",
    role: "CEO & Fundador",
    bio: "Mais de 15 anos de experiência em tecnologia e gestão de projetos. Apaixonado por inovação e transformação digital.",
    avatar: "CS",
    color: "bg-primary",
  },
  {
    name: "Ana Santos",
    role: "CTO",
    bio: "Especialista em arquitetura de sistemas e desenvolvimento de software. Lidera a equipe técnica com foco em excelência.",
    avatar: "AS",
    color: "bg-accent",
  },
  {
    name: "Pedro Costa",
    role: "Tech Lead",
    bio: "Desenvolvedor full-stack com expertise em React, Node.js e cloud computing. Mentor da equipe de desenvolvimento.",
    avatar: "PC",
    color: "bg-primary/80",
  },
  {
    name: "Mariana Oliveira",
    role: "UX/UI Designer",
    bio: "Designer criativa focada em experiências digitais memoráveis. Transforma complexidade em interfaces intuitivas.",
    avatar: "MO",
    color: "bg-accent/80",
  },
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <section id="equipe" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossa <span className="text-gradient">Equipe</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Profissionais apaixonados por tecnologia, unidos para entregar as melhores soluções.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer"
            >
              <div className="p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 text-center">
                <div
                  className={`w-20 h-20 rounded-full ${member.color} flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform`}
                >
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-3 line-clamp-2">
                  {member.bio}
                </p>
                <p className="text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Clique para ver mais
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl p-8 max-w-md w-full relative border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <div
                  className={`w-24 h-24 rounded-full ${selectedMember.color} flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-primary-foreground`}
                >
                  {selectedMember.avatar}
                </div>
                <h3 className="text-2xl font-bold mb-1">{selectedMember.name}</h3>
                <p className="text-primary font-medium mb-4">{selectedMember.role}</p>
                <p className="text-muted-foreground mb-6">{selectedMember.bio}</p>

                <div className="flex justify-center gap-3">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
