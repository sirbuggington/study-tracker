import { useState, useRef } from 'react';

interface Props {
  onExport: () => string;
  onImport: (json: string) => boolean;
  onReset: () => void;
  onClose: () => void;
}

export function SettingsModal({ onExport, onImport, onReset, onClose }: Props) {
  const [importText, setImportText] = useState('');
  const [message, setMessage] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const data = onExport();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'study-progress.json';
    a.click();
    URL.revokeObjectURL(url);
    setMessage('Progress exported!');
  };

  const handleImport = () => {
    if (onImport(importText)) {
      setMessage('Progress imported successfully!');
      setImportText('');
    } else {
      setMessage('Invalid JSON. Please check your data.');
    }
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      if (onImport(text)) {
        setMessage('Progress imported from file!');
      } else {
        setMessage('Invalid file. Please check your data.');
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset ALL progress? This cannot be undone.')) {
      onReset();
      setMessage('All progress has been reset.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Settings</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          <section className="settings-section">
            <h3>Export Progress</h3>
            <p>Download your progress to transfer to another device.</p>
            <button className="btn btn-primary" onClick={handleExport}>Download Progress</button>
          </section>

          <section className="settings-section">
            <h3>Import Progress</h3>
            <p>Load progress from a file or paste JSON.</p>
            <div className="import-row">
              <button className="btn btn-secondary" onClick={() => fileRef.current?.click()}>
                Choose File
              </button>
              <input ref={fileRef} type="file" accept=".json" onChange={handleFileImport} hidden />
            </div>
            <textarea
              className="import-textarea"
              value={importText}
              onChange={e => setImportText(e.target.value)}
              placeholder="Or paste JSON here..."
              rows={4}
            />
            <button className="btn btn-secondary" onClick={handleImport} disabled={!importText.trim()}>
              Import from Text
            </button>
          </section>

          <section className="settings-section danger-section">
            <h3>Reset Progress</h3>
            <p>Clear all progress. This cannot be undone.</p>
            <button className="btn btn-danger" onClick={handleReset}>Reset All Progress</button>
          </section>

          {message && <div className="settings-message">{message}</div>}
        </div>
      </div>
    </div>
  );
}
