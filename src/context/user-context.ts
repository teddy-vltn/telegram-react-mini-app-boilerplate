import { createContext } from "react";

export type User = {
    id: number;
    firstName: string;
    lastName?: string;
    username?: string;
    languageCode?: string;
    photoUrl?: string;
    isTelegram: boolean;
};

export type UserContextValue = {
    user: User | null;
    inTelegram: boolean;
};

export const UserContext = createContext<UserContextValue | undefined>(undefined);
