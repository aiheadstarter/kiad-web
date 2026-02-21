'use client';

import { useState } from 'react';

interface RichEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichEditor({ value, onChange, placeholder }: RichEditorProps) {
  const [mode, setMode] = useState<'visual' | 'html'>('visual');

  const execCommand = (command: string, val?: string) => {
    document.execCommand(command, false, val);
    // Sync content back
    const editor = document.getElementById('rich-editor');
    if (editor) onChange(editor.innerHTML);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
    const editor = document.getElementById('rich-editor');
    if (editor) onChange(editor.innerHTML);
  };

  return (
    <div className="border border-navy-border rounded-xl overflow-hidden">
      {/* Toolbar */}
      <div className="bg-navy flex items-center gap-1 p-2 border-b border-navy-border flex-wrap">
        <button type="button" onClick={() => execCommand('bold')} className="px-2 py-1 text-white hover:bg-navy-card rounded text-sm font-bold" title="굵게">B</button>
        <button type="button" onClick={() => execCommand('italic')} className="px-2 py-1 text-white hover:bg-navy-card rounded text-sm italic" title="기울임">I</button>
        <button type="button" onClick={() => execCommand('underline')} className="px-2 py-1 text-white hover:bg-navy-card rounded text-sm underline" title="밑줄">U</button>
        <span className="w-px h-5 bg-navy-border mx-1" />
        <button type="button" onClick={() => execCommand('formatBlock', 'h2')} className="px-2 py-1 text-white hover:bg-navy-card rounded text-xs" title="제목2">H2</button>
        <button type="button" onClick={() => execCommand('formatBlock', 'h3')} className="px-2 py-1 text-white hover:bg-navy-card rounded text-xs" title="제목3">H3</button>
        <button type="button" onClick={() => execCommand('formatBlock', 'p')} className="px-2 py-1 text-white hover:bg-navy-card rounded text-xs" title="본문">P</button>
        <span className="w-px h-5 bg-navy-border mx-1" />
        <button type="button" onClick={() => execCommand('insertUnorderedList')} className="px-2 py-1 text-white hover:bg-navy-card rounded text-xs" title="목록">• List</button>
        <button type="button" onClick={() => execCommand('insertOrderedList')} className="px-2 py-1 text-white hover:bg-navy-card rounded text-xs" title="번호목록">1. List</button>
        <span className="w-px h-5 bg-navy-border mx-1" />
        <button
          type="button"
          onClick={() => {
            const url = prompt('링크 URL을 입력하세요:');
            if (url) execCommand('createLink', url);
          }}
          className="px-2 py-1 text-white hover:bg-navy-card rounded text-xs"
          title="링크"
        >
          🔗
        </button>
        <button
          type="button"
          onClick={() => {
            const url = prompt('이미지 URL을 입력하세요:');
            if (url) execCommand('insertImage', url);
          }}
          className="px-2 py-1 text-white hover:bg-navy-card rounded text-xs"
          title="이미지"
        >
          🖼️
        </button>
        <span className="w-px h-5 bg-navy-border mx-1" />
        <button type="button" onClick={() => execCommand('formatBlock', 'blockquote')} className="px-2 py-1 text-white hover:bg-navy-card rounded text-xs" title="인용">❝</button>

        <div className="ml-auto">
          <button
            type="button"
            onClick={() => setMode(mode === 'visual' ? 'html' : 'visual')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${mode === 'html' ? 'bg-accent text-navy' : 'text-kiad-muted hover:text-white'}`}
          >
            {mode === 'visual' ? 'HTML' : '비주얼'}
          </button>
        </div>
      </div>

      {/* Editor Area */}
      {mode === 'visual' ? (
        <div
          id="rich-editor"
          contentEditable
          suppressContentEditableWarning
          className="min-h-[300px] p-4 text-white bg-navy-card focus:outline-none rich-content"
          dangerouslySetInnerHTML={{ __html: value }}
          onInput={(e) => onChange((e.target as HTMLDivElement).innerHTML)}
          onPaste={handlePaste}
          data-placeholder={placeholder}
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-h-[300px] p-4 text-green-400 bg-navy-card font-mono text-sm focus:outline-none resize-y"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
