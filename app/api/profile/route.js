const profile = {
    name: "Revina Chitra Sagita",
    role: "peserta bootcamp",
    favoriteTech: ["React", "Next.js", "Node.js", "Python", "JavaScript"],
};

export async function GET() {
    return Response.json(profile);
}