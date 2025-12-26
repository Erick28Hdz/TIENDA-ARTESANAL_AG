import NeumorphicButton from "../button/SubmitButton";

export default function ContactCardGold() {
    return (
        <section className="flex justify-center items-center">
            <div
                className=" 
          w-[300px] h-full p-6 rounded-2xl
          bg-(--color-cuaternario)
          shadow-[10px_10px_20px_rgba(0,0,0,0.35),-10px_-10px_20px_rgba(255,255,255,0.05),inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.15)]
          relative
        "
            >
                <form className="relative z-10">

                    {/* Name */}
                    <div className="mb-3">
                        <label className="text-[12px] font-semibold uppercase mb-2 block text-(--color-cuaternario2)">
                            nombre completo
                        </label>
                        <input
                            type="text"
                            required
                            className="
                w-full p-3 rounded-xl font-bold text-(--color-cuaternario)
                bg-(--color-terciario)
                shadow-[6px_2px_4px_rgba(0,0,0,0.45),-6px_-2px_5px_rgba(255,255,255,0.2),inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.3)]
                focus:outline-none
                focus:shadow-[4px_4px_8px_rgba(0,0,0,0.55),-4px_-4px_8px_rgba(255,255,255,0.3),inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.45)]
              "
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="text-[12px] font-semibold uppercase mb-2 block text-(--color-cuaternario2)">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="
               w-full p-3 rounded-xl font-bold text-(--color-cuaternario)
                bg-(--color-terciario)
                shadow-[6px_2px_4px_rgba(0,0,0,0.45),-6px_-2px_5px_rgba(255,255,255,0.2),inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.3)]
                focus:outline-none
                focus:shadow-[4px_4px_8px_rgba(0,0,0,0.55),-4px_-4px_8px_rgba(255,255,255,0.3),inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.45)]
              "
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-3">
                        <label className="text-[12px] font-semibold uppercase mb-2 block text-(--color-cuaternario2)">
                            Mensaje
                        </label>
                        <textarea
                            required
                            className="
               w-full p-3 rounded-xl font-bold text-(--color-cuaternario)
                bg-(--color-terciario)
                shadow-[6px_2px_4px_rgba(0,0,0,0.45),-6px_-2px_5px_rgba(255,255,255,0.2),inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.3)]
                focus:outline-none
                focus:shadow-[4px_4px_8px_rgba(0,0,0,0.55),-4px_-4px_8px_rgba(255,255,255,0.3),inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.45)]
              "
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                        <NeumorphicButton text="Envíar" onClick={() => { }}  />
                    </div>

                </form>
            </div>
        </section>
    );
}
