```export const ABC = () => {} ``` is the same as ``` export function ABC() {}```

- Export is needed so the component can be accessed from all around app
- ```const ABC =``` constant ABC that is assgined a function
- ```() => {}``` a function
- ``` () => {} example:     (abc, cde) => {return abc+cde}``` co () is a place for params {} is a body, and => makes them a function


#### React example component

``` export const Component = {{variable}) => { // component name has to be same as jsx file name and both must start with a big letter

    return ( // returns the jsx code (jsx => html + js react syntax)
        <div> // always one parent html tag
            {variable} // can use any Js code in {}, here we get just variable value to be displayed inside div
        </div>
    );
}
```

#### import.js is a file that shortes the import clause
example
``` import { ABC } from './component/ABC ``` with import.js is just ``` import { ABC } from './component ```


