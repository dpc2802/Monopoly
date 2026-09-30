import re

svg = open('public/assets/img/world-map.svg', 'r').read()
path = re.search(r'<path[^>]*d="([^"]+)"', svg).group(1)

out = f"""export default function WorldMapBackground() {{
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-hidden bg-gray-50/40">
      <svg 
        viewBox="0 0 4378 2434" 
        className="w-[200vw] h-auto md:w-[140vw] lg:w-[100vw] max-w-[1800px] opacity-100 drop-shadow-sm"
        fill="#FFFFFF"
        stroke="#D1D5DB"
        strokeWidth="6"
        strokeLinejoin="round"
      >
        <path d="{path}" />
      </svg>
    </div>
  );
}}
"""

open('src/components/WorldMapBackground.tsx', 'w').write(out)
