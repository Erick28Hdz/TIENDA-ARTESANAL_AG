import Image from "@/features/ui/image/Image";

export default function SocialButton({
  href,
  imgSrc,
  alt,
  gradient,
}: {
  href: string;
  imgSrc: string;
  alt: string;
  gradient: string; // tailwind gradient classes
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="relative">
        {/* Capa de vidrio detrás */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"></div>

        {/* Capa principal con clip-path */}
        <div
          style={{ clipPath: "url(#squircleClip)" }}
          className={`w-14 h-14 ${gradient} rounded-xl flex items-center justify-center 
                      shadow-lg border border-white/20 cursor-pointer 
                      transform transition-all duration-300 ease-out
                      hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}
        >
          <Image src={imgSrc} alt={alt} variant="logoFooter" className="w-8 h-8" />
        </div>
      </div>
    </a>
  );
}
