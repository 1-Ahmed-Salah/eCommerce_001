// react router
import { createBrowserRouter, RouterProvider } from 'react-router';
// layout
import { MainLayout } from '@layouts/index';
// pages
import About from '@pages/About';
import Home from '@pages/Home';
import Products from '@pages/Products';
import Categories from '@pages/Categories';
import Error from '@pages/Error';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'products/:prefix',
                element: <Products />,
                loader: ({ params }) => {
                    if(typeof params.prefix !== 'string' || !/^[a-z]+$/i.test(params.prefix)) {
                        throw new Response('Bad Request', {
                            statusText: 'Category not found',
                            status: 400
                        })
                    }

                    return true;
                }
            },
            {
                path: 'Categories',
                element: <Categories/>
            }
        ]
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter;