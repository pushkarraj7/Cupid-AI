import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleLike = () => {
    setLiked(true);
    setDisliked(false);
    setFeedbackMessage("Feedback submitted. Thanks for liking!");
    alert("Feedback submitted. Thanks for liking!");
    setTimeout(() => {
      setFeedbackMessage("");
    }, 2000);
  };

  const handleDislike = () => {
    setLiked(false);
    setDisliked(true);
    setFeedbackMessage("Feedback submitted. Thanks for disliking!");
    alert("Thanks for your Feedback!");
    setTimeout(() => {
      setFeedbackMessage("");
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  };

  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  return (
    <section className="flex h-[25rem] min-h-full w-full items-center justify-center rounded-[20px] bg-primary px-8 py-6 text-white shadow-lg shadow-brand/50">
      <div className="flex h-full w-full flex-col justify-between">
        <p className="my-auto text-white lg:text-2xl sm:text-sm  font-bold ">{text}</p>
        <div className="mt-8 flex items-center justify-between">
          <div className="space-x-2">
            <button
              data-tip="Like"
              onClick={handleLike}
            >
              <FontAwesomeIcon icon={faThumbsUp} className="h-6 w-6" />
            </button>
            <button
              data-tip="Dislike"
              onClick={handleDislike}
            >
              <FontAwesomeIcon icon={faThumbsDown} className="h-6 w-6" />
            </button>
          </div>
          <div className="space-x-2">
            <button
              data-tip="Copy"
              onClick={handleCopy}
            >
              <FontAwesomeIcon icon={faCopy} className="h-6 w-6" />
            </button>
            <button
              data-tip="Share on Facebook"
              aria-label="facebook"
              className="react-share__ShareButton"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
              onClick={handleFacebookShare}
            >
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </button>
            <button
              data-tip="Share on Twitter"
              aria-label="twitter"
              className="react-share__ShareButton"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
              onClick={handleTwitterShare}
            >
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;