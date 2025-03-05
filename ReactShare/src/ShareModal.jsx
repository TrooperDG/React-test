// import { useState } from "react";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
// } from "react-share";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaWhatsapp,
//   FaLink,
//   FaTimes,
// } from "react-icons/fa";

// const ShareModal = ({ url, title, onClose }) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(url);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
//         {/* Header */}
//         <div className="flex justify-between items-center border-b pb-2">
//           <h2 className="text-lg font-semibold">Share</h2>
//           <button onClick={onClose}>
//             <FaTimes className="text-gray-600 hover:text-gray-800" size={20} />
//           </button>
//         </div>

//         {/* Social Buttons */}
//         <div className="flex justify-around my-4">
//           <FacebookShareButton url={url} quote={title}>
//             <FaFacebook size={32} className="text-blue-600 hover:opacity-80" />
//           </FacebookShareButton>

//           <TwitterShareButton url={url} title={title}>
//             <FaTwitter size={32} className="text-blue-400 hover:opacity-80" />
//           </TwitterShareButton>

//           <WhatsappShareButton url={url} title={title}>
//             <FaWhatsapp size={32} className="text-green-500 hover:opacity-80" />
//           </WhatsappShareButton>
//         </div>

//         {/* Copy Link Button */}
//         <div
//           className="flex items-center border p-2 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200"
//           onClick={handleCopy}
//         >
//           <FaLink size={20} className="text-gray-600 mr-2" />
//           <span className="flex-1 truncate">{url}</span>
//           {copied ? (
//             <span className="text-green-500">Copied!</span>
//           ) : (
//             <span className="text-gray-500">Copy</span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShareModal;

// import { useState } from "react";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   TelegramShareButton,
//   RedditShareButton,
//   LinkedinShareButton,
//   EmailShareButton,
//   PinterestShareButton,
// } from "react-share";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaWhatsapp,
//   FaLink,
//   FaTimes,
//   FaTelegramPlane,
//   FaReddit,
//   FaLinkedin,
//   FaEnvelope,
//   FaPinterest,
//   FaShareAlt,
// } from "react-icons/fa";

// const ShareModal = ({ url, title, onClose }) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(url);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleWebShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title,
//           text: "Check this out!",
//           url,
//         });
//       } catch (error) {
//         console.error("Error sharing:", error);
//       }
//     } else {
//       alert("Your browser does not support Web Share API.");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50 ">
//       <div className="bg-white rounded-lg p-6 w-90 duration-150 shadow-lg ">
//         {/* Header */}
//         <div className="flex justify-between items-center border-b pb-2">
//           <h2 className="text-lg font-semibold">Share</h2>
//           <button onClick={onClose}>
//             <FaTimes className="text-gray-600 hover:text-gray-800" size={20} />
//           </button>
//         </div>

//         {/* Social Buttons */}
//         <div className="grid grid-cols-4  my-4  bg-amber-400">
//           <FacebookShareButton url={url} quote={title}>
//             <FaFacebook size={32} className="text-blue-600 hover:opacity-80" />
//           </FacebookShareButton>

//           <TwitterShareButton url={url} title={title}>
//             <FaTwitter
//               size={32}
//               className="text-blue-400 hover:opacity-80 bg-amber-700"
//             />
//           </TwitterShareButton>

//           <WhatsappShareButton url={url} title={title}>
//             <FaWhatsapp size={32} className="text-green-500 hover:opacity-80" />
//           </WhatsappShareButton>
//           <TelegramShareButton url={url} title={title}>
//             <FaTelegramPlane
//               size={32}
//               className="text-blue-500 hover:opacity-80"
//             />
//           </TelegramShareButton>

//           <RedditShareButton url={url} title={title}>
//             <FaReddit size={32} className="text-red-600 hover:opacity-80" />
//           </RedditShareButton>

//           <LinkedinShareButton url={url} title={title}>
//             <FaLinkedin size={32} className="text-blue-700 hover:opacity-80" />
//           </LinkedinShareButton>

//           <EmailShareButton url={url} subject={title} body={url}>
//             <FaEnvelope size={32} className="text-gray-600 hover:opacity-80" />
//           </EmailShareButton>

