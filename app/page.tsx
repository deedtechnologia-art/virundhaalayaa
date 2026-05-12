import { businessConfig, siteConfig } from "@/lib";

const menuItems = [
  {
    name: "Royal Banana Leaf Virundhu",
    description:
      "A ceremonial Tamil spread with sambar, rasam, poriyal, kootu, appalam, payasam, and fragrant steamed rice.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    tag: "Signature",
  },
  {
    name: "Chettinad Pepper Feast",
    description:
      "Slow-roasted spices, curry leaf perfume, and deep pepper warmth plated for refined hospitality service.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
    tag: "Heritage",
  },
  {
    name: "Tiffin Classics",
    description:
      "Cloud-soft idli, crisp ghee dosa, pongal, vadai, and house chutneys crafted fresh for morning service.",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85",
    tag: "Breakfast",
  },
];

const experiences = [
  "Executive lunch programs",
  "Premium wedding dining",
  "Festive sweets and savories",
  "Private family virundhu",
];

const testimonials = [
  {
    quote:
      "The food felt rooted, refined, and deeply personal. Every course arrived with the confidence of a luxury dining team.",
    name: "Priya Raman",
    role: "Corporate Event Host",
  },
  {
    quote:
      "Virundhaalaya brought the warmth of a Tamil home kitchen with the finish of a premium restaurant experience.",
    name: "Arjun Mehta",
    role: "Wedding Client",
  },
  {
    quote:
      "Balanced spices, beautiful presentation, and calm coordination. It made our leadership lunch feel exceptional.",
    name: "Meera Iyer",
    role: "Operations Director",
  },
];

const stats = [
  ["42", "Curated heritage recipes"],
  ["12k+", "Meals served with care"],
  ["4.9", "Guest experience rating"],
];

export default function Home() {
  return (
    <main>
      <section id="home" className="hero-section">
        <div className="hero-copy-panel">
          <p className="eyebrow">Modern Indian Heritage Dining</p>
          <h1>Authentic Tamil cuisine served with luxury hospitality.</h1>
          <p className="hero-copy">
            {siteConfig.name} crafts soulful South Indian meals, premium
            catering, and festive dining experiences with slow-ground spices,
            seasonal produce, and elegant service.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#menu">
              Explore Menu
            </a>
            <a className="secondary-button" href="#contact">
              Plan Catering
            </a>
          </div>
        </div>
        <div className="hero-image-wrap" aria-hidden="true">
          <div className="hero-image" />
          <div className="hero-note">
            <strong>Fresh service</strong>
            <span>Daily kitchen begins at 7 AM</span>
          </div>
        </div>
      </section>

      <section className="stats-section" aria-label="Virundhaalaya highlights">
        {stats.map(([value, label]) => (
          <div key={label} className="stat-card">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="about" className="story-section">
        <div>
          <p className="eyebrow">The House Standard</p>
          <h2>Rooted recipes, refined for today&apos;s hosts.</h2>
        </div>
        <p>
          We bring the depth of Tamil kitchens into a polished hospitality
          format: measured spice blends, graceful plating, dependable event
          coordination, and menus designed for families, teams, and celebrations.
        </p>
      </section>

      <section id="menu" className="menu-section">
        <div className="section-heading">
          <p className="eyebrow">Curated Menu</p>
          <h2>Signature dining for everyday meals and milestone occasions.</h2>
        </div>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <article className="food-card" key={item.name}>
              <div
                className="food-card-image"
                style={{ backgroundImage: `url(${item.image})` }}
                aria-hidden="true"
              />
              <div className="food-card-body">
                <span>{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="catering" className="catering-section">
        <div className="catering-image" aria-hidden="true" />
        <div className="catering-content">
          <p className="eyebrow">Enterprise Catering</p>
          <h2>Premium Indian food programs without operational friction.</h2>
          <p>
            From boardroom lunches to wedding feasts, our team builds menus,
            portions, service rhythm, and guest flow around your occasion.
          </p>
          <div className="experience-list">
            {experiences.map((experience) => (
              <span key={experience}>{experience}</span>
            ))}
          </div>
          <a className="primary-button" href="#contact">
            Request a Proposal
          </a>
        </div>
      </section>

      <section id="testimonials" className="testimonial-section">
        <div className="section-heading">
          <p className="eyebrow">Guest Notes</p>
          <h2>Warmth, precision, and unmistakable authenticity.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.name}>
              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div>
          <p className="eyebrow">Reserve the Experience</p>
          <h2>Bring premium Tamil hospitality to your next table.</h2>
        </div>
        <a className="primary-button" href={`tel:${businessConfig.phone}`}>
          Call {businessConfig.phone}
        </a>
      </section>
    </main>
  );
}
