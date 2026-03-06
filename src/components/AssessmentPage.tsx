import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Download, Upload } from 'lucide-react';
import BlogUpload from './BlogUpload';
import BlogEdit from './BlogEdit';
import DeleteConfirm from './DeleteConfirm';
import BlogList, { BlogPost } from './BlogList';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { exportPageData, importData, loadInitialData } from '../utils/dataManager';

export default function AssessmentPage() {
  const [posts, setPosts] = useLocalStorage<BlogPost[]>('assessment-posts', []);
  const [showUpload, setShowUpload] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [deletingPostId, setDeletingPostId] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load initial data on first mount if no data exists
  useEffect(() => {
    if (!isInitialized && posts.length === 0) {
      loadInitialData('assessment').then(initialPosts => {
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
    exportPageData('assessment', posts);
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

  // 最早发布的显示在最上面（仅 Assessment 页面）
  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()),
    [posts]
  );

  const scrollToPost = (id: string) => {
    document.getElementById(`post-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navTitle = (title: string) => (title.length > 12 ? title.slice(0, 12) + '...' : title);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="shrink-0 border-b-2 border-[#5d1c1c] bg-[#924a83]">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-[#2d0303] hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={24} />
            </Link>
            <h1 className="font-['Pixelify_Sans:Regular',sans-serif] text-[48px] text-[#2d0303]">
              Assessment
            </h1>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-3">
              <button
                onClick={handleExport}
                className="flex items-center gap-2 bg-[#2d0303] text-[#924a83] px-4 py-2 rounded-lg hover:bg-[#4d0505] transition-all duration-300 font-['Pixelify_Sans:Regular',sans-serif] text-sm"
              >
                <Download size={18} />
                Export Data
              </button>
              <button
                onClick={handleImportClick}
                className="flex items-center gap-2 bg-[#2d0303] text-[#924a83] px-4 py-2 rounded-lg hover:bg-[#4d0505] transition-all duration-300 font-['Pixelify_Sans:Regular',sans-serif] text-sm"
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
              className="flex items-center gap-2 bg-[#2d0303] text-[#924a83] px-6 py-3 rounded-lg hover:bg-[#4d0505] transition-all duration-300 hover:scale-105 font-['Pixelify_Sans:Regular',sans-serif]"
            >
              <Plus size={20} />
              Upload Content
            </button>
          </div>
        </div>
      </header>

      {/* Content: 主内容区必须预留左侧空间，避免与固定导航重叠 */}
      <div
        className="flex flex-1 min-h-0 w-full max-w-7xl mx-auto pr-8 sm:pr-12 py-0"
        style={{ paddingLeft: 'calc(260px + 3rem)' }}
      >
        <main className="flex-1 overflow-auto min-w-0 py-12">
          <div className="max-w-4xl mx-auto">
            <BlogList 
              posts={sortedPosts} 
              accentColor="#924a83" 
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
            />
          </div>
        </main>
      </div>

      {/* 固定导航：Y 轴居中于屏幕、与内容区左对齐不重叠 */}
      <aside
        className="fixed z-10 w-[260px] rounded-xl bg-[#924a83] border border-[#5d1c1c] py-5 px-4 shadow-lg overflow-y-auto -translate-y-1/2"
        style={{
          top: '50%',
          left: 'max(2rem, calc((100vw - 80rem) / 2 + 2rem))',
          maxHeight: 'min(70vh, 420px)',
        }}
      >
        <nav className="flex flex-col gap-1">
          {sortedPosts.map((post) => (
            <button
              key={post.id}
              type="button"
              onClick={() => scrollToPost(post.id)}
              className="assessment-nav-item text-left w-full py-3 px-4 rounded-lg font-['Pixelify_Sans:Regular',sans-serif] text-[#2d0303] text-sm hover:bg-[#2d0303]/15 transition-colors"
              title={post.title}
            >
              <span className="assessment-nav-text">{navTitle(post.title)}</span>
            </button>
          ))}
        </nav>
      </aside>

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