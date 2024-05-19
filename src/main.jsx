import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomeIndex from './pages/Home/HomeIndex.jsx'
import ProfileIndex from './pages/Profile/ProfileIndex.jsx'
import ProfileEdit from './pages/Profile/ProfileEdit.jsx'
import AppLayout from './layout/AppLayout.jsx'
import KonsultanChoice from './pages/Konsultasi/KonsultanChoice.jsx'
import ArtikelMenu from './pages/Artikel/ArtikelMenu.jsx'
import DiagnosticMenu from './pages/Diagnostic/DiagnosticMenu.jsx'
import Login from './pages/Login/Login.jsx'
import Aunthenthication from './pages/Login/Verifikasi.jsx'
import Verifikasi from './pages/Login/Verifikasi.jsx'
import ArtikelMenuNo1 from './pages/Artikel/ArtikelMenuNo1.jsx'
import ArtikelMenuNo2 from './pages/Artikel/ArtikelMenuNo2.jsx'
import ArtikelMenuNo3 from './pages/Artikel/ArtikelMenuNo3.jsx'
import ArtikelMenuNo4 from './pages/Artikel/ArtikelMenuNo4.jsx'
import MyInformation from './pages/Profile/FullInformation.jsx'
import Berita from './pages/news/ContohNews.jsx'
import Konsultasi from './pages/Konsultasi/Konsultasi.jsx'
import IdleHome from './pages/Konsultasi/bagian/IdleHome.jsx'
import KonsulAnonim from './pages/Konsultasi/KonsulAnonim.jsx'
import KotakIsi from './pages/KotakSaran/KotakIsi.jsx'
import Arigato from './pages/KotakSaran/arigato.jsx'
import Developer from './pages/Developer.jsx'
import TGB from './pages/Diagnostic/Tes2.jsx'
import Ekstrakurikuler from './pages/Diagnostic/Tes1.jsx'
import Passwd from './pages/Login/password.jsx'

const router = createBrowserRouter([
    {
        path: '/app',
        element: <AppLayout />,
        children: [
            {
                path: '',
                element: <HomeIndex />,
            },
            {
                path: 'Developer',
                element: <Developer />,
            },
            {
                path: 'kotaksaran',
                children: [
                    {
                        path: '',
                        element: <KotakIsi />,
                    },
                    {
                        path: 'Terimakasih',
                        element: <Arigato />,
                    },
                ],
            },
            {
                path: 'Artikel',
                children: [
                    {
                        path: '',
                        element: <ArtikelMenu />,
                    },
                    {
                        path: 'Kesehatan',
                        element: <ArtikelMenuNo1 />,
                    },
                    {
                        path: 'TipsAndTrick',
                        element: <ArtikelMenuNo2 />,
                    },
                    {
                        path: 'Berita',
                        element: <ArtikelMenuNo3 />,
                    },
                    {
                        path: 'OutdoorLearning',
                        element: <ArtikelMenuNo4 />,
                    },
                ],
            },
            {
                path: 'konsultasi',
                children: [
                    {
                        path: '',
                        element: <KonsultanChoice />,
                    },
                ],
            },
            {
                path: 'diagnostic',
                children: [
                    {
                        path: '',
                        element: <DiagnosticMenu />,
                    },
                    {
                        path: 'ekstra',
                        element: <Ekstrakurikuler />,
                    },
                    {
                        path: 'tesgayabelajar',
                        element: <TGB />,
                    },
                ],
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        element: <ProfileIndex />,
                    },
                    {
                        path: 'edit',
                        element: <ProfileEdit />,
                    },
                    {
                        path: 'informasi',
                        element: <MyInformation />,
                    },
                ],
            },
        ],
    },
    {
        path: '/verifikasi',
        children: [
            {
                path: '',
                element: <Verifikasi />,
            },
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
    {
        path: 'berita',
        element: <Berita />,
    },
    {
        path: 'konsultasi',
        children: [
            {
                path: '',
                element: <IdleHome />,
            },
            {
                path: 'chat',
                element: <Konsultasi />,
            },
            {
                path: 'chatanonim',
                element: <KonsulAnonim />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
