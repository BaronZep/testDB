export async function onRequest(context) {
    const { request, env } = context;
    const db = env.DB; // Le nom de la liaison (binding) configurée dans Cloudflare

    // LECTURE (GET) - Récupérer tous les contacts
    if (request.method === "GET") {
        const { results } = await db.prepare("SELECT * FROM contacts ORDER BY id DESC").all();
        return Response.json(results);
    }

    // CRÉATION (POST) - Ajouter un nouveau contact
    if (request.method === "POST") {
        const data = await request.json();
        await db.prepare(
            "INSERT INTO contacts (prenom, nom, adresse, telephone) VALUES (?, ?, ?, ?)"
        ).bind(data.prenom, data.nom, data.adresse, data.telephone).run();
        return Response.json({ success: true });
    }

    // MODIFICATION (PUT) - Mettre à jour un contact existant
    if (request.method === "PUT") {
        const data = await request.json();
        await db.prepare(
            "UPDATE contacts SET prenom = ?, nom = ?, adresse = ?, telephone = ? WHERE id = ?"
        ).bind(data.prenom, data.nom, data.adresse, data.telephone, data.id).run();
        return Response.json({ success: true });
    }

    // SUPPRESSION (DELETE) - Supprimer un contact
    if (request.method === "DELETE") {
        const data = await request.json();
        await db.prepare("DELETE FROM contacts WHERE id = ?").bind(data.id).run();
        return Response.json({ success: true });
    }

    
    return new Response("Méthode non autorisée", { status: 405 });
}
