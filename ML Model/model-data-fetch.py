from simple_image_download import simple_image_download as simp
import os
from PIL import Image

def fetch_eagle_images(num_images=80, base_folder='birds'):
    query = "Greater Spotted Eagle"
    folder_name = "greater_spotted_eagle"
    save_path = os.path.join(base_folder, folder_name)
    os.makedirs(save_path, exist_ok=True)

    print(f"\n🔍 Downloading {num_images} images for: {query}")
    
    response = simp.simple_image_download()
    response.download(query, num_images)

    src_folder = os.path.join("simple_images", query)
    if not os.path.exists(src_folder):
        print("❌ Source folder not found. No images were downloaded.")
        return
    
    count = 0
    for file in os.listdir(src_folder):
        src_path = os.path.join(src_folder, file)
        try:
            with Image.open(src_path) as img:
                img = img.convert("RGB")  # ensure it's in standard JPEG format
                count += 1
                dest_path = os.path.join(save_path, f"greater-spotted-eagle-{count}.jpeg")
                img.save(dest_path, "JPEG")
        except Exception as e:
            print(f"⚠️ Skipped: {file} ({e})")

    print(f"✅ Done: {count} JPEG images saved to {save_path}")

# Run script
fetch_eagle_images(80)