//           <PinterestShareButton url={url} media={url} description={title}>
//             <FaPinterest size={32} className="text-red-500 hover:opacity-80" />
//           </PinterestShareButton>
//         </div>

//         {/* Copy Link Button */}
//         <div
//           className="flex items-center border p-2 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200"
//           onClick={handleCopy}
//         >
//           <FaLink size={20} className="text-gray-600 mr-2" />
//           <span className="flex-1 truncate">{url}</span>
//           {copied ? (
//             <span className="text-green-500">Copied!</span>
//           ) : (
//             <span className="text-gray-500">Copy</span>
//           )}
//         </div>

//         {/* Web Share API Button (For Mobile) */}
//         {navigator.share && (
//           <button
//             className="mt-4 w-full flex justify-center items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//             onClick={handleWebShare}
//           >
//             <FaShareAlt size={20} className="mr-2" />
//             Share via Device
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShareModal;

// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   TelegramShareButton,
//   RedditShareButton,
//   LinkedinShareButton,
//   EmailShareButton,
//   PinterestShareButton,
// } from "react-share";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaWhatsapp,
//   FaTelegramPlane,
//   FaReddit,
//   FaLinkedin,
//   FaEnvelope,
//   FaPinterest,
//   FaLink,
//   FaTimes,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";

// const ShareModal = ({ url, title, onClose }) => {
//   const [copied, setCopied] = useState(false);
//   const scrollRef = useRef(null);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(url);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const scroll = (scrollOffset) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: "0%", opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ type: "spring", stiffness: 100, damping: 15 }}
//         className="bg-white rounded-t-lg p-6 w-full max-w-md shadow-lg"
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center border-b pb-2">
//           <h2 className="text-lg font-semibold">Share</h2>
//           <button onClick={onClose}>
//             <FaTimes className="text-gray-600 hover:text-gray-800" size={20} />
//           </button>
//         </div>

//         {/* Scrollable Share Icons */}
//         <div className="relative flex items-center my-4">
//           {/* Left Arrow Button */}
//           <button
//             className="absolute left-0 bg-white shadow-md p-2 rounded-full -ml-4 z-10"
//             onClick={() => scroll(-100)}
//           >
//             <FaChevronLeft size={20} />
//           </button>

//           {/* Scrollable Container */}
//           <div
//             ref={scrollRef}
//             className="flex space-x-4 overflow-hidden scroll-smooth scrollbar-hide w-[80%] mx-auto"
//           >
//             <FacebookShareButton url={url} quote={title}>
//               <FaFacebook
//                 size={32}
//                 className="text-blue-600 hover:opacity-80"
//               />
//             </FacebookShareButton>

//             <TwitterShareButton url={url} title={title}>
//               <FaTwitter size={32} className="text-blue-400 hover:opacity-80" />
//             </TwitterShareButton>

//             <WhatsappShareButton url={url} title={title}>
//               <FaWhatsapp
//                 size={32}
//                 className="text-green-500 hover:opacity-80"
//               />
//             </WhatsappShareButton>

//             <TelegramShareButton url={url} title={title}>
//               <FaTelegramPlane
//                 size={32}
//                 className="text-blue-500 hover:opacity-80"
//               />
//             </TelegramShareButton>

//             <RedditShareButton url={url} title={title}>
//               <FaReddit size={32} className="text-red-600 hover:opacity-80" />
//             </RedditShareButton>

//             <LinkedinShareButton url={url} title={title}>
//               <FaLinkedin
//                 size={32}
//                 className="text-blue-700 hover:opacity-80"
//               />
//             </LinkedinShareButton>

//             <EmailShareButton url={url} subject={title} body={url}>
//               <FaEnvelope
//                 size={32}
//                 className="text-gray-600 hover:opacity-80"
//               />
//             </EmailShareButton>

//             <PinterestShareButton url={url} media={url} description={title}>
//               <FaPinterest
//                 size={32}
//                 className="text-red-500 hover:opacity-80"
//               />
//             </PinterestShareButton>
//           </div>

