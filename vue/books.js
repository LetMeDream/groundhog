/* ###### VUE INSTANCE ##### */
var app = new Vue({
    /* Options object */
    el: '#books',
    data: {
      message: 'Hello Vue!',
      unorderBooks: [
        /* Libro 1 */
        {
              id: 1,
              title: 'Python Crash Course with Vue',
              price: 6.69,
              imgDescription: 'Python Book',
              length: 270,
              description: 'A Hands-On, Project-Based Introduction to Programming',
              imgSrc: "img/js.jpg",
              detailsList: []
        },
        /* Libro 2 */
        {
          id:2,
          title: 'Eloquent Javascript',
          price: 18.00,
          imgDescription: 'Javascript Book',
          length: 444,
          description: "Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications.",
          imgSrc: "img/py.jpg",
          detailsList: []
        },
        /* Libro 3 */
        {
          id:3,
          title: 'CSS, The Definitive Guide',
          price: 48.88,
          imgDescription: 'CSS',
          length: 667,
          description: "If you’re a web designer or app developer interested in sophisticated page styling, improved accessibility, and saving time and effort, this book is for you.",
          imgSrc: "img/css.jpg",
          detailsList: []
        },
        /* Libro 4 */
        {
          id:4,
          title: 'Creating Interfaces with Bulma',
          price: 6.66,
          imgDescription: 'Bulma Book',
          length: 779,
          imgSrc: "img/bulma.jpg",
          detailsList: ['• Create layouts with Bulma','• Work with components in Bulma','• Design specific elements for your UI', '• Extend components with your own setup']
        },
        /* Libro 5 */
        {
          id:5,
          title: 'The Analyst',
          price: 2.50,
          imgDescription: 'The analyst Book',
          description:'El thriller psicológico es la novela más exitosa del autor y en 2003 se publicó en español en España, Chile, Argentina, Colombia, Venezuela, México, Uruguay y Ecuador, donde se mantuvo entre los más vendidos.',
          length: 376,
          imgSrc: "img/analyst.jpg",
          detailsList:[]
        },
        /* Libro 6 */
        {
            ig:6,
            title: 'Jaque al Psicoanalista',
            price: 2.99,
            imgDescription: "John Katzenbach's book",
            description: 'Te la debo',
            length:111,
            imgSrc: "img/jaque.jpg",
            detailsList:[]

        }
      ],
      books: [
        /* Libro 1 */
        {
              id: 1,
              title: 'Python Crash Course with Vue',
              price: 6.69,
              imgDescription: 'Python Book',
              length: 270,
              description: 'A Hands-On, Project-Based Introduction to Programming',
              imgSrc: "img/marmota.jpg",
              detailsList: []
        },
        /* Libro 2 */
        {
          id:2,
          title: 'Eloquent Javascript',
          price: 18.00,
          imgDescription: 'Javascript Book',
          length: 444,
          description: "Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications.",
          imgSrc: "img/py.jpg",
          detailsList: []
        },
        /* Libro 3 */
        {
          id:3,
          title: 'CSS, The Definitive Guide',
          price: 48.88,
          imgDescription: 'CSS',
          length: 667,
          description: "If you’re a web designer or app developer interested in sophisticated page styling, improved accessibility, and saving time and effort, this book is for you.",
          imgSrc: "img/marmota2.jpg",
          detailsList: []
        },
        /* Libro 4 */
        {
          id:4,
          title: 'Creating Interfaces with Bulma',
          price: 6.66,
          imgDescription: 'Bulma Book',
          length: 779,
          imgSrc: "img/bulma.jpg",
          detailsList: ['• Create layouts with Bulma','• Work with components in Bulma','• Design specific elements for your UI', '• Extend components with your own setup']
        },
        /* Libro 5 */
        {
          id:5,
          title: 'The Analyst',
          price: 2.50,
          imgDescription: 'The analyst Book',
          description:'El thriller psicológico es la novela más exitosa del autor y en 2003 se publicó en español en España, Chile, Argentina, Colombia, Venezuela, México, Uruguay y Ecuador, donde se mantuvo entre los más vendidos.',
          length: 376,
          imgSrc: "img/analyst.jpg",
          detailsList:[]
        },
        /* Libro 6 */
        {
            ig:6,
            title: 'Jaque al Psicoanalista',
            price: 2.99,
            imgDescription: "John Katzenbach's book",
            description: 'Te la debo',
            length:111,
            imgSrc: "img/jaque.jpg",
            detailsList:[]

        }
      ]
    },
    methods:{

        sort: function(event){
            /* byPrice */
            if(event.target.value === 'byPrice'){
                 /* Let's make it an array */
                let prices = [];
                let booksByPrice = [];

                for(let i = 0; i<= this.books.length - 1; i++){
                    /* Whenever it exists... */
                    if(this.books[i].price){
                        prices.push(this.books[i].price);
                    }

                }
                /* unordered */
                /* console.log(prices); */

                /* Let's sort() */
                prices = prices.sort((a, b) => a - b);

                /* just ordered */
                /* console.log(prices); */
                /* Now with the prices ordered, let's try to manipulate the DOM */
                /* console.log(this.books.length); */
                for(let i = 0; i<= this.books.length - 1; i++){

                    if(i !== -1){

                        booksByPrice.push(this.books[i]);

                    }

                };
                booksByPrice.sort((a,b)=> a.price - b.price);
                /* for(let i = 0; i<= booksByPrice.length - 1; i++){

                    console.log(booksByPrice[i].title);

                } */
                this.books = booksByPrice;

            };

            /* unordered */
            if(event.target.value === 'unordered'){
                this.books = this.unorderBooks;
            };

            /* byPageCount */
            if(event.target.value === 'byPageCount'){
                 /* Let's make it an array */
                let pageCount = [];
                let booksByPageCount = [];

                for(let i = 0; i<= this.books.length - 1; i++){
                    /* Whenever it exists... */
                    if(this.books[i].length){
                        pageCount.push(this.books[i].length);
                    }

                }
                /* unordered */
                console.log(pageCount);
                /* Let's now sort() */
                pageCount = pageCount.sort((a, b) => a - b);
                /* just ordered */
                console.log(pageCount);
                /* Now with the prices ordered, let's try to manipulate the DOM */
                console.log(this.books.length);
                for(let i = 0; i<= this.books.length - 1; i++){

                    if(i !== -1){

                        booksByPageCount.push(this.books[i]);

                    }

                };
                booksByPageCount.sort((a,b)=> a.length - b.length);
                this.books = booksByPageCount;
            }

        },

        filterByName: function(event){
            let booksFiltrados = [];
            let cache='x';

            /* Confirming I got the value from the input */
            console.log(event.target.value);
            /* We cache it */
            if(cache.length < event.target.value.length){
              console.log(cache.length < event.target.value.length)
              console.log('He erased');
              cache = event.target.value;
            }else{
              console.log(`Cache: ${cache} is ${event.target.value.length} `);
              cache = event.target.value;
            }


            /* Since I do, we now... */
            if(event.target.value === ''){
                /* If it's empty, then don't filter */
                this.books = this.unorderBooks;
            }else{

                for(let i = 0; i <= this.books.length-1;i++){
                    if(this.books[i].title.toLowerCase().includes(event.target.value)){
                        booksFiltrados.push(this.books[i]);
                    }
                }

                /* Then we update the DOM */
                this.books = booksFiltrados;

            }

        },

        filterTwo: function(){

          for(let i = 0; i <= this.books.length-1;i++){
                console.log(this.books[i].title);
          }


        },

        hello:function(){

          alert('hello');

        }

    }
});
