import React from 'react'
import { Link, Route } from '../router'

const Home = () => <h2>Home</h2>

const Main = () => <h2>Main</h2>

const Profile = ({ profile }) => <h3>{ profile }</h3>

const Profiles = ({ match }) => {
  const items = [
    { name: 'Tendai', slug: 'tendai' },
    { name: 'Admin', slug: 'admin' },
    { name: 'New user', slug: 'new-user' }
  ]

  return (
    <div>
      <h2>Profiles</h2>
      <ul>
        { items.map(({ name, slug }) => (
          <li key={name}>
            <Link to={`${match.url}/${slug}`}>{ name }</Link>
          </li>
        )) }
      </ul>

      { items.map(({ name, slug }) => (
        <Route
          key={name}
          path={`${match.path}/${slug}`}
          render={() => <Profile profile={name} />}
        />
      )) }

      <Route exact
        path={match.url}
        render={() => <h3>Please select a profile to view.</h3>}
      />
    </div>
  )
}


export { Home, Main, Profile, Profiles }
