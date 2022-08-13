<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ezterr/head-hunter-fe">
    <img src="./images/logo.png" alt="Logo" width="226" height="160">
  </a>

<h1 align="center">MegaK - Head Hunter</h1>

  <p align="center">
    Aplikacja "MegaK - Head Hunter" została stworzona aby łączyć kursantów MegaK z potencjalnymi pracodawcami, którzy szukają uzdolnionych i ambitnych programistów.
    <br />
    <br />
<!--
    <a href="https://github.com/ezterr/head-hunter-fe">View Demo</a>
    ·
    <a href="https://github.com/ezterr/head-hunter-fe/issues">Report Bug</a>
    ·
    <a href="https://github.com/ezterr/head-hunter-fe/issues">Request Feature</a>
-->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Spis treści</summary>
  <ol>
    <li>
      <a href="#o-projekcie">O projekcie</a>
      <ul>
        <li><a href="#technologie">Technologie</a></li>
      </ul>
    </li>
    <li>
      <a href="#jak-zacząć">Jak zacząć</a>
      <ul>
        <li><a href="#warunki-wstepne">Warunki wstępne</a></li>
        <li><a href="#instalacja">Instalacja</a></li>
      </ul>
    </li>
    <li><a href="#użycie">Użycie</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## O projekcie

[![Product Name Screen Shot][product-screenshot]]

Projekt został stworzony na potrzeby MegaK. Aplikacja ma na celu pomóc kursantom w znalezieniu pracy, a firmom w znalezieniu zdolnych, początkujących programistów. Aplikacja zawiera trzy role.
1. **Admin** - czuwa nad przebiegiem rekrutacji
2. **Hr** - posiada uprawnienia do wyświetlania listy kursantów, brania kursantów na rozmowy oraz ich zatrudniania.
3. **Kursant** - posiada możliwość wyświetlania własnego profilu, a także możliwość edytowania go.

<p align="right">(<a href="#top">back to top</a>)</p>



### Technologie
[![React][React.js]][React-url]
[![Typescript][Typescript]][Typescript-url]
[![Sass][Sass]][Sass-url]
[![Reactrouter][Reactrouter]][Reactrouter-url]
[![Papaparse][Papaparse]][Papaparse-url]
[![Axios][Axios]][Axios-url]
[![Dropzone][Dropzone]][Dropzone-url]
[![Reacttoastify][Reacttoastify]][Reacttoastify-url]
[![Reactpopup][Reactpopup]][Reactpopup-url]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Jak zacząć

### Warunki wstępne

* npm
  ```sh
  npm@^6.14.15
  ```

### Instalacja

1. Sklonuj repozytorium
   ```sh
   git clone https://github.com/ezterr/head-hunter-fe.git
   ```
2. Przejdź do katalogu projektu
   ```sh
   cd head-hunter-fe
   ```
2. Zainstaluj wszystkie zależności
   ```sh
   npm install
   ```
3. Podaj adres url do api `src/config.js`
   ```js
   export const apiUrl = process.env.REACT_APP_API_URL ?? 'http://localhost:3001/api';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Użycie

### Admin
1. **Dodawanie kursantów - należy przenieść i upuścić plik csv, a następnie zapisać przyciskiem "zapisz"**.
<br/>
<br/>
![add-students-screenshot] 
![add-students-2-screenshot]
![csv-screenshot]
*Przykładowy plik csv ^*
<br/>
<br/>
2. **Dodawanie hr - należy wypełnić wszystkie dane i kliknąć przycisk "Dodaj"**
    <br />
    <br />
    ![add-hr-screenshot]
    <br />
    <br />
3. **Zmiana hasła - Admin ma możliwość zmiany swojego hasła**
   <br />
   <br />
   ![admin-change-password-screenshot]
   <br />
   <br />
4. **Powiadomienia - akcje, o których admin musi, wiedzieć zostają wyświetlone w zakładce powiadomienia. Można je wyszukiwać, używając imienia, nazwiska lub id użytkownika**
   <br />
   <br />
   ![notification-screenshot]
   <br />
   <br />

### Hr
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ezterr/head-hunter-fe.svg?style=for-the-badge
[contributors-url]: https://github.com/ezterr/head-hunter-fe/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ezterr/head-hunter-fe.svg?style=for-the-badge
[forks-url]: https://github.com/ezterr/head-hunter-fe/network/members
[stars-shield]: https://img.shields.io/github/stars/ezterr/head-hunter-fe.svg?style=for-the-badge
[stars-url]: https://github.com/ezterr/head-hunter-fe/stargazers
[issues-shield]: https://img.shields.io/github/issues/ezterr/head-hunter-fe.svg?style=for-the-badge
[issues-url]: https://github.com/ezterr/head-hunter-fe/issues
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Sass]: https://img.shields.io/badge/sass-20232A?style=for-the-badge&logo=sass&logoColor=d5699f
[Sass-url]: https://sass-lang.com/
[Papaparse]: https://img.shields.io/badge/Papa%20Parse-20232A?style=for-the-badge&logo=papaparse&logoColor=1D80AB
[Papaparse-url]: https://www.papaparse.com/
[Axios]: https://img.shields.io/badge/axios-20232A?style=for-the-badge&logo=axios&logoColor=1D80AB
[Axios-url]: https://axios-http.com/docs/intro
[Dropzone]: https://img.shields.io/badge/react%20dropzone-20232A?style=for-the-badge&logo=reactdropzone&logoColor=1D80AB
[Dropzone-url]: https://react-dropzone.js.org/
[Typescript]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript&logoColor=3178c6
[Typescript-url]: https://www.typescriptlang.org/
[Reactrouter]: https://img.shields.io/badge/React%20Router-20232A?style=for-the-badge&logo=reactrouter&logoColor=fff
[Reactrouter-url]: https://reactrouter.com/
[Reacttoastify]: https://img.shields.io/badge/react%20toastify-20232A?style=for-the-badge&logo=react-toastify&logoColor=fff
[Reacttoastify-url]: https://fkhadra.github.io/react-toastify/introduction
[Reactpopup]: https://img.shields.io/badge/reactjs%20popup-20232A?style=for-the-badge&logo=reactjs-popup&logoColor=fff
[Reactpopup-url]: https://react-popup.elazizi.com/
[Reactrouter]: https://img.shields.io/badge/react%20spinners-20232A
[product-screenshot]: images/available.png
[add-students-screenshot]: images/add-students.png
[add-students-2-screenshot]: images/add-students-2.png
[csv-screenshot]: images/csv.png
[add-hr-screenshot]: images/add-hr.png
[admin-change-password-screenshot]: images/admin-change-password.png
[notification-screenshot]: images/notification.png

