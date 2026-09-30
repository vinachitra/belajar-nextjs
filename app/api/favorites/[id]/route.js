import { favorites } from "@/lib/db";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const favorite = favorites.find((f) => String(f.id) === id);

  if (!favorite) {
    return Response.json(
      { error: "Data tidak ditemukan" },
      { status: 404 }
    );
  }

  const body = await request.json();

  if (!body || Object.keys(body).length === 0) {
    return Response.json(
      { error: "Body request tidak boleh kosong" },
      { status: 400 }
    );
  }

  if (body.note !== undefined) {
    favorite.note = body.note;
  }

  return Response.json({
    message: "Data berhasil diubah",
    data: favorite,
  });
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const index = favorites.findIndex((f) => String(f.id) === id);

  if (index === -1) {
    return Response.json({ error: "Data tidak ditemukan" }, { status: 404 });
  }

  favorites.splice(index, 1);
  return Response.json({ message: "Berhasil dihapus" });
}