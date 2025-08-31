import React, { useEffect, useMemo, useState } from "react";
import { User, UserContext } from "./user-context";

function readTelegramUser(): User | null {
    try {
        type TgUser = {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
            photo_url?: string;
        };
        type TgWindow = {
            Telegram?: { WebApp?: { initDataUnsafe?: { user?: TgUser } } };
        };
        const tgUser: TgUser | undefined = (window as unknown as TgWindow)
            .Telegram?.WebApp?.initDataUnsafe?.user;
        if (!tgUser) return null;
        return {
            id: tgUser.id,
            firstName: tgUser.first_name,
            lastName: tgUser.last_name,
            username: tgUser.username,
            languageCode: tgUser.language_code,
            photoUrl: tgUser.photo_url,
            isTelegram: true,
        };
    } catch {
        return null;
    }
}

export const UserProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const u = readTelegramUser();
        setUser(u);
    }, []);

    const value = useMemo(() => ({ user, inTelegram: !!user?.isTelegram }), [user]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
