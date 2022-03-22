# Princeton Design System for Angular
The design system is a library of components to be primarily used for Angular projects.

## Installation

```
npm install @princeton-design/design-system-angular --save
```

## Using Angular Components
In Angular environments, include the following code in the angular.json file order to map images and css files from the @princeton-design/design-system package.

```
 "assets": [
   "src/assets",
     {
       "glob": "**/*",
       "input": "./node_modules/@princeton-design/design-system",
       "output": "/assets/"
     }
 ],
 "styles": [
   "src/styles.css",
   "./node_modules/@princeton-design/design-system/jazz_fonts.css",
   "./node_modules/@princeton-design/design-system/jazz_sans.css",
   "./node_modules/@princeton-design/design-system/jazz_serif.css"
 ],
```

In the project's module file import the library
```
import {DesignSystemAngularModule} from "@princeton-design/design-system-angular";
```

Also include the DesignSystemAngularModule in the module file

```
@NgModule({
  imports: [
    DesignSystemAngularModule
  ]
})
```

## Using CSS. icons and images from the  @princeton-design/design-system project

In order to get the appropriate assets needed for the components to render properly you will need to install the @princeton-design/design-system
package which contains the stylesheets, icons and images that the components need.

```
npm install @princeton-design/design-system --save
```

**
