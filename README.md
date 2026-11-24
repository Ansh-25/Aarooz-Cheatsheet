# Arūz

A mobile pocket guide to Urdu–Hindi poetic meter. The site runs directly on GitHub Pages.

## Publish on GitHub Pages

1. Create a public GitHub repository, for example `aruz`.
2. Extract the ZIP and open the extracted folder. In your repository, choose **Add file → Upload files**, then drag in the files inside the extracted folder and commit them to `main`. The `index.html` file should appear at the top level of the repository. The optional `.nojekyll` file is hidden on some computers. The site also works if you omit it when uploading.
3. Go to **Settings → Pages**. Set **Source** to **Deploy from a branch**, select **main** and **/ (root)**, and click **Save**.
4. When GitHub shows the live URL in **Settings → Pages**, open it on your phone. For a repository named `aruz`, it typically looks like `https://YOUR-USERNAME.github.io/aruz/`.

[GitHub Pages publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Install on your phone

- **iPhone** — Open the live site in Safari. Tap **Share → Add to Home Screen**, enable **Open as Web App** if shown, then tap **Add**. [Apple instructions](https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios)
- **Android** — Open the live site in Chrome. In the three-dot menu, tap **Install app** or **Install and create shortcut**, then confirm installation. Some Chrome versions show **Add to Home screen**. [Chrome instructions](https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=en)

Once the guide has loaded online and finished caching, you can reopen it offline. Linked sources require an internet connection.

When changing the HTML or icons, also increment the version in `sw.js` (for example, `v1` to `v2`) so returning visitors receive the updated offline copy.
