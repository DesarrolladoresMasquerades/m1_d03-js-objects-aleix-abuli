// Iteration 1
const user = {
    name: 'Aleix',
    id: 8
};

// Iteration 2
const book1 = {
    title:  "Black Hole",
    author: "Charles Burns",
    isbn: "0375714723",
    category: "Underground American Comics"
};

const book2 = {
    title:  "Confessions of a Mask",
    author: "Yukio Mishima",
    isbn: "081120118X",
    category: "Modern Classic"
};

// Iteration 3
user.books = [book1, book2];

// Iteration 4
const library = [];
library.push(user);

// Iteration 5
const book3 = {
    title:  "The Incal",
    author: "Moebius",
    isbn: "1643377809",
    category: "French BD"
}

library[0].books.push(book3);

//Bonus Iteration
const user2 = {
    name: 'Ana',
    id: 20,
    books: [book1, book2, book3]
};

library.push(user2);

library.forEach((user)=>{
    user.books.forEach((book)=>{
        console.log(book)
    })
});