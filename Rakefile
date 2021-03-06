# frozen_string_literal: true

require 'rake/testtask'

Rake::TestTask.new(:test) do |t|
  t.libs << 'test'
  t.libs << 'lib'
  t.test_files = FileList['test/**/*_test.rb']
end

task default: :test

$LOAD_PATH.unshift File.expand_path('lib', __dir__)
require 'setup'

# rubocop:disable Metrics/BlockLength
namespace :db do
  desc 'Seed the database'
  task :seed do
    ActiveRecord::Schema.define do
      create_table :departments, force: true do |t|
        t.string :name
        t.timestamps
      end

      create_table :users, force: true do |t|
        t.references :department
        t.boolean :active, null: false, default: true
        t.string :name, null: false
        t.timestamps
      end

      create_table :events, force: true do |t|
        t.references :host
        t.string :name, null: false
        t.datetime :starts_at, null: false
        t.datetime :ends_at, null: false
        t.timestamps
      end

      create_table :rsvps, force: true do |t|
        t.references :event
        t.references :user
        t.integer :response_type
        t.timestamps
      end
    end

    Department.create!(
      [
        { name: 'Admin' },
        { name: 'Sales' },
        { name: 'Accounting' },
        { name: 'Shipping' },
        { name: 'Customer Service' }
      ]
    )

    departments = Department.all.index_by(&:name)

    User.create!(
      [
        { name: 'Michael Scott', department: departments['Admin'] },
        { name: 'Pam Beesley', department: departments['Admin'] },
        { name: 'Jim Halpert', department: departments['Sales'] },
        { name: 'Dwight Schrute', department: departments['Sales'] },
        { name: 'Angela Martin', department: departments['Accounting'] },
        { name: 'Andy Bernard', department: departments['Sales'] },
        { name: 'Kevin Malone', department: departments['Accounting'] },
        {
          name: 'Roy Anderson',
          department: departments['Shipping'],
          active: false
        },
        { name: 'Kelly Kapoor', department: departments['Customer Service'] },
        { name: 'Ryan Howard', department: departments['Customer Service'] }
      ]
    )

    users = User.all.index_by(&:name)

    Event.create!(
      [
        {
          host: users['Michael Scott'],
          name: 'Dundies 2019',
          starts_at: Date.parse('Nov 15 2019 6pm'),
          ends_at: Date.parse('Nov 15 2019 9pm')
        }, {
          host: users['Angela Martin'],
          name: 'Thanksgiving 2019',
          starts_at: Date.parse('Nov 22 2019 6pm'),
          ends_at: Date.parse('Nov 22 2019 9pm')
        }, {
          host: users['Angela Martin'],
          name: 'Holiday Party 2019',
          starts_at: Date.parse('Dec 20 2019 6pm'),
          ends_at: Date.parse('Dec 20 2019 9pm')
        }, {
          host: users['Dwight Schrute'],
          name: 'Self-Defense Class',
          starts_at: Date.parse('Jan 15 2020 12pm'),
          ends_at: Date.parse('Jan 15 2020 1pm')
        }, {
          host: users['Kevin Malone'],
          name: 'Band Practice',
          starts_at: Date.parse('Jan 16 2020 4:30pm'),
          ends_at: Date.parse('Jan 16 2020 5:30pm')
        }
      ]
    )

    events = Event.order(created_at: :asc).index_by(&:name)

    events.values.first(4).each do |event|
      event.rsvps.create!(
        users.values.map { |user| { user: user, response_type: 'accepted' } }
      )
    end

    events['Band Practice'].rsvps.create!(
      [
        { user: users['Andy Bernard'], response_type: 'accepted' },
        { user: users['Kevin Malone'], response_type: 'accepted' },
        { user: users['Angela Martin'], response_type: 'interested' }
      ]
    )

    Rsvp.where(user: users['Ryan Howard']).update_all(response_type: 'declined')
    Rsvp.where(user: users['Kelly Kapoor']).update_all(response_type: 'invited')
  end
end
# rubocop:enable Metrics/BlockLength
