export default function BookList() {
   let pageTitle = "Books I Have Read";
   let book1 = "https://images.thenile.io/r1000/9780007458424.jpg";
   let book2 = "https://cdn.kobo.com/book-images/bc413bdd-66cc-4309-99dd-b3ab7b3cda14/1200/1200/False/the-fellowship-of-the-ring-the-lord-of-the-rings-book-1-1.jpg";
   let book3 = "https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/9/0/3/3/1001004001093309.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} height="200" width="150" alt="The Hobbit" />
         <img src={book2} height ="200" width="150" alt="The Fellowship of The Ring" />
         <img src={book3} height="200" width="150" alt="The Two Towers" />
      </div>      
   );
}