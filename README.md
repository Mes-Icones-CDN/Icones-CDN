# My Icon Library

Une collection d'icônes personnalisées pour vos projets web.

Accedez a la page GitHub:
https://mes-icones-cdn.github.io/Icones-CDN/

## Utilisation

fichier CSS (Integration Html) :

```html
<link rel="stylesheet" href="https://mes-icones-cdn.github.io/Mes-Icones-CDN/styles/iconsCDN.css" />
```

UTILISATION HTML (Exemple):

```html
<div class="icon icon-P_Noire_plein"></div>
<i class="icon icon-P_Noire_plein"></i>
```

SOUS FORME D'IMAGE HTML:

```html
<img
  src="https://mes-icones-cdn.github.io/Mes-Icones-CDN/icons/Upload-01.svg"
  alt="Upload-01"
/>
```

COMMANDE SVGO (Terminal)

```
Get-ChildItem "C:\Users\djodj\Desktop\CODE Icons CDN\icons\*.svg" | ForEach-Object { svgo --config="C:\Users\djodj\Desktop\CODE Icons CDN\svgo.config.mjs" $_.FullName }
```
