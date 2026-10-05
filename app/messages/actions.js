"use server";

import { messages } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteMessage(formData) {
    const id =Number(formData.get("id"));

    const index = messages.findIndex(
        (message) => message.id === id
    );

    if (index === -1) {
        return {
            success: false,
            error: "Pesan tidak ditemukan."
        };
    }

    messages.splice(index, 1);

    revalidatePath("/messages");

    return {
        success: true,
    }
}