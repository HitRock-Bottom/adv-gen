# Frontend Mentor - Advice generator app solution

here is my solution for the advice gen app challenge.
As you can guess , I'm a noob at writing a readme file.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### What I learned

learned a new way to center a div in the page vertically and horizontally.

```css
.card{
  position : absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
```

ajax call to fetch data from an api
```js
$.ajax({
  url: Url,
  type: "GET",
  success : function(result){
    let advice = JSON.parse(result);
    note[0].innerText = advice.slip.advice;
    ad_no.innerText = advice.slip.id;
  },
  error : function(error)
  {
    console.log(`Error ${error}`);
  }
})
```
