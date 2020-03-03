# Exercise

## Getting started

### Backend

Ensure you have `ruby`, `bundler`, and `libsqlite3` installed on your system. Then,

* Run `bundle install` in the root of the repository to get the dependencies.
* Run `bundle exec rake db:seed` to load the seeded data into the sqlite3 database.
* Run `bundle exec rackup` to start the backend server.

### Frontend

Ensure you have `node` and `yarn` installed on your system. Then,

* Run `yarn install` in the root of the repository to get the dependencies.
* Run `yarn start` to start the frontend server.

## Code style

Make sure you code passes the following checks:

* `bundle exec reek` - for Ruby code design
* `bundle exec rubocop` - for Ruby code styling
* `yarn lint` - for TS code styling
