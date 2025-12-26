import React from "react";
import Image from "@/features/ui/image/Image";
import Title from "@/features/ui/typography/Title";
import Text from "@/features/ui/typography/Text";

type ReviewCardProps = {
  id?: number;
  avatar?: string;
  title: string;
  time: string;
  message: string;
  gradientIndex?: number;
};

const gradientClasses = [
  "bg-gradient-to-br from-pink-400 to-purple-600",
  "bg-gradient-to-b from-orange-500 to-pink-500",
  "bg-gradient-to-r from-yellow-400 to-red-500",
  "bg-gradient-to-tr from-sky-400 to-blue-600",
  "bg-gradient-to-tr from-orange-300 to-purple-500",
];

const ReviewCard: React.FC<ReviewCardProps> = ({
  avatar,
  title,
  time,
  message,
  gradientIndex = 0,
}) => {
  return (
    <div
      className={`
        flex gap-4 p-4 rounded-md
        border-2 border-(--color-primario)
        bg-(--color-cuaternario2)
        shadow-[0_4px_16px_8px_rgba(0,0,0,0.03)]
        transform scale-100
        hover:scale-110 hover:shadow-[0_3px_16px_8px_rgba(0,0,0,0.07)]
        transition-all duration-200
      `}
    >
      {/* Icono o avatar */}
      <div
        className={`
          w-10 h-10 min-w-10 min-h-10 rounded-lg 
          ${gradientClasses[gradientIndex % gradientClasses.length]}
          flex items-center justify-center overflow-hidden
        `}
      >
        {avatar && <Image src={avatar} alt={title} variant="icon" />}
      </div>

      {/* Información */}
      <div className="flex flex-col flex-1">

        {/* Header */}
        <div className="flex justify-between items-center mb-1 select-none">

          {/* Título / nombre del usuario */}
          <Title
            variant="cardSubtitle"
            tone="secondary"
            as="h4"
            className="leading-none"
          >
            {title}
          </Title>

          {/* Tiempo */}
          <Text
            variant="byline"
            tone="tertiary"
            size="xs"
            className="ml-2 whitespace-nowrap"
          >
            • {time}
          </Text>
        </div>

        {/* Mensaje */}
        <Text
          variant="parrafos"
          tone="primary"
          size="sm"
          className="font-light"
        >
          {message}
        </Text>
      </div>
    </div>
  );
};

export default ReviewCard;
