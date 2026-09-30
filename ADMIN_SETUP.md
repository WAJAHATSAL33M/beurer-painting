# Bauer Painting — Admin panel guide

The admin panel lives at **/admin** (for example `https://your-site.vercel.app/admin`).
It lets anyone with the password add, edit, reorder and delete:

- **Blog posts** (title, date, image, summary, full article)
- **Special services** pages and their questions & answers
- **Contact details** (phone, email, hours — used across the whole site)
- **Service areas & postal codes** — add the postal codes you serve; the homepage "Find Your Service" popup uses them to tell visitors if their area is covered

## Using it (no code)
1. Go to `/admin` and log in.
2. Pick a section, then **Add new**, or **Edit** an item.
3. Fill in the boxes. Use **Upload new image** for photos (they are shrunk automatically).
4. Press **Done**, then **Publish changes** (bar at the bottom).
5. The live site updates about 1–2 minutes later.

Nothing goes live until you press **Publish changes**.

## One-time setup (a developer or you, about 10 minutes)
The site is hosted on Vercel and stored on GitHub. The panel saves by committing to GitHub, which makes Vercel rebuild the site.

1. **Create a GitHub token**: GitHub → Settings → Developer settings → Personal access tokens → *Fine-grained* → choose only this repository → Repository permissions → **Contents: Read and write** → generate and copy it.
2. In **Vercel → your project → Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `ADMIN_PASSWORD` | a long password you choose |
| `GITHUB_TOKEN` | the token from step 1 |
| `GITHUB_REPO` | `your-username/your-repo` |
| `GITHUB_BRANCH` | usually `main` |
| `GITHUB_CONTENT_DIR` | only if the site sits in a sub-folder of the repo (e.g. `bauer-painting`), otherwise leave empty |

3. **Redeploy** the project. Visit `/admin` and log in.

## Trying it on your own computer
`npm install && npm run dev`, set `ADMIN_PASSWORD` in a `.env.local` file (see `.env.example`), and open http://localhost:3000/admin. With no GitHub settings, changes are saved straight to the files in `content/`.

## Good to know
- Only one person should publish at a time. If two people edit the same section together, the last one to publish wins.
- Deleting an item removes its page. Changing a page's address (URL) breaks old links to it.
- To make the panel edit something new, add an entry to `lib/admin/schema.ts` (and store that content in a JSON file in `content/`).
