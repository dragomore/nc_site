import '../shared/styles/variables.css'

import { Deadlines } from 'pages/Deadlines/Deadlines'
import { NotFound } from 'pages/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from 'shared/routes/appRoutes'
import { Header } from 'widgets/Header/Header'
import { Sidebar } from 'widgets/Sidebar/Sidebar'

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="App_Content">
        <Header />
        <Routes>
          <Route path={AppRoutes.DEADLINES} element={<Deadlines />} />
          <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
