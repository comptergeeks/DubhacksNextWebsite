"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import path from "path";

interface ImageFile {
  name: string;
  path: string;
}

export default function ImageStrip() {
  const [images, setImages] = useState<ImageFile[]>([]);

  useEffect(() => {
    async function loadImages() {
      try {
        const imageDirectory = path.join(process.cwd(), "public/images");
        const imageFilenames = await fs.readdir(imageDirectory);
        const imageFiles: ImageFile[] = imageFilenames.map((filename) => ({
          name: filename,
          path: `/images/${filename}`,
        }));
        setImages(imageFiles);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    }

    loadImages();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.path}
          alt={`Image ${index + 1}`}
          width={100}
          height={100}
          className="object-cover rounded-md"
        />
      ))}
    </div>
  );
}
