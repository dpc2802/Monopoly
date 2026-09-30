import re
with open('public/assets/img/world-map.svg', 'r') as f:
    svg = f.read()

# Replace any existing fill
svg = re.sub(r'fill="[^"]+"', 'fill="#FFFFFF"', svg)
# Ensure the path has our stroke
svg = svg.replace('<path ', '<path stroke="#D1D5DB" stroke-width="4" ')

with open('public/assets/img/world-map.svg', 'w') as f:
    f.write(svg)
