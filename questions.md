In https://v3.vuejs.org/guide/introduction.html#composing-with-components on the composing with components setion:
    -on line 13 it says
        '// Mount Vue application
        app.mount(...)'

        -is it mounting toDoItem? and how is it refering to it on the html? shouldn't it use an id?
        -Oh now I see it in the next example haha
        -but where is todo-item coming from? maybe from components { todoItem } ?? 

# day 3
- if I use 
defineProps<{...define here...}>() 
and I try to change a prop within the component I get "... cannot assing ... its a read only ..." so I used 
const { ... , ... , ... } = toRefs(props);
but then when I try to assing something I get cannot assign to const.
I tried using let when definig it but it's the same.

Now I am trying to modify a prop (that has been destructures with toRefs) using .value. But I get the next error in console "Set operation on key "completed" failed: target is readonly." So, how do I get it to not be read-only?
I used  console.log('isRef', isRef(completed) ? 'it is' : "it's not") to see if "completed" is reactive and it is.

Answer: the parent should take care of the list, not the children. So I ended up not going for this aproach.
Anyways, props are inmutable for the children, when I was using toRef I was making them reactive but not mutable.

This video was really helpful
https://www.youtube.com/watch?v=sAj6tdVS2cA

- I dont know what proxy is. I see it whenever I console.log a ref or an object

answer: ...

- I didn't find a good video on computed and watch. I tried to mimic what was being done in the Carrousel Component and it worked but i'm not sure.


