import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Download, Upload } from 'lucide-react';
import BlogUpload from './BlogUpload';
import BlogEdit from './BlogEdit';
import DeleteConfirm from './DeleteConfirm';
import BlogList, { BlogPost } from './BlogList';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { exportPageData, importData, loadInitialData } from '../utils/dataManager';

export default function PlayPage() {
  const [posts, setPosts] = useLocalStorage<BlogPost[]>('play-posts', []);
  const [showUpload, setShowUpload] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [deletingPostId, setDeletingPostId] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load initial data on first mount if no data exists
  useEffect(() => {
    if (!isInitialized && posts.length === 0) {
      loadInitialData('play').then(initialPosts => {
        if (initialPosts.length > 0) {
          setPosts(initialPosts);
        }
        setIsInitialized(true);
      });
    } else {
      setIsInitialized(true);
    }
  }, []);

  const handleUpload = (newPost: Omit<BlogPost, 'id' | 'createdAt'>) => {
    const post: BlogPost = {
      ...newPost,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setPosts([post, ...posts]);
    setShowUpload(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
  };

  const handleUpdate = (id: string, updatedPost: Omit<BlogPost, 'id' | 'createdAt'>) => {
    setPosts(posts.map(post => 
      post.id === id 
        ? { ...post, ...updatedPost }
        : post
    ));
    setEditingPost(null);
  };

  const handleDeleteClick = (id: string) => {
    setDeletingPostId(id);
  };

  const handleDeleteConfirm = () => {
    if (deletingPostId) {
      setPosts(posts.filter(post => post.id !== deletingPostId));
      setDeletingPostId(null);
    }
  };

  const handleExport = () => {
    exportPageData('play', posts);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const importedPosts = await importData(file);
        setPosts(importedPosts);
        alert(`Successfully imported ${importedPosts.length} posts!`);
      } catch (error) {
        alert('Failed to import data. Please check the file format.');
        console.error(error);
      }
      // Reset file input
      e.target.value = '';
    }
  };

  const deletingPost = posts.find(p => p.id === deletingPostId);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b-2 border-[#5d1c1c] bg-[#d9bbbb]">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-[#2d0303] hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={24} />
            </Link>
            <h1 className="font-['Pixelify_Sans:Regular',sans-serif] text-[48px] text-[#2d0303]">
              PLAY
            </h1>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-3">
              <button
                onClick={handleExport}
                className="flex items-center gap-2 bg-[#2d0303] text-[#d9bbbb] px-4 py-2 rounded-lg hover:bg-[#4d0505] transition-all duration-300 font-['Pixelify_Sans:Regular',sans-serif] text-sm"
              >
                <Download size={18} />
                Export Data
              </button>
              <button
                onClick={handleImportClick}
                className="flex items-center gap-2 bg-[#2d0303] text-[#d9bbbb] px-4 py-2 rounded-lg hover:bg-[#4d0505] transition-all duration-300 font-['Pixelify_Sans:Regular',sans-serif] text-sm"
              >
                <Upload size={18} />
                Import Data
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </div>
            
            <button
              onClick={() => setShowUpload(true)}
              className="flex items-center gap-2 bg-[#2d0303] text-[#d9bbbb] px-6 py-3 rounded-lg hover:bg-[#4d0505] transition-all duration-300 hover:scale-105 font-['Pixelify_Sans:Regular',sans-serif]"
            >
              <Plus size={20} />
              Upload Content
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <BlogList 
          posts={posts} 
          accentColor="#d9bbbb" 
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
        />
      </main>

      {/* Upload Modal */}
      {showUpload && (
        <BlogUpload
          onClose={() => setShowUpload(false)}
          onUpload={handleUpload}
        />
      )}

      {/* Edit Modal */}
      {editingPost && (
        <BlogEdit
          post={editingPost}
          onClose={() => setEditingPost(null)}
          onUpdate={handleUpdate}
        />
      )}

      {/* Delete Confirmation */}
      {deletingPostId && deletingPost && (
        <DeleteConfirm
          title={deletingPost.title}
          onClose={() => setDeletingPostId(null)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
}