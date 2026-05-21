# React Props:

- In react `props` means  properties.
- They are basically use to pass data from parent to child component.

## Characterstics:

- Readonly
- From parent to child 
- Uni-directional
- Props can pass anything(number,string,object,array...)

## prop drilling 

prop drilling happens when props are passed through many intermidiate components just to reach a deeply needed child.

```js

    APP 
     |
    Parent 
     |
    Child
    
```
