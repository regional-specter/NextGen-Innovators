from simple_image_download import simple_image_download as simp
import os

def fetch_images(query, num_images=80, base_folder='birds'):
    # Create folder structure
    folder_name = query.lower().replace(" ", "_")
    save_path = os.path.join(base_folder, folder_name)
    os.makedirs(save_path, exist_ok=True)
    
    # Initialize downloader
    response = simp.simple_image_download()
    print(f"\n🔍 Downloading {num_images} images for: {query}")
    
    # Download images
    response.download(query, num_images)
    
    # Move downloaded images into your custom directory
    src_folder = os.path.join("simple_images", query)
    if os.path.exists(src_folder):
        for i, file in enumerate(os.listdir(src_folder), start=1):
            src_path = os.path.join(src_folder, file)
            dest_filename = f"{query.lower().replace(' ', '-')}-{i}.jpg"
            dest_path = os.path.join(save_path, dest_filename)
            os.rename(src_path, dest_path)
        os.rmdir(src_folder)
    print(f"✅ Done: Saved all images to {save_path}")

# Run for both species

fetch_images("Greater Spotted Eagle", 100)
