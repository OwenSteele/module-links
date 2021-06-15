# :chains: module-links
A React app for creating a modular-style linking homepage. Link to you projects, other sites and social media, or even show off your CV and GitHub profile.

# :books: Design

* **module-links uses JSON files for data, styling and layout**
* **no code alterations are required to instantly started using it on your own website**

<ins>layoutData.json  */data/theme/layoutData.json*</ins>
```
{
    "websiteFont": "monaco,Consolas,Lucida Console,monospace",    
    "titleHeightCss": "100vh",
    "titleText": "module-links title",
    "titleBackgroundColor": "darkslategray",
    "titleDivBackgroundColor": "#000000",
    "titleDivColor": "#ffffff",
    "titleBackgroundImageUrl": "https://owensteele.co.uk/pictures/home3.jpg",
    "titleBio": "",
    "titleImageUrl": "",
    "scrollButtonColor": "#000000"
}
```
<ins>moduleData.json  */data/modules/moduleData.json*</ins>
```
[
    {
        "title": "Example Title",
        "imageUrl": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "position": 1,
        "primaryLinkUrl": "https://github.com/OwenSteele/module-links",
        "secondaryLinkUrl": "https://github.com/OwenSteele",
        "secondaryLinkText": "By Owen Steele",
        "bio": "Add some info here about your link!",
        "backgroundColor": "#ffffff",
        "textColor": "#000000",
        "textHoverColor": "##FF8B1F",
        "backgroundImageUrl": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    }
]
```
* built to have 1 to 9 modules
* can add new sections to **main.tsx**


# :building_construction: Getting Started

1. **Download from github**
```
git clone https://github.com/OwenSteele/module-links.git
```
2. **Navigate to directory**
```
cd ./module-links
```
3. **Insall dependencies (yarn preferred)**
```
yarn install
# OR
npm install
```
4. **Run**
```
yarn start
#OR
npx start
```
