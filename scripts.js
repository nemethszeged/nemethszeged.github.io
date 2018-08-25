// kötelező

$(".newpost").on("click", (event) => {
 event.preventDefault();
   let newTitle = $(".title").val();
   let newContent = $(".content2").val();
  $(".left-side").append(
    `
    <article>
      <!--- <img src="roka.jpg" height=300px>--->
      <div class="article-content">
        <h2> ${newTitle} </h2>
        <p> ${newContent} </p>
      </div>
    </article>
    `)
}
);

// nice to have

let initialData = [
  {
    title: "First Post",
    text: "Text of the first one"
  },
  {
    title: "Second Post",
    text: "Text of the second one"
  },
];

initialData.forEach( post => {
  $(".left-side").append(
  `
  <article>
    <!--- <img src="roka.jpg" height=300px>--->
    <div class="article-content">
      <h2>${post.title}</h2>
      <p>${post.text}</p>
    </div>
  </article>
  `
);
});

// firebase write

let path = "posts/1";

let dataToSave = {
  title: "My first saved blog post",
  text: "Some hilarious content, which proves how awesome I am."
};

fb.ref(path).set(dataToSave);

// firebase load

fb.ref("posts").once('value').then(data => {
  let savedPosts = data.val();
});

// firebase update

/*let samePath = "posts/1";
let updatedData = {
  title: "My first edited and updated blog post",
  text: "Some hilarious content again, which proves how awesome I am again."
};
fb.ref(samePath).set(updatedData);

// firebase delete

fb.ref("posts/2").remove(); */
