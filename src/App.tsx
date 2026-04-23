/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Code2, 
  Layout, 
  Terminal, 
  ChevronRight, 
  Coffee, 
  Globe, 
  Cpu,
  Layers,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-indigo-600">
          <Terminal size={24} />
          <span>DevAsoslari</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#java" className="hover:text-indigo-600 transition-colors">Java Asoslari</a>
          <a href="#web" className="hover:text-indigo-600 transition-colors">HTML & CSS</a>
          <a href="#examples" className="hover:text-indigo-600 transition-colors">Namuna</a>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95">
            Boshlash
          </button>
        </div>

        <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-gray-600">
              <a href="#java" onClick={() => setMobileMenuOpen(false)}>Java Asoslari</a>
              <a href="#web" onClick={() => setMobileMenuOpen(false)}>HTML & CSS</a>
              <a href="#examples" onClick={() => setMobileMenuOpen(false)}>Namuna</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Boshlash</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl filter animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl filter animate-pulse delay-700"></div>
    </div>
    
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6">
          Dasturlash Dunyosiga Xush Kelibsiz
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
          Kelajakni <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Kod</span> Bilan Yarating
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Java, HTML va CSS asoslarini eng oddiy va qiziqarli usulda o'rganing. 
          Sizga kerak bo'lgan hamma narsa bir joyda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group">
            O'rganishni boshlash <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white border-2 border-gray-100 text-gray-700 text-lg font-semibold px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all">
            Demo ko'rish
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const SectionHeading = ({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
    </div>
    <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
  </div>
);

const FeatureCard = ({ title, description, icon: Icon, delay }: { title: string, description: string, icon: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
  >
    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors mb-6">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const CodeSnippet = ({ code, language, title }: { code: string, language: string, title: string }) => (
  <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
    <div className="bg-slate-800 px-4 py-3 flex justify-between items-center">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
      </div>
      <span className="text-xs font-mono text-slate-400">{title}</span>
    </div>
    <div className="p-6 overflow-x-auto">
      <pre className="text-indigo-300 font-mono text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

export default function App() {
  const javaCode = `public class SalomDunyo {
    public static void main(String[] args) {
        System.out.println("Salom, Java!");
        
        // O'zgaruvchilar
        int son = 25;
        String matn = "O'zbekiston";
        
        System.out.println(matn + ": " + son);
    }
}`;

  const htmlCode = `<!DOCTYPE html>
<html>
<head>
    <title>Salom</title>
    <style>
        h1 { color: blue; }
        .text { font-size: 16px; }
    </style>
</head>
<body>
    <h1>Salom Dunyo!</h1>
    <p class="text">Bu mening saytim.</p>
</body>
</html>`;

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Nav />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        {/* Java Section */}
        <section id="java">
          <SectionHeading 
            title="Java - Kuchli va Ishonchli" 
            subtitle="Java dunyodagi eng mashhur dasturlash tillaridan biri. U mobil ilovalar, korporativ tizimlar va o'yinlar yaratishda ishlatiladi."
            icon={Coffee}
          />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FeatureCard 
              title="Ob'ektga yo'naltirilgan" 
              description="Java hamma narsani ob'ekt deb biladi, bu esa murakkab dasturlarni tartibli boshqarishga yordam beradi."
              icon={Cpu}
              delay={0.1}
            />
            <FeatureCard 
              title="Katta Jamiyat" 
              description="Muammolaringizga tezda yechim topish uchun butun dunyoda millionlab dasturchilar yordam beradi."
              icon={Layers}
              delay={0.2}
            />
            <FeatureCard 
              title="Mustaqil Platforma" 
              description="'Bir marta yozing, hamma joyda ishlating' - Java-da yozilgan kod istalgan tizimda ishlayveradi."
              icon={Zap}
              delay={0.3}
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mt-16 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Java-da asosiy tushunchalar</h3>
              {[
                { title: "Variables (O'zgaruvchilar)", desc: "Ma'lumotlarni saqlash uchun idishlar: int, String, double, boolean." },
                { title: "Loops (Sikllar)", desc: "Bir xil kodni qayta-qayta ishlatadigan tuzilmalar: for, while." },
                { title: "Classes (Klasslar)", desc: "Ob'ektlar yaratish uchun chizmalar yoki qoliplar." },
                { title: "Methods (Metodlar)", desc: "Ma'lum bir vazifani bajaruvchi kod bloklari." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-2xl bg-white border border-gray-100 flex items-start gap-4 shadow-sm hover:border-indigo-200 transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-indigo-600 mt-2.5"></div>
                  <div>
                    <h5 className="font-bold text-gray-900">{item.title}</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <CodeSnippet code={javaCode} language="java" title="SalomDunyo.java" />
          </div>
        </section>

        {/* Web Section */}
        <section id="web">
          <SectionHeading 
            title="HTML va CSS - Internetning Asosi" 
            subtitle="Har bir vebsayt ushbu ikki texnologiya ustiga qurilgan. HTML sklet bo'lsa, CSS uning go'zalligidir."
            icon={Globe}
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 p-2 h-fit bg-red-50 text-red-600 rounded-lg"><Code2 size={24} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">HTML (HyperText Markup Language)</h4>
                  <p className="text-gray-600">Veb-sahifaning mazmuni va tuzilishini belgilaydi. Sarlavhalar, matnlar va rasmlar HTML orqali qo'shiladi.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 p-2 h-fit bg-blue-50 text-blue-600 rounded-lg"><Layout size={24} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">CSS (Cascading Style Sheets)</h4>
                  <p className="text-gray-600">Sahifaga rang, shrift va dizayn beradi. CSS orqali biz vebsaytni chiroyli va qulay qilamiz.</p>
                </div>
              </div>
              <button className="text-indigo-600 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                Loyiha yaratishni boshlash <ChevronRight size={20} />
              </button>
            </div>
            <CodeSnippet code={htmlCode} language="html" title="index.html" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Bugun o'rganishni boshlaysizmi?</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
              Hech qachon kech emas. Dasturlash sizga yangi imkoniyatlar dunyosini ochadi.
            </p>
            <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg">
              Bepul Ro'yxatdan O'tish
            </button>
          </div>
        </section>
      </main>

      <footer className="border-top border-gray-100 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-indigo-600">
            <Terminal size={24} />
            <span>DevAsoslari</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DevAsoslari. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-indigo-600 transition-colors">Telegram</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">YouTube</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
