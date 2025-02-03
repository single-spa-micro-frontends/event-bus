import { BehaviorSubject } from "rxjs";

// Shared observable for global state
export const cartState$ = new BehaviorSubject<{ cart: any[] }>({ cart: [] });

// Function to update cart
export const addToCart = (book: any) => {
  const currentState = cartState$.getValue();
  cartState$.next({ cart: [...currentState.cart, book] });
};
