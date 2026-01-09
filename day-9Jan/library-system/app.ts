import { Book, BookGenre, Person, Librarian, Member, MemberRole, User } from './types';
import { Inventory } from './storage';

// Initialize Inventories
const bookInventory = new Inventory<Book>();
const memberInventory = new Inventory<User>();

// Type Guard to checks if a user is a Librarian
function isLibrarian(user: Person): user is Librarian {
    return (user as Librarian).role === MemberRole.Admin;
}

// Function to print details based on role
function printUserDetails(user: User): void {
    console.log(`\nUser: ${user.name} (${user.role})`);

    if (isLibrarian(user)) {
        console.log(`Department: ${user.department}`);
        console.log('Access: Full Database/Inventory Control');
    } else {
        // user is Member
        console.log(`Borrowed Books Count: ${user.borrowedBooks.length}`);
        user.borrowedBooks.forEach(b => console.log(` - ${b.title}`));
    }
}

// Adding Books
bookInventory.addItem({
    id: 1,
    title: "The TypeScript Handbook",
    author: "Microsoft",
    genre: BookGenre.NonFiction,
    isAvailable: true
});

bookInventory.addItem({
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: BookGenre.NonFiction,
    isAvailable: true
});

// Adding Users
const admin: Librarian = {
    id: 1,
    name: "Sarah Connor",
    email: "sarah@library.com",
    role: MemberRole.Admin,
    department: "Head Librarian"
};

const member: Member = {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    role: MemberRole.User,
    borrowedBooks: []
};

memberInventory.addItem(admin);
memberInventory.addItem(member);

// Simulating Borrowing
const bookToBorrow = bookInventory.findBy('id', 1);
if (bookToBorrow && bookToBorrow.isAvailable) {
    member.borrowedBooks.push(bookToBorrow);
    bookToBorrow.isAvailable = false;
    // In a real app we'd update the book in inventory, 
    // but object reference here works for memory demo
}

// Display
console.log("--- Library System Demo ---");

// List Books
console.log("\nAll Books:");
bookInventory.getItems().forEach(b => console.log(`[${b.genre}] ${b.title} - ${b.isAvailable ? 'Available' : 'Borrowed'}`));

// List Users details
console.log("\nUser Details:");
memberInventory.getItems().forEach(user => printUserDetails(user));