//           {/* Right Arrow Button */}
//           <button
//             className="absolute right-0 bg-white shadow-md p-2 rounded-full -mr-4 z-10"
//             onClick={() => scroll(100)}
//           >
//             <FaChevronRight size={20} />
//           </button>
//         </div>

//         {/* Copy Link Button */}
//         <div
//           className="flex items-center border p-2 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200"
//           onClick={handleCopy}
//         >
//           <FaLink size={20} className="text-gray-600 mr-2" />
//           <span className="flex-1 truncate">{url}</span>
//           {copied ? (
//             <span className="text-green-500">Copied!</span>
//           ) : (
//             <span className="text-gray-500">Copy</span>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ShareModal;

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  RedditShareButton,
  LinkedinShareButton,
  EmailShareButton,
  PinterestShareButton,
} from "react-share";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegramPlane,
  FaReddit,
  FaLinkedin,
  FaEnvelope,
  FaPinterest,
  FaLink,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaShareAlt,
} from "react-icons/fa";

const ShareModal = ({ url, title, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };
  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: "Check this out!",
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Your browser does not support Web Share API.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        initial={
          isMobile ? { y: "100%", opacity: 0 } : { scale: 0.95, opacity: 0 }
        }
        animate={isMobile ? { y: "0%", opacity: 1 } : { scale: 1, opacity: 1 }}
        exit={isMobile ? { y: "100%", opacity: 0 } : { scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`bg-white rounded-lg p-6 w-full max-w-md shadow-lg ${
          isMobile ? "fixed bottom-0 w-full max-w-full rounded-t-lg" : ""
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Share</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-600 hover:text-gray-800" size={20} />
          </button>
        </div>

        {/* Scrollable Share Icons */}
        <div className="relative flex items-center my-4 ">
          <button
            className="absolute left-0 bg-gray-100 shadow-md p-2 rounded-full -ml-4 z-10"
            onClick={() => scroll(-240)}
          >
            <FaChevronLeft size={14} />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-hidden scroll-smooth scrollbar-hide w-[85%] mx-auto"
          >
            <FacebookShareButton url={url} quote={title}>
              <FaFacebook
                size={isMobile ? 40 : 50}
                className="text-blue-600 hover:opacity-80"
              />
            </FacebookShareButton>

            <TwitterShareButton url={url} title={title}>
              <FaTwitter
                size={isMobile ? 40 : 50}
                className="text-blue-400 hover:opacity-80"
              />
            </TwitterShareButton>

            <WhatsappShareButton url={url} title={title}>
              <FaWhatsapp
                size={isMobile ? 40 : 50}
                className="text-green-500 hover:opacity-80"
              />
            </WhatsappShareButton>

            <TelegramShareButton url={url} title={title}>
              <FaTelegramPlane
                size={isMobile ? 40 : 50}
                className="text-blue-500 hover:opacity-80"
              />
            </TelegramShareButton>

            <RedditShareButton url={url} title={title}>
              <FaReddit
                size={isMobile ? 40 : 50}
                className="text-red-600 hover:opacity-80"
              />
            </RedditShareButton>

            <LinkedinShareButton url={url} title={title}>
              <FaLinkedin
                size={isMobile ? 40 : 50}
                className="text-blue-700 hover:opacity-80"
              />
            </LinkedinShareButton>

            <EmailShareButton url={url} subject={title} body={url}>
              <FaEnvelope
                size={isMobile ? 40 : 50}
                className="text-gray-600 hover:opacity-80"
              />
            </EmailShareButton>

            <PinterestShareButton url={url} media={url} description={title}>
              <FaPinterest
                size={isMobile ? 40 : 50}
                className="text-red-500 hover:opacity-80"
              />
            </PinterestShareButton>
          </div>

          <button
            className="absolute right-0 bg-gray-100 shadow-md p-2 rounded-full -mr-4 z-10"
            onClick={() => scroll(240)}
          >
            <FaChevronRight size={14} />
          </button>
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
        {/* Web Share API Button (For Mobile) */}
        {isMobile && navigator.share && (
          <button
            className="mt-4 w-full flex justify-center items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleWebShare}
          >
            Share on Device <FaShareAlt size={20} className="mr-2 ml-2" />
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default ShareModal;
