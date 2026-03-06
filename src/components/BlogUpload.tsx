import { useState } from 'react';
import { X, Plus, Trash2, Upload, Link as LinkIcon } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrls?: string[];
  videoUrl?: string;
  createdAt: Date;
}

interface BlogUploadProps {
  onClose: () => void;
  onUpload: (post: Omit<BlogPost, 'id' | 'createdAt'>) => void;
}

export default function BlogUpload({ onClose, onUpload }: BlogUploadProps) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '940124') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleAddImage = () => {
    if (currentImageUrl.trim()) {
      setImageUrls([...imageUrls, currentImageUrl.trim()]);
      setCurrentImageUrl('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setImageUrls([...imageUrls, event.target.result as string]);
        setError('');
      }
    };
    reader.onerror = () => {
      setError('Failed to read image file');
    };
    reader.readAsDataURL(file);

    // Reset input
    e.target.value = '';
  };

  const handleRemoveImage = (index: number) => {
    setImageUrls(imageUrls.filter((_, i) => i !== index));
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError('Title and content cannot be empty');
      return;
    }

    onUpload({
      title: title.trim(),
      content: content.trim(),
      imageUrls: imageUrls.length > 0 ? imageUrls : undefined,
      videoUrl: videoUrl.trim() || undefined,
    });

    // Reset form
    setTitle('');
    setContent('');
    setImageUrls([]);
    setCurrentImageUrl('');
    setVideoUrl('');
    setError('');
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] border-2 border-[#5d1c1c] rounded-[20px] max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#1a1a1a] border-b border-[#5d1c1c] px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-[#ededed] font-['Pixelify_Sans:Regular',sans-serif] text-[32px]">
            Upload Blog
          </h2>
          <button
            onClick={onClose}
            className="text-[#ededed] hover:text-[#d9bbbb] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {!isAuthenticated ? (
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-[#ededed] mb-2 font-['Inter:Medium',sans-serif]">
                  Please enter password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#2a2a2a] border border-[#5d1c1c] rounded-lg px-4 py-3 text-[#ededed] focus:outline-none focus:border-[#a373b7]"
                  placeholder="Enter password"
                />
              </div>
              {error && (
                <p className="text-[#ff6b6b] text-sm">{error}</p>
              )}
              <button
                type="submit"
                className="w-full bg-[#a373b7] hover:bg-[#b889ca] text-[#2d0303] font-['Pixelify_Sans:Regular',sans-serif] py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Confirm
              </button>
            </form>
          ) : (
            <form onSubmit={handleUpload} className="space-y-6">
              <div>
                <label className="block text-[#ededed] mb-2 font-['Inter:Medium',sans-serif]">
                  Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#2a2a2a] border border-[#5d1c1c] rounded-lg px-4 py-3 text-[#ededed] focus:outline-none focus:border-[#a373b7]"
                  placeholder="Enter title"
                />
              </div>

              <div>
                <label className="block text-[#ededed] mb-2 font-['Inter:Medium',sans-serif]">
                  Content *
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={8}
                  className="w-full bg-[#2a2a2a] border border-[#5d1c1c] rounded-lg px-4 py-3 text-[#ededed] focus:outline-none focus:border-[#a373b7] resize-none"
                  placeholder="Enter content (supports line breaks)"
                />
              </div>

              <div>
                <label className="block text-[#ededed] mb-2 font-['Inter:Medium',sans-serif]">
                  Images (optional)
                </label>
                <div className="space-y-3">
                  {/* Image URL Input */}
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={currentImageUrl}
                      onChange={(e) => setCurrentImageUrl(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddImage())}
                      className="flex-1 bg-[#2a2a2a] border border-[#5d1c1c] rounded-lg px-4 py-3 text-[#ededed] focus:outline-none focus:border-[#a373b7]"
                      placeholder="https://example.com/image.jpg"
                    />
                    <button
                      type="button"
                      onClick={handleAddImage}
                      className="bg-[#a373b7] hover:bg-[#b889ca] text-[#2d0303] px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
                    >
                      <Plus size={20} />
                      Add
                    </button>
                  </div>

                  {/* File Upload Input */}
                  <div className="flex gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="fileUpload"
                    />
                    <label
                      htmlFor="fileUpload"
                      className="bg-[#a373b7] hover:bg-[#b889ca] text-[#2d0303] px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <Upload size={20} />
                      Upload
                    </label>
                  </div>

                  {/* Image List */}
                  {imageUrls.length > 0 && (
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {imageUrls.map((url, index) => (
                        <div key={index} className="flex items-center gap-3 bg-[#2a2a2a] rounded-lg p-3 group">
                          <img 
                            src={url} 
                            alt={`Preview ${index + 1}`}
                            className="w-16 h-16 object-cover rounded"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <span className="flex-1 text-[#ededed] text-sm truncate">{url}</span>
                          <span className="text-[rgba(136,136,136,0.55)] text-sm">#{index + 1}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="text-[#ff6b6b] hover:text-[#ff5252] transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-[rgba(136,136,136,0.55)] text-sm">
                    {imageUrls.length} image{imageUrls.length !== 1 ? 's' : ''} added
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-[#ededed] mb-2 font-['Inter:Medium',sans-serif]">
                  Video URL (optional)
                </label>
                <input
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="w-full bg-[#2a2a2a] border border-[#5d1c1c] rounded-lg px-4 py-3 text-[#ededed] focus:outline-none focus:border-[#a373b7]"
                  placeholder="https://youtube.com/watch?v=..."
                />
              </div>

              {error && (
                <p className="text-[#ff6b6b] text-sm">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#a373b7] hover:bg-[#b889ca] text-[#2d0303] font-['Pixelify_Sans:Regular',sans-serif] py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Publish
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}