import React from "react";
import styles from "./App.module.scss";
import clsx from "clsx";
import { useShowPopup } from "@vkruglikov/react-telegram-web-app";
import { useUser } from "../../context/useUser";

export type AppProps = {
  className?: string;
};
export const App: React.FC<AppProps> = ({ className }) => {
  const showPopup = useShowPopup();
  const { user, inTelegram } = useUser();

  const showPopupOnClick = async () => {
    const message =
      "Thanks for using react-mini-app! I hope it helps you to create awesome Telegram Mini apps!";
    await showPopup({ title: "Hey!", message: message });
  };

  return (
    <div className={clsx(styles.App, className)}>
      <div className={styles.container}>
        {user ? (
          <div className="flex flex-col items-center gap-1">
            <div className="text-sm text-hint">Signed in via Telegram</div>
            <div className="text-lg font-semibold">{user.firstName} {user.lastName}</div>
            {user.username && (
              <div className="text-sm">@{user.username}</div>
            )}
          </div>
        ) : (
          <div className="text-sm text-hint">
            {inTelegram ? "No user data available" : "Open inside Telegram to see your profile info"}
          </div>
        )}
        <a
          href="https://github.com/usernein/react-mini-app"
          target="_blank"
          className={styles.githubLink}
        >
          <h1 className={styles.title}>react-mini-app</h1>
        </a>

        <button onClick={showPopupOnClick} className={styles.clickMe}>
          Show popup!
        </button>
      </div>
    </div>
  );
};
