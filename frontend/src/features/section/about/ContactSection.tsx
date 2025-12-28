import ContactCardGold from "@/features/ui/card/ContactCardGold";

const socialLinks = [
  { href: "https://www.facebook.com/share/1AQmKKWybD/", img: "facebook.png", alt: "facebook" },
  { href: "https://www.instagram.com/4rte.gestion?igsh=M3pzemEyb3MyNGZk", img: "instagram.png", alt: "instagram" },
  { href: "https://wa.me/message/EYJGBDZ4BRPYN1", img: "whatsapp.png", alt: "whatsapp" },
  { href: "https://youtube.com/@artegestion9043?si=1MQppdtmGk7FGnZB", img: "youtube.png", alt: "youtube" },
  { href: "https://www.tiktok.com/@4rtegestion?_t=ZS-8t9fliVTpMW&_r=1", img: "tik-tok.png", alt: "tiktok" }
];

const ContactSection = () => {
  return (
    <section
      className="
        w-[90%]
        mx-auto
        my-3
        flex flex-col lg:flex-row
        justify-between
        items-center
        gap-10
      "
    >
      {/* Redes */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h5
          className="
            text-[30px]
            font-bold
            text-(--color-primario)
          "
        >
          Contáctanos
        </h5>

        <p
          className="
            text-start
            text-(--color-cuaternario)
            leading-relaxed
          "
        >
          ✨ Descubre el arte hecho a mano que cuenta historias únicas 🎨🖌️<br /><br />
          Explora nuestra colección de productos artesanales exclusivos y apoya el talento de creadores independientes. 🎭💫<br /><br />
          ¡Síguenos en nuestras redes y encuentra piezas auténticas que te encantarán! ❤️👇
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a key={item.alt} href={item.href} target="_blank" rel="noopener noreferrer">
              <button
                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-full
                  bg-(--color-cuaternario)
                  hover:scale-110
                  transition-transform
                "
              >
                <img
                  src={`/images/Iconos/${item.img}`}
                  alt={item.alt}
                  className="w-6 h-6"
                />
              </button>
            </a>
          ))}
        </div>
      </div>

      {/* Formulario */}
      <div className="w-full lg:w-[45%]">
        <ContactCardGold />
      </div>
    </section>
  );
};

export default ContactSection;
