 class Book{
        title
        author
        pages
        isAvailable

       constructor(title,author,pages,isAvailable){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
       }
        borrow(){
             this.isAvailable=false;
             console.log("book is borrowed");
             
        }
        returnBook(){
             this.isAvailable=true;
             console.log("book is returned");
        }
        getInfo(){
           return `the ${this.title} by ${this.author} (${this.pages} pages) `;
        }
        isLongBook(){
             if(this.pages>300){
              return true;
             }
             return false
        }
      }
      let s1 = new Book("harry potter","mike",358,true)
      let s2 = new Book("Alexander","alex",297,true)
       s1.borrow();
       s2.borrow();
       s1.returnBook();
       
      let s3 = s1.isLongBook();
      console.log(s3)
      let s4 = s2.isLongBook();
      console.log(s4)
      let s5= s1.getInfo();
      console.log(s5);