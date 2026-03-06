import { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface DeleteConfirmProps {
  onClose: () => void;
  onConfirm: () => void;
  title: string;
}

export default function DeleteConfirm({ onClose, onConfirm, title }: DeleteConfirmProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '940124') {
      onConfirm();
      onClose();
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] border-2 border-[#ff6b6b] rounded-[20px] max-w-md w-full">
        <div className="sticky top-0 bg-[#1a1a1a] border-b border-[#ff6b6b] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-[#ff6b6b]" size={24} />
            <h2 className="text-[#ededed] font-['Pixelify_Sans:Regular',sans-serif] text-[28px]">
              Confirm Delete
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#ededed] hover:text-[#ff6b6b] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-[rgba(136,136,136,0.85)] font-['Inter:Medium',sans-serif] mb-4">
            Are you sure you want to delete the article "<span className="text-[#ededed]">{title}</span>"? This action cannot be undone.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#ededed] mb-2 font-['Inter:Medium',sans-serif]">
                Please enter password to confirm deletion
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#2a2a2a] border border-[#5d1c1c] rounded-lg px-4 py-3 text-[#ededed] focus:outline-none focus:border-[#ff6b6b]"
                placeholder="Enter password"
              />
            </div>
            {error && (
              <p className="text-[#ff6b6b] text-sm">{error}</p>
            )}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-[#ededed] font-['Pixelify_Sans:Regular',sans-serif] py-3 rounded-lg transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#ff6b6b] hover:bg-[#ff8888] text-[#2d0303] font-['Pixelify_Sans:Regular',sans-serif] py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Confirm Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}