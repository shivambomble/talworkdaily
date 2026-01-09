// Enums
export enum BookGenre {
    Fiction = 'Fiction',
    NonFiction = 'Non-Fiction',
    Science = 'Science',
    History = 'History'
}

export enum MemberRole {
    Admin = 'Admin',
    User = 'User'
}

// Interfaces
export interface Book {
    id: number;
    title: string;
    author: string;
    genre: BookGenre;
    isAvailable: boolean;
}

export interface Person {
    id: number;
    name: string;
    email: string;
    role: MemberRole;
}

export interface Librarian extends Person {
    role: MemberRole.Admin;
    department: string;
}

export interface Member extends Person {
    role: MemberRole.User;
    borrowedBooks: Book[];
}

export type User = Librarian | Member;
