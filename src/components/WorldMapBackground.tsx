import Image from "next/image";

export default function WorldMapBackground() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-hidden bg-gray-50/50">
      {/* Container explicitly matched to the SVG aspect ratio (4378x2434) so markers stay perfectly pinned */}
      <div className="relative w-[220vw] md:w-[150vw] lg:w-[110vw] max-w-[1600px] aspect-[4378/2434] opacity-80 flex-shrink-0">
        <Image 
          src="/assets/img/world-map.svg" 
          alt="World Map Background"
          fill
          className="object-contain"
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
