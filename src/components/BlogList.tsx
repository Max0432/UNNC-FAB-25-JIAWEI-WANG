import { Image, Video, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrls?: string[]; // Changed from imageUrl to imageUrls array
  videoUrl?: string;
  createdAt: Date;
}

interface BlogListProps {
  posts: BlogPost[];
  accentColor: string;
  onEdit?: (post: BlogPost) => void;
  onDelete?: (id: string) => void;
}

function ImageGallery({ images, accentColor }: { images: string[], accentColor: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image：画框 640×940 比例、无圆角，尽量大显示 */}
      <div
        className="relative group w-full max-h-[85vh] overflow-hidden bg-black mx-auto"
        style={{ aspectRatio: '640/940' }}
      >
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-contain object-center"
        />
        
        {/* Navigation Arrows - Only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ color: accentColor }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ color: accentColor }}
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-['Inter:Medium',sans-serif]">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Strip - Only show if multiple images */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-opacity-100 scale-105' 
                  : 'border-opacity-30 hover:border-opacity-60'
              }`}
              style={{ borderColor: accentColor }}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BlogList({ posts, accentColor, onEdit, onDelete }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-[rgba(136,136,136,0.55)] text-[24px] font-['Inter:Medium',sans-serif]">
          No content yet
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {posts.map((post) => (
        <article
          key={post.id}
          id={`post-${post.id}`}
          className="bg-[#1a1a1a] border-2 border-[#5d1c1c] rounded-[20px] overflow-hidden hover:border-opacity-70 transition-all duration-300 scroll-mt-8"
          style={{ borderColor: accentColor }}
        >
          <div className="p-8">
            <h3 className="text-[#ededed] text-[36px] font-['Pixelify_Sans:Regular',sans-serif] mb-6">
              {post.title}
            </h3>
            
            {/* Image Gallery */}
            {post.imageUrls && post.imageUrls.length > 0 && (
              <div className="mb-6">
                <ImageGallery images={post.imageUrls} accentColor={accentColor} />
              </div>
            )}
            
            {/* Content */}
            <div 
              className="text-[rgba(200,200,200,0.95)] text-[18px] leading-relaxed mb-6 whitespace-pre-wrap"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {post.content}
            </div>

            {/* Video Link */}
            {post.videoUrl && (
              <a
                href={post.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#ededed] hover:opacity-70 transition-opacity mb-4 px-4 py-2 rounded-lg border"
                style={{ color: accentColor, borderColor: accentColor }}
              >
                <Video size={20} />
                <span className="font-['Inter:Medium',sans-serif]">Watch Video</span>
              </a>
            )}

            {/* Metadata */}
            <div className="text-[rgba(136,136,136,0.55)] text-[14px] font-['Inter:Regular',sans-serif] mt-6 pt-4 border-t border-[#5d1c1c]">
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>

            {/* Actions */}
            {(onEdit || onDelete) && (
              <div className="flex gap-4 mt-4 pt-4 border-t border-[#5d1c1c]">
                {onEdit && (
                  <button
                    className="inline-flex items-center gap-2 text-[#ededed] hover:opacity-70 transition-opacity px-4 py-2 rounded-lg"
                    style={{ color: accentColor }}
                    onClick={() => onEdit(post)}
                  >
                    <Edit size={20} />
                    <span className="font-['Inter:Medium',sans-serif]">Edit</span>
                  </button>
                )}

                {onDelete && (
                  <button
                    className="inline-flex items-center gap-2 text-[#ff6b6b] hover:opacity-70 transition-opacity px-4 py-2 rounded-lg"
                    onClick={() => onDelete(post.id)}
                  >
                    <Trash2 size={20} />
                    <span className="font-['Inter:Medium',sans-serif]">Delete</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}