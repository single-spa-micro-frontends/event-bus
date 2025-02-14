import { BehaviorSubject } from "rxjs";


type Book ={
    bookId: string;
    title: string;
    author: string;
    quantity: number;
    [key: string]: any; 
  }
  

export const cartState$ = new BehaviorSubject<{ cart: Book[] }>({ cart: [] });
export const searchState$ = new BehaviorSubject<{ query: string }>({ query: '' });
export const selectedBookState$ = new BehaviorSubject<{ book: Book }>({ book: {
    bookId: "",
    title: "",
    author: "",
    quantity: 0
} });


export const setSelectedBook = (book: Book) => {
    selectedBookState$.next({book: book})
}


export const setSearchQuery = (query: string) => {
    searchState$.next({query: query})
}

export const addToCart = (book: Book) => {
  const currentState = cartState$.getValue();

  const existingItem = currentState.cart.find((item) => item.bookId === book.bookId);

  if(existingItem){
    const updatedCart = currentState.cart.map((item) =>
        item.bookId === book.bookId
          ? { ...item, quantity: item.quantity + book.quantity }
          : item
      );
    cartState$.next({cart: updatedCart})
    return
  }

  cartState$.next({ cart: [...currentState.cart, book] });
};

export const removeFromCart = (bookId: string) => {
    const updatedCart = cartState$.getValue().cart.filter((item) => item.bookId !== bookId);
    cartState$.next({cart: updatedCart})
}
