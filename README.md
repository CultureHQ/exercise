# Exercise

This is a small web app designed to house information about a company and its internal events. The objective is for you to fill in the analytics page so that admins can get a better sense of how many and which people are RSVPing to their events.

## Getting started

For this exercise, the backend is written in `Ruby` using the `Sinatra` framework. The frontend is written in `TypeScript` using `React`. You'll need to add code to both the backend and frontend to complete the analytics page.

### Backend

Ensure you have `ruby`, `bundler`, and `libsqlite3` installed on your system. Then,

* Run `bundle install` in the root of the repository to get the dependencies.
* Run `bundle exec rake db:seed` to load the seeded data into the sqlite3 database.
* Run `bundle exec rackup` to start the backend server.

### Frontend

Ensure you have `node` and `yarn` installed on your system. Then,

* Run `yarn install` in the root of the repository to get the dependencies.
* Run `yarn start` to start the frontend server.

## Development

Now that you're setup, you can start developing the analytics page. If you navigate to `http://localhost:8080`, you'll see the current app. You can then click on the Analytics link to see the shell of the page. There are three things that need to be filled in:

* Total number of events - this should be just a number inside the panel body
* Total number of RSVPs - this should be just a number inside the panel body, it should only include active users in its count
* RSVPs by department - this should be a list of the departments in the system, along with the number of RSVPs for each department. Only include active users in the counts of RSVPs, and only include departments that have active users.

Feel free to use any components from our [component library](https://github.com/CultureHQ/components). Any styling that you deem necessary can be added to `styles.css`. No additional packages or gems should be added to this application.

## Code style

Once development is done, make sure you code passes the following checks:

* `bundle exec reek` - for Ruby code design
* `bundle exec rubocop` - for Ruby code styling
* `bundle exec rake` - for Ruby tests
* `yarn lint` - for TS code styling
* `yarn test` for TS tests

## Submitting

Please then email us a copy of a patch file that contains you changes. You can obtain one by staging all the files that you've changed in git and then running `git diff` and sending us the output.
