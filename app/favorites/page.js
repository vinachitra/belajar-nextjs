"use client";

import Link from "next/link";
import { useFavorite } from "@/context/FavoriteContext";
import UserCard from "@/components/UserCard";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Favorite Users</h1>

        <p className="mt-2 text-muted-foreground">
          {favorites.length} user ditambahkan ke favorite.
        </p>

        <Link
          href="/users"
          className="mt-4 inline-block font-medium underline"
        >
          ← Kembali ke Users
        </Link>
      </div>

      {favorites.length === 0 ? (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <p className="text-muted-foreground">
            Belum ada user yang ditambahkan ke favorite.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </main>
  );
}