
import React from 'react';
import type { Conflict } from '../types';

interface ConflictReportModalProps {
  conflicts: Conflict[];
  onClose: () => void;
}

const ConflictReportModal: React.FC<ConflictReportModalProps> = ({ conflicts, onClose }) => {
  if (!conflicts.length) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Conflict Report</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
        </div>
        <div className="p-6 overflow-y-auto">
          <ul className="space-y-3">
            {conflicts.map((conflict, index) => (
              <li key={index} className="p-3 rounded-md bg-yellow-50 border border-yellow-200">
                <p className="font-semibold text-yellow-800">{conflict.type}</p>
                <p className="text-sm text-yellow-700">{conflict.message}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-t bg-gray-50 rounded-b-lg">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConflictReportModal;
