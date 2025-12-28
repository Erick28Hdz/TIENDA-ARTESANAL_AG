import MissionVisionCard from "@/features/ui/card/MissionVisionCard";

const MissionVisionSection = () => {
  return (
    <section
      className="
        flex flex-col md:flex-row
        justify-center
        gap-8
        px-5
        pb-10
      "
    >
      <MissionVisionCard
        title="MISIÓN"
        description="En Arte Gestión, nos especializamos en ofrecer productos artesanales únicos y de alta calidad, conectando a los clientes con el talento y la creatividad de artesanos independientes..."
      />

      <MissionVisionCard
        title="VISIÓN"
        description="Ser la tienda artesanal en línea de referencia, reconocida por su calidad, autenticidad e innovación, impulsando la artesanía a nivel global..."
      />
    </section>
  );
};

export default MissionVisionSection;
