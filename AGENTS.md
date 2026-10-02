<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared navigation, footer and contact actions in `src/components/site.tsx` so every content route stays consistent.
- Keep course copy and stock-photo references in `src/lib/site-data.ts` so nine course routes share one template and photos can be replaced centrally.
