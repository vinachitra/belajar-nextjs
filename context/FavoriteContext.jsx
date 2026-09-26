"use client";

import { createContext, useContext, useState  } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    function addFavorite(user) {
        setFavorites((prev) => [...prev, user]);
    }

    function removeFavorite(userId) {
        setFavorites((prev) => 
            prev.filter((user) => user.id !== userId)
        );
    }

    function isFavorite(userId) {
        return favorites.some((user) => user.id === userId);
    }

    return (
        <FavoriteContext.Provider
           value={{
             favorites,
             addFavorite,
             removeFavorite,
             isFavorite,
           }}
        >
            {children}

        </FavoriteContext.Provider>
    );
}

export function useFavorite() {
    return useContext(FavoriteContext);
}