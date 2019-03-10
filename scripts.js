//alert("A 🦊  éleményért dobd el a mobilod - és válts laptopra!");

// kötelező + write-pro

let id = 0;

function blogpost(post){
  $(".left-side").append(
  `
  <article>
    <!--- <img src="roka.jpg" height=300px>--->
    <div class="article-content">
      <h2>${post.title}</h2>
      <p>${post.text}</p>
      <button type="button" data-delete="${post.id}" class="delete-button"> X </button>
    </div>
  </article>
  `
);
}

$(".newpost").on("click", (event) => {
 event.preventDefault();
   let newTitle = $(".title").val();
   let newContent = $(".content2").val();
    id = id + 1;
    let path = "posts/" + id;

    let dataToSave = {
      id: id,
      title: newTitle,
      text: newContent
    };

    fb.ref(path).set(dataToSave).then(function(){
      blogpost(dataToSave)
    })
    $(".title").val("");
    $(".content2").val("");
  }
);

// nice to have

let initialData = [
  {
    title: "Róka Dávid",
    text: "Szevasz!"
  }
];

initialData.forEach( post => {
  $(".left-side").append(
  `
  <article>
    <!--- <img src="roka.jpg" height=300px>--->
    <div class="article-content">
      <h2>${post.title}</h2>
      <p>${post.text}</p>
      <button type="button" data-delete="${post.id}" class="delete-button"> X </button>
    </div>
  </article>
  `
);
});

// firebase load

fb.ref("posts").once('value').then(data => {
  let initialData = data.val();
  if (initialData !== null) {
    initialData.forEach( post => {
      console.log(post);
      id = initialData.length - 1;
    })
}});

// delete button

//fb.ref("posts/2").remove();


$(".left-side").on("click", ".delete-button", (event) => {
    if (confirm("Biztosan törlöd?")){
      let deletingid = $(event.target).attr("data-delete")
      fb.ref("posts/" + deletingid).remove(function (error){
        //ennek a segítségével frissítés nélkül törlődik a poszt
        $(event.target).parent().parent().remove();
      });
      console.log(deletingid)
    }
});



// firebase update

let samePath = "posts/1";
let updatedData = {
  title: "My first edited and updated blog post",
  text: "Some hilarious content again, which proves how awesome I am again."
};
fb.ref(samePath).set(updatedData);

// firebase delete

//fb.ref("posts/2").remove();

/* firebase write

let path = "posts/1";

let dataToSave = {
  title: "My first saved blog post",
  text: "Some hilarious content, which proves how awesome I am."
};

fb.ref(path).set(dataToSave);

*/
