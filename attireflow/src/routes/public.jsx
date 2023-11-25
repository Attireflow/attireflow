import Checkout from 'pages/Checkout/Checkout';
import Product from 'pages/Products/Products';
import Contact from 'pages/Contact/Contact';
import Privacy from 'pages/Privacy/Privacy';

export const publicRoutes = [
  {
    path: 'products',
    element: <Product />,
  },
  {
    path: 'checkout',
    element: <Checkout />,
  },
  {
    path: 'contact-us',
    element: <Contact />,
  },
  {
    path: 'privacy',
    element: <Privacy />,
  },
];
