import { GiBrokenArrow } from 'react-icons/gi'
import { Link } from 'react-router-dom'
function ErrorPage() {
    return (
        <div>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="ml-[600px] text-3xl font-semibold text-black-600"><GiBrokenArrow /></p>
                    <h1 className="mt-4 ml-80 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 ml-80 text-base leading-7 text-gray-600">No pudimos encontrar la pagina que estabas buscando.</p>
                    <div className="mt-10 ml-60 flex items-center justify-center gap-x-6">
                    <Link to="/home"
                            className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-grey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600"
                        >
                            Volver al home
                        </Link>
                        <Link to="http://skavenger.byethost8.com/homerswebpage/?i=1" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default ErrorPage
