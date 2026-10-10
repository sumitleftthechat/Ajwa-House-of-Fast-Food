Ajwa House of Fast Food - static website (no build step)

Files
  index.html            page structure
  css/styles.css        styling
  js/photos.js          Unsplash photo catalogue + which photo each category/item uses
  js/data.js            restaurant details, links, and the full menu (edit prices/links here)
  js/app.js             page logic
  assets/logo.webp      logo
  assets/photos/        local photo copies (filled by download-photos.sh)
  download-photos.sh    downloads the 21 Unsplash photos into assets/photos/

Setup (once, on a computer with internet)
  1. Open Terminal and go into this folder.
  2. Run:  bash download-photos.sh      (prints "ok" for each photo, ends with "Done: 21 photos")
  3. Open index.html, or upload this whole folder to your host.

How photos load: assets/photos/<name>.jpg first (also tries assets/<name>.jpg and .jpeg/.png/.webp),
then the Unsplash link, then the emoji tile if nothing loads.
Items without a photo show an emoji tile marked "Placeholder" (30 dishes need your own photos).
assets/photos/gulab.jpg is your own gulab jamun photo (not from Unsplash, no credit shown).
assets/photos/own_*.jpg are photos you supplied (no credit shown).
Photographer credits are generated in the footer from js/photos.js. Photos are from Unsplash.
