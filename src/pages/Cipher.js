import { ArrowRight, MessageCircle, Upload } from 'lucide-react';
import React, { useState } from 'react';

export default function Cipher() {
  const [isDocumentProcessed, setIsDocumentProcessed] = useState(false);
  const [processingType, setProcessingType] = useState(null); // 'translate' or 'simplify'
  const [areButtonsHidden, setAreButtonsHidden] = useState(false);

  const handleProcessing = (type) => {
    setProcessingType(type);
    setIsDocumentProcessed(true);
    setAreButtonsHidden(true); // Hide buttons after click
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="container mx-auto p-6">
        <div
          className={`${
            isDocumentProcessed ? 'grid grid-cols-2 gap-8' : 'flex'
          } min-h-[90vh] transition-all duration-500`}
        >
          {/* Left Half - Document Section */}
          <div
            className={`${
              isDocumentProcessed ? 'w-full' : 'w-screen'
            } flex flex-col items-center justify-center space-y-8 transition-all duration-500`}
          >
            {!isDocumentProcessed ? (
              // Initial Upload State
              <div className="w-full max-w-md mx-auto p-6 text-center bg-white shadow-lg rounded-lg">
                <div className="border-2 border-dashed border-blue-200 rounded-lg p-8 hover:border-blue-400 transition-colors">
                  <Upload className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Upload Medical Document</h3>
                  <p className="text-gray-500 mb-4">Drag and drop your file here or click to browse</p>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Select File
                  </button>
                </div>
              </div>
            ) : (
              // Processed Document State
              <div className="space-y-6 w-full max-w-lg">
                <div className="p-6 bg-white shadow-xl rounded-lg">
                  <div className="border-b p-2">
                    <h3 className="font-semibold text-lg">Symptoms</h3>
                  </div>
                  <div className="p-2">
                    <p className="text-gray-600">Symptoms will appear here after processing</p>
                  </div>
                </div>

                <div className="p-6 bg-white shadow-xl rounded-lg">
                  <div className="border-b p-2">
                    <h3 className="font-semibold text-lg">Diagnosis</h3>
                  </div>
                  <div className="p-2">
                    <p className="text-gray-600">Diagnosis will appear here after processing</p>
                  </div>
                </div>
              </div>
            )}

            {/* Button Row - Always Visible */}
            {!areButtonsHidden && (
              <div className="flex space-x-4 w-full max-w-md mx-auto">
                <button
                  onClick={() => handleProcessing('translate')}
                  className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Translate
                </button>
                <button
                  onClick={() => handleProcessing('simplify')}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Simplify
                </button>
              </div>
            )}
          </div>

          {/* Right Half - Carousel & Chatbot Section */}
          {isDocumentProcessed && (
            <div className="space-y-6 h-full transition-all duration-500">
              {/* Carousel Section */}
              <div className="p-6 bg-white shadow-xl rounded-lg h-[50%]">
                <div className="border-b p-2">
                  <h3 className="font-semibold text-lg">Recommended Next Steps</h3>
                </div>
                <div className="flex items-center justify-between p-4">
                  <button className="text-blue-500 hover:text-blue-600">
                    <ArrowRight className="h-6 w-6 rotate-180" />
                  </button>
                  <div className="flex-1 text-center">
                    <p>Carousel content will go here</p>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600">
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Chat Section */}
              <div className="p-6 bg-white shadow-xl rounded-lg flex flex-col">
                <div className="border-b p-2 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <h3 className="font-semibold text-lg">Chat Assistant</h3>
                </div>
                <div className="flex-1 flex flex-col justify-between p-4">
                  <div className="flex-1 overflow-y-auto">
                    <div className="bg-blue-50 p-3 rounded-lg max-w-[80%] mb-4">
                      How can I help you understand your results?
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}