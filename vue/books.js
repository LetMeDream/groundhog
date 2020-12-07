var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      books: [
          {
                id: 1,
                title: 'Python Crash Course with Vue',
                price: '$6.69',
                imgDescription: 'Python Book',
                length: '270 pages',
                description: 'A Hands-On, Project-Based Introduction to Programming',
                imgSrc: "img/js.jpg",
                detailsList: []
          },
          {
            id:2,
            title: 'Eloquent Javascript',
            price: '$18.00',
            imgDescription: 'Javascript Book',
            length: 'Unnknown',
            description: "Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications.",
            imgSrc: "img/py.jpg",
            detailsList: []
          },
          {
            id:3,
            title: 'CSS, The Definitive Guide',
            price: '$48.88',
            imgDescription: 'CSS',
            length: 'Unnknown',
            description: "If you’re a web designer or app developer interested in sophisticated page styling, improved accessibility, and saving time and effort, this book is for you.",
            imgSrc: "img/css.jpg",
            detailsList: []
          },
          {
            id:4,
            title: 'Creating Interfaces with Bulma',
            price: '$ 48.88',
            imgDescription: 'Bulma Book',
            length: 'Unnknown',
            imgSrc: "img/bulma.jpg",
            detailsList: ['• Create layouts with Bulma','• Work with components in Bulma','• Design specific elements for your UI', '• Extend components with your own setup', 'Learn to integrati Bulma with JavaScript through the following frameworks: React, Angular, VueJS, and Vanilla JS.']
          },
          {
            id:5,
            title: 'The Analyst',
            price: '$2.50 (Used and new)',
            imgDescription: 'The analyst Book',
            description:'El thriller psicológico es la novela más exitosa del autor y en 2003 se publicó en español en España, Chile, Argentina, Colombia, Venezuela, México, Uruguay y Ecuador, donde se mantuvo entre los más vendidos.',
            length: '376',
            imgSrc: "img/analyst.jpg",
            detailsList:[]
          },
          {
              ig:6,
              title: 'Jaque al Psicoanalista',
              price: '$2.99',
              imgDescription: "John Katzenbach's book",
              description: 'Te la debo',
              length:'desconocido',
              imgSrc: "img/jaque.jpg",
              detailsList:[]

          }
      ]
    }
});
