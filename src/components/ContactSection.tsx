import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, MapPin, Phone, Mail, Loader2 } from "lucide-react";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 👇 COLE SUAS CHAVES AQUI DENTRO DAS ASPAS 👇
    const serviceID = "service_2uc6yqb";
    const templateID = "template_2owt2kb";  
    const publicKey = "I0fpuSj_onBnBvEbV";

    emailjs
      .sendForm(serviceID, templateID, form.current!, publicKey)
      .then(
        () => {
          alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
          setLoading(false);
          form.current?.reset(); // Limpa os campos depois de enviar
        },
        (error) => {
          alert("Erro ao enviar. Tente novamente mais tarde.");
          console.error("Erro EmailJS:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Entre em <span className="text-primary">Contato</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre como podemos ajudar sua empresa!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <input
                type="text"
                name="user_name" // Esse nome deve ser igual ao do template no site
                placeholder="Seu nome"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email" 
                placeholder="Seu e-mail"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div>
              <textarea
                name="message" 
                placeholder="Sua mensagem"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Enviando...
                </>
              ) : (
                <>
                  Enviar Mensagem <Send size={20} />
                </>
              )}
            </button>
          </form>

          {/* Lado Direito - Informações */}
          <div className="bg-secondary/30 p-8 rounded-2xl h-fit">
            <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Endereço</h4>
                  <p className="text-muted-foreground text-sm">
                    R. Riachuelo, 1038 - Centro Histórico, Porto Alegre - RS
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Telefone</h4>
                  <p className="text-muted-foreground text-sm">+55 (51) 3211-3355</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">E-mail</h4>
                  <p className="text-muted-foreground text-sm">suporte@qubo.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;