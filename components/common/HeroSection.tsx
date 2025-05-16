interface HeroProps {
  title: string;
  imageUrl: string;
}
export default function HeroSection({ title, imageUrl }: HeroProps) {
  return (
    <section
      className="h-[300px] sm:h-[400px] lg:h-[500px] w-full bg-center bg-cover bg-no-repeat text-center flex items-center justify-center rounded-xl shadow-sm"
      style={{ backgroundImage: `url(${imageUrl})`, filter: "brightness(0.5)" }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-bold text-white drop-shadow-md">
        {title}
      </h1>
    </section>
  );
}
