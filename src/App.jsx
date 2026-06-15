import React from 'react';

const NAV_LINKS = [
  { label: 'Collecties', href: '#collecties' },
  { label: 'Services', href: '#services' },
  { label: 'Over ons', href: '#over-ons' },
  { label: 'Styling', href: '#styling' },
  { label: 'Contact', href: '#contact' },
];

const TESTIMONIALS = [
  { quote: 'Elke keer als ik binnenkom, voel ik me meteen op mijn gemak. Ze kennen mijn smaak beter dan ikzelf.', name: 'Lien V.', stars: 5 },
  { quote: 'Het persoonlijk advies is goud waard. Geen druk, gewoon eerlijk en stijlvol geholpen.', name: 'Marc D.', stars: 5 },
  { quote: 'Een boetiek die écht luistert. De collecties voelen altijd zorgvuldig samengesteld.', name: 'Sofie B.', stars: 4 },
];

export default function AProposFashion() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleForm = e => {
    e.preventDefault();
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-[#F9F6F2] text-[#1A1A2E]">
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500&display=swap');`}</style>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl font-semibold text-[#2C3E50] tracking-tight">
            À <span className="italic text-[#C9A96E]">Propos</span>
          </a>
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="text-xs font-medium tracking-widest uppercase text-[#2C3E50] hover:text-[#C9A96E] hover:tracking-wider transition-all duration-300">{l.label}</a>
            ))}
          </div>
          <button onClick={() => setMenuOpen(o => !o)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
            <span className={`block h-px w-6 bg-[#2C3E50] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px w-6 bg-[#2C3E50] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-[#2C3E50] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#E5E0DA] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-xs font-medium tracking-widest uppercase text-[#2C3E50]">{l.label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-end pb-24 px-6">
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=85" alt="À Propos Fashion" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/70 via-[#1A1A2E]/30 to-transparent" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-[#C9A96E] mb-4">— <span className="text-[#C9A96E]">Oostende</span></p>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight mb-3">
            Stijl die bij jou<br /><em className="italic text-[#C9A96E]">past</em>
          </h1>
          <p className="text-sm md:text-base font-light text-white/80 mb-2">· · ·</p>
          <p className="text-base md:text-lg font-light text-white/80 mb-8 max-w-xl">Mode aan de kust, zorgvuldig gevonden voor jou. Ontdek de nieuwe collectie in ons boetiek.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#collecties" className="inline-flex items-center gap-2 bg-[#2C3E50] text-white text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-[#C9A96E] transition-colors duration-300 shadow-sm">Ontdek collecties</a>
            <a href="#styling" className="inline-flex items-center gap-2 border border-white text-white text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-white hover:text-[#2C3E50] transition-colors duration-300">Persoonlijk advies</a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#2C3E50] py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 text-center">
          <div className="flex-1 px-6">
            <p className="text-[#C9A96E] text-lg font-semibold">★ 4,5 / 5</p>
            <p className="text-white/70 text-xs tracking-wide mt-0.5">96 Google-recensies</p>
          </div>
          <div className="hidden md:block h-8 w-px bg-white/20" />
          <div className="flex-1 px-6">
            <p className="text-white text-sm font-medium tracking-wide">Boetiek in Oostende</p>
            <p className="text-white/60 text-xs mt-0.5">Alfons Pieterslaan 67</p>
          </div>
          <div className="hidden md:block h-8 w-px bg-white/20" />
          <div className="flex-1 px-6">
            <p className="text-white text-sm font-medium tracking-wide">À propos</p>
            <p className="text-white/60 text-xs mt-0.5">Precies op het juiste moment</p>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collecties" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-3">De <em className="italic">collecties</em></h2>
            <p className="text-[#C9A96E] text-lg tracking-widest">· · ·</p>
            <p className="text-[#7A7A8C] text-sm mt-3 max-w-md mx-auto">Zorgvuldig samengesteld, seizoen na seizoen — voor haar, voor hem, voor elk detail.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Damesmode', tag: 'Zij', img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=900&q=85' },
              { label: 'Herenmode', tag: 'Hij', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85' },
              { label: 'Accessoires', tag: 'Detail', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85' },
            ].map(c => (
              <div key={c.label} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={c.img} alt={c.label} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#C9A96E] text-white text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full">{c.tag}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="absolute bottom-5 left-5 text-2xl font-semibold text-white">{c.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-[#F9F6F2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl font-semibold text-[#2C3E50] mb-3">Wat wij bieden</h2>
            <p className="text-[#7A7A8C] text-sm max-w-md mx-auto">Meer dan mode — een ervaring die bij jou past.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '◇', title: 'Persoonlijk stylingadvies', text: 'Een eerlijk gesprek over stijl. Geen verkooppraatjes, gewoon advies dat je verder helpt.' },
              { icon: '◈', title: 'Seizoenscollecties', text: 'Elk seizoen opnieuw samengesteld — stukken die de tand des tijds doorstaan.' },
              { icon: '◉', title: 'Kwaliteitsmerken', text: 'Kwaliteit die je voelt zodra je het aanraakt. Merken die we zelf dragen met overtuiging.' },
            ].map(s => (
              <div key={s.title} className="p-10 bg-white rounded-2xl shadow-sm">
                <span className="text-3xl text-[#C9A96E] block mb-4">{s.icon}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl font-semibold text-[#2C3E50] mb-3">{s.title}</h3>
                <p className="text-[#7A7A8C] text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="over-ons" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=900&q=85" alt="Over À Propos" className="rounded-2xl aspect-[3/4] object-cover object-top w-full shadow-sm" />
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#C9A96E] mb-4">Over ons</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-semibold text-[#2C3E50] leading-tight mb-6">Mode aan de kust,<br /><em className="italic">op het juiste moment</em></h2>
            <p className="text-[#7A7A8C] text-sm leading-7 mb-6">À Propos Fashion is meer dan een winkel aan de Alfons Pieterslaan. Het is een plek waar stijl en persoonlijkheid samenkomen — waar je altijd eerlijk geholpen wordt door mensen die van mode houden.</p>
            <blockquote style={{ fontFamily: "'Playfair Display', serif" }} className="text-lg italic text-[#2C3E50] border-l-2 border-[#C9A96E] pl-5 mb-8 leading-relaxed">"Jouw stijl, jouw verhaal — wij helpen je het te vertellen."</blockquote>
            <a href="#contact" className="inline-flex items-center gap-2 border border-[#2C3E50] text-[#2C3E50] text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-[#2C3E50] hover:text-white transition-colors duration-300">Kom langs</a>
          </div>
        </div>
      </section>

      {/* STYLING ADVICE */}
      <section id="styling" className="py-32 px-6 bg-[#2C3E50]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A96E] text-xs font-medium tracking-widest uppercase mb-4">Persoonlijk stylingadvies</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-3">Jouw stijl, <em className="italic text-[#C9A96E]">begeleid</em></h2>
          <p className="text-[#C9A96E] text-lg mb-6">· · ·</p>
          <p className="text-white/70 text-sm leading-7 max-w-xl mx-auto mb-12">Of je nu op zoek bent naar een nieuwe dagelijkse look of een bijzondere outfit — we nemen de tijd voor jou.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 text-left">
            {[
              { step: '01', title: 'Gesprek', text: 'We luisteren naar jouw stijlwensen, levensstijl en wat je zoekt.' },
              { step: '02', title: 'Selectie', text: 'We leggen een persoonlijke selectie voor je klaar, gevonden voor jou.' },
              { step: '03', title: 'Verfijning', text: 'We passen aan, adviseren en zorgen dat alles klopt — tot in het detail.' },
            ].map(s => (
              <div key={s.step} className="p-6 border border-white/10 rounded-2xl">
                <p className="text-[#C9A96E] text-xs font-medium tracking-widest mb-3">{s.step}</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-white text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#C9A96E] text-white text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-white hover:text-[#2C3E50] transition-colors duration-300">Plan een gesprek</a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl font-semibold text-[#2C3E50] mb-2">Wat onze klanten zeggen</h2>
            <p className="text-[#7A7A8C] text-sm">4,5 op 5 — 96 recensies via Google</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-[#F9F6F2] rounded-2xl p-8">
                <div className="flex gap-1 mb-5">{Array.from({ length: t.stars }).map((_, j) => <span key={j} className="text-[#C9A96E] text-sm">★</span>)}</div>
                <blockquote style={{ fontFamily: "'Playfair Display', serif" }} className="italic text-[#2C3E50] text-base leading-relaxed mb-5">"{t.quote}"</blockquote>
                <p className="text-[#7A7A8C] text-xs tracking-wide font-medium uppercase">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section id="bezoek" className="py-24 px-6 bg-[#F9F6F2]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl overflow-hidden shadow-sm min-h-[380px]">
            <iframe title="Locatie À Propos Fashion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.5!2d2.9186!3d51.2282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQWxmb25zIFBpZXRlcnNsYWFuIDY3LCA4NDAwIE9vc3RlbmRl!5e0!3m2!1snl!2sbe!4v1" width="100%" height="100%" style={{ minHeight: '380px', border: 0 }} allowFullScreen loading="lazy" />
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-sm flex flex-col justify-center">
            <p className="text-xs font-medium tracking-widest uppercase text-[#C9A96E] mb-4">Bezoek ons</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-semibold text-[#2C3E50] mb-6">Welkom aan de <em className="italic">kust</em></h2>
            <div className="space-y-3 text-sm text-[#7A7A8C] mb-8">
              <p><span className="text-[#2C3E50] font-medium">Adres</span><br />Alfons Pieterslaan 67, 8400 Oostende</p>
              <p><span className="text-[#2C3E50] font-medium">Telefoon</span><br />059 27 33 73</p>
              <p><span className="text-[#2C3E50] font-medium">Openingsuren</span><br />Ma–za: 10:00 – 18:00 · Zo: gesloten</p>
            </div>
            <a href="https://maps.google.com/?q=Alfons+Pieterslaan+67+Oostende" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#2C3E50] text-[#2C3E50] text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-[#2C3E50] hover:text-white transition-colors duration-300 w-fit">Routebeschrijving</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-[#F9F6F2]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-[#C9A96E] mb-4">Contact</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl font-semibold text-[#2C3E50] mb-3">Laten we <em className="italic">kennismaken</em></h2>
          <p className="text-[#7A7A8C] text-sm mb-10">Heb je een vraag over de collectie, styling of wil je gewoon langskomen? We horen graag van je.</p>
          <form onSubmit={handleForm} className="space-y-4 text-left">
            <input className="w-full bg-[#F9F6F2] border border-[#E5E0DA] rounded-lg px-5 py-3.5 text-[#1A1A2E] placeholder-[#7A7A8C] focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-colors duration-200 text-sm" placeholder="Jouw naam" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
            <input type="email" className="w-full bg-[#F9F6F2] border border-[#E5E0DA] rounded-lg px-5 py-3.5 text-[#1A1A2E] placeholder-[#7A7A8C] focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-colors duration-200 text-sm" placeholder="Jouw e-mailadres" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
            <textarea rows={5} className="w-full bg-[#F9F6F2] border border-[#E5E0DA] rounded-lg px-5 py-3.5 text-[#1A1A2E] placeholder-[#7A7A8C] focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-colors duration-200 text-sm resize-none" placeholder="Jouw bericht..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required />
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#2C3E50] text-white text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-[#C9A96E] transition-colors duration-300 shadow-sm">Verstuur bericht</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2C3E50] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-semibold text-white mb-3">À <em className="italic text-[#C9A96E]">Propos</em> Fashion</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">Mode aan de kust — zorgvuldig gevonden voor jou. Alfons Pieterslaan 67, 8400 Oostende.</p>
            <p className="text-white/50 text-sm mt-2">059 27 33 73</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#C9A96E] mb-4">Navigatie</p>
            <ul className="space-y-2">
              {NAV_LINKS.map(l => <li key={l.label}><a href={l.href} className="text-white/60 text-sm hover:text-[#C9A96E] transition-colors duration-300">{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#C9A96E] mb-4">Volg ons</p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook'].map(s => <a key={s} href="#" className="text-white/50 text-sm hover:text-[#C9A96E] transition-colors duration-300">{s}</a>)}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-6">
          <p className="text-white/30 text-xs text-center">© {new Date().getFullYear()} À Propos Fashion — Oostende. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}