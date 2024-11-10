import { ArrowRight, FileText, MessageCircle, Shield, Upload } from 'lucide-react';
import React, { useState } from 'react';

export default function Cipher() {
  const [isDocumentProcessed, setIsDocumentProcessed] = useState(false);
  const [processingType, setProcessingType] = useState(null);
  const [symptomsContent, setSymptomsContent] = useState([]);
  const [diagnosisContent, setDiagnosisContent] = useState([]);

  const handleProcessing = (type) => {
    setProcessingType(type);
    setIsDocumentProcessed(true);
    setSymptomsContent([
      'Fever: 101°F',
      'Persistent cough',
      'Fatigue',
      'Shortness of breath'
    ]);
    setDiagnosisContent([
      'Primary: Upper respiratory infection',
      'Secondary considerations:',
      '- Bronchitis',
      '- Early pneumonia signs'
    ]);
  };

  const ContentBox = ({ title, content, className }) => (
    <div className={`bg-white/90 backdrop-blur-xl shadow-xl rounded-xl ${className}`}>
      <div className="border-b border-gray-100 p-4">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      </div>
      <div className="p-4 overflow-y-auto">
        {content.length > 0 ? (
          <div className="space-y-2">
            {content.map((item, index) => (
              <p key={index} className="text-gray-600">{item}</p>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">{title} will appear here after processing</p>
        )}
      </div>
    </div>
  );

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
            } flex flex-col items-center justify-center transition-all duration-500`}
          >
            {!isDocumentProcessed ? (
              // Initial Upload State
              <div className="w-full max-w-xl mx-auto space-y-8">
                <div className="text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="h-20 w-20 bg-gradient-to-r from-blue-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
                      <FileText className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
                    Upload Your <span className="text-blue-500">Medical Document</span>
                  </h1>
                </div>

                <div className="p-8 bg-white/90 backdrop-blur-xl shadow-2xl rounded-xl">
                  <div className="border-2 border-dashed border-blue-200 rounded-xl p-8 hover:border-blue-400 transition-colors">
                    <Upload className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Drag and Drop</h3>
                    <p className="text-gray-500 mb-4">or click to browse your files</p>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-xl transition-all duration-300">
                      Select File
                    </button>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 shadow-md hover:shadow-xl transition-all">
                    <button
                      onClick={() => handleProcessing('translate')}
                      className="w-full h-full flex flex-col items-center"
                    >
                      <FileText className="h-6 w-6 text-blue-500 mb-2" />
                      <p className="text-sm text-gray-600 font-semibold">Translate Document</p>
                    </button>
                  </div>
                  <div className="p-6 rounded-lg bg-gradient-to-r from-teal-50 to-teal-100 shadow-md hover:shadow-xl transition-all">
                    <button
                      onClick={() => handleProcessing('simplify')}
                      className="w-full h-full flex flex-col items-center"
                    >
                      <Shield className="h-6 w-6 text-teal-500 mb-2" />
                      <p className="text-sm text-gray-600 font-semibold">Simplify Content</p>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full w-full">
                <div className="flex flex-col space-y-8 h-full">
                  <ContentBox
                    title="Symptoms"
                    content={symptomsContent}
                    className="flex-1 min-h-0"
                  />
                  <ContentBox
                    title="Diagnosis"
                    content={diagnosisContent}
                    className="flex-1 min-h-0"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Half - Carousel & Chatbot Section */}
          {isDocumentProcessed && (
            <div className="h-full flex flex-col space-y-8">
              {/* Carousel Section */}
              <div className="bg-white/90 backdrop-blur-xl shadow-xl rounded-xl flex-1">
                <div className="border-b border-gray-100 p-4">
                  <h3 className="font-semibold text-lg text-gray-800">Recommended Next Steps</h3>
                </div>
                <div className="flex items-center justify-between p-6 h-full">
                  <button className="text-blue-500 hover:text-blue-600 transition-colors">
                    <ArrowRight className="h-6 w-6 rotate-180" />
                  </button>
                  <div className="flex-1 text-center text-gray-600">
                    <p>Carousel content will go here</p>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600 transition-colors">
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Chat Section */}
              <div className="bg-white/90 backdrop-blur-xl shadow-xl rounded-xl flex-1">
                <div className="border-b border-gray-100 p-4 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-blue-500" />
                  <h3 className="font-semibold text-lg text-gray-800">Chat Assistant</h3>
                </div>
                <div className="flex flex-col justify-between p-4 h-[calc(100%-4rem)]">
                  <div className="flex-1 overflow-y-auto">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg max-w-[80%] mb-4">
                      How can I help you understand your results?
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-xl transition-all duration-300">
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