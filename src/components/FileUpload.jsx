import React, { useState, useRef } from 'react';
import { UploadCloud, File, X, Box, Check, AlertCircle } from 'lucide-react';

export default function FileUpload({ file, onFileChange, error = null }) {
  const [isDragging, setIsDragging] = useState(false);
  const [internalError, setInternalError] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = (selectedFile) => {
    if (!selectedFile) return;
    setInternalError(null);

    // Allowed extensions: 3D CAD or standard image / sketches
    const validExtensions = ['.stl', '.step', '.stp', '.obj', '.3mf', '.png', '.jpg', '.jpeg', '.pdf', '.webp'];
    const fileName = selectedFile.name.toLowerCase();
    const isValid = validExtensions.some((ext) => fileName.endsWith(ext));

    if (!isValid) {
      setInternalError('Please select a valid 3D file (.STL, .STEP, .OBJ, .3MF) or reference image (.PNG, .JPG, .PDF).');
      return;
    }

    // Check size limit: 50MB simulated
    if (selectedFile.size > 50 * 1024 * 1024) {
      setInternalError('Selected file exceeds the 50MB size limit.');
      return;
    }

    let previewUrl = null;
    if (selectedFile.type.startsWith('image/')) {
      previewUrl = URL.createObjectURL(selectedFile);
    }

    onFileChange({
      fileObj: selectedFile,
      name: selectedFile.name,
      size: (selectedFile.size / (1024 * 1024)).toFixed(2) + ' MB',
      type: selectedFile.type,
      previewUrl: previewUrl,
      is3D: fileName.endsWith('.stl') || fileName.endsWith('.step') || fileName.endsWith('.obj') || fileName.endsWith('.3mf')
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    if (file && file.previewUrl) {
      URL.revokeObjectURL(file.previewUrl);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setInternalError(null);
    onFileChange(null);
  };

  const activeError = internalError || error;

  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleInputChange}
        className="hidden"
        accept=".stl,.step,.stp,.obj,.3mf,.png,.jpg,.jpeg,.pdf,.webp"
      />

      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center ${
            isDragging
              ? 'border-copper-500 bg-copper-500/10 scale-[1.01]'
              : 'border-graphite-700 hover:border-copper-500/50 bg-graphite-900/50 hover:bg-graphite-900'
          } ${activeError ? 'border-red-500 bg-red-500/5' : ''}`}
        >
          <div className="w-12 h-12 rounded-xl bg-graphite-800 text-copper-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-inner">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div className="text-sm font-medium text-white mb-1">
            Click to upload or drag & drop files here
          </div>
          <p className="text-xs text-slate-400 font-mono mb-2">
            Accepted: .STL, .STEP, .OBJ, .3MF, .PNG, .JPG, .PDF (Max 50MB)
          </p>
          <span className="text-[11px] font-mono text-copper-400 bg-copper-500/10 px-2.5 py-0.5 rounded border border-copper-500/20">
            Frontend instant preview • No upload required
          </span>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-graphite-900 border border-graphite-700 flex items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3 overflow-hidden">
            {file.previewUrl ? (
              <img
                src={file.previewUrl}
                alt="Upload preview"
                className="w-14 h-14 object-cover rounded-lg border border-copper-500/40 shrink-0"
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-graphite-800 border border-copper-500/30 flex items-center justify-center text-copper-400 shrink-0">
                {file.is3D ? <Box className="w-6 h-6" /> : <File className="w-6 h-6" />}
              </div>
            )}

            <div className="overflow-hidden">
              <div className="text-sm font-medium text-white truncate max-w-xs sm:max-w-md">
                {file.name}
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>{file.size}</span>
                <span>•</span>
                <span className="text-emerald-400 flex items-center gap-0.5">
                  <Check className="w-3 h-3" /> Ready for review
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            className="p-2 rounded-lg bg-graphite-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-graphite-700 transition-colors shrink-0"
            title="Remove attached file"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {activeError && (
        <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5 font-mono">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{activeError}</span>
        </p>
      )}
    </div>
  );
}
