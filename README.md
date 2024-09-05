## First time react project environment setup with vite 


### Prerequisite to install react : npm which is included with "Node.js"


#### First create the folder and open by vs code editor.Then open the vs code terminal and follow the command :


**Step-1 :** 
```sh 
npm create vite@latest
```


**Step-2 :** Then choose the project name like "myreact"


**Step-3 :** Then select a framwork like "React"


**Step-4 :** Then select a variant  like "JavaScript"


**Step-5 :** Now again open the terminal and write the code first enty the project folder so write code :

```sh   
cd myproject
```


**Step-6 :** Now this is right folder location and again write the code :
```sh        
npm install
```


**Step-7 :** Some time waiting to some file and folder node_moduls come this folder.
 

**Step-8 :**  Then open the terminal and write the code for Run the project
```sh
npm run dev
```


**Step-9 :**  Then will provide the local port address link copy the link and past the browser to see the project. `Done`


---


## Using react project Install Tailwind CSS with Vite setup process

#### First create the react project file like `up instruction` then follow the bellow step :

**Step-1 :**  Write the command in vs code terminal
```sh
npm install -D tailwindcss postcss autoprefixer
```

**Step-2 :**  Write the command in vs code terminal
```sh
npx tailwindcss init -p
```

**Step-3 :** Open the `tailwind.config.js` file and paste the below code

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Step-4 :** Go to the `src` folder open the `index.css` and paste the below code

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Now it is well. `Done`
