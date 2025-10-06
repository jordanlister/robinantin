# Images Directory Structure

Place your images in the following structure:

```
public/images/
├── work/                  # Project images
│   ├── pcd-1.jpg
│   ├── playground-1.jpg
│   └── artist-dev-1.jpg
├── gallery/               # Gallery images
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
└── press/                 # Press logos
    ├── variety.png
    ├── billboard.png
    └── ...
```

## Image Requirements

- **Format:** AVIF, WebP, or JPG
- **Resolution:** At least 1920px wide for hero images
- **Optimization:** Use compressed images (Next.js will further optimize)
- **Naming:** Use lowercase with hyphens (e.g., `hero-image.jpg`)
- **Alt Text:** Always provide alt text in CMS or components

## Video Requirements

Place videos in `public/videos/`:

- **Format:** MP4 (H.264)
- **Duration:** 3-6 seconds for previews
- **Size:** Keep under 5MB for web performance
- **Muted:** All autoplay videos must be muted
