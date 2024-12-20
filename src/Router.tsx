import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home, IssueInfo } from './pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue-info/:issueId" element={<IssueInfo />} />
      </Route>
    </Routes>
  )
}
