import { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLink,
  FaTimes,
} from "react-icons/fa";

const ShareModal = ({ url, title, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Share</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-600 hover:text-gray-800" size={20} />
          </button>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-around my-4">
          <FacebookShareButton url={url} quote={title}>
            <FaFacebook size={32} className="text-blue-600 hover:opacity-80" />
          </FacebookShareButton>

          <TwitterShareButton url={url} title={title}>
            <FaTwitter size={32} className="text-blue-400 hover:opacity-80" />
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={title}>
            <FaWhatsapp size={32} className="text-green-500 hover:opacity-80" />
          </WhatsappShareButton>
        </div>

        {/* Copy Link Button */}
        <div
          className="flex items-center border p-2 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200"
          onClick={handleCopy}
        >
          <FaLink size={20} className="text-gray-600 mr-2" />
          <span className="flex-1 truncate">{url}</span>
          {copied ? (
            <span className="text-green-500">Copied!</span>
          ) : (
            <span className="text-gray-500">Copy</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
