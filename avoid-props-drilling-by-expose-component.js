/*
Instead of import component and use inside component using component directly from App component by 
passing component through props.
This help avoid props drilling because all the component live inside App that helps
reducing number of descendants level 
 */

function App() {
  return (
    <div>
      <MainNav>
        <GitHubLogo />
        <SiteSearch />
        <NavLinks />
        <NotificationBell />
        <CreateDropdown />
        <ProfileDropdown />
      </MainNav>
      <Homepage
        leftNav={
          <LeftNav>
            <DashboardDropdown />
            <Repositories />
            <Teams />
          </LeftNav>
        }
        centerContent={
          <CenterContent>
            <RecentActivity />
            <AllActivity />
          </CenterContent>
        }
        rightContent={
          <RightContent>
            <Notices />
            <ExploreRepos />
          </RightContent>
        }
      />
    </div>
  )
}
function MainNav({children}) {
  return <div>{children}</div>
}
function Homepage({leftNav, centerContent, rightContent}) {
  return (
    <div>
      {leftNav}
      {centerContent}
      {rightContent}
    </div>
  )
}
function LeftNav({children}) {
  return <div>{children}</div>
}
function CenterContent({children}) {
  return <div>{children}</div>
}
function RightContent({children}) {
  return <div>{children}</div>
}