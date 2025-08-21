import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Contato</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        Entre em contato comigo preenchendo o formulário abaixo 👇
      </p>
      <ContactForm />
    </section>
  );
}
