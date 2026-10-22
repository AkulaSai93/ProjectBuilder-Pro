# Generates public/noise.png: the Figma frame's duotone noise (0.5px grains, black + white).
# Values are calibrated against a 1x Figma render of the frame (163:4516).
import random
from PIL import Image

SIZE = 256            # rendered at 128 CSS px, so each pixel is a 0.5px grain
P_BLACK, A_BLACK = 0.20, 21
P_WHITE, A_WHITE = 0.25, 17

random.seed(7)
img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
px = img.load()
for y in range(SIZE):
    for x in range(SIZE):
        r = random.random()
        if r < P_BLACK:
            px[x, y] = (0, 0, 0, A_BLACK)
        elif r < P_BLACK + P_WHITE:
            px[x, y] = (255, 255, 255, A_WHITE)
img.save("public/noise.png", optimize=True)
