# frozen_string_literal: true

$:.unshift File.expand_path('lib', __dir__)
require 'setup'

namespace :db do
  desc 'Seed the development database'
  task :seed do
    ActiveRecord::Schema.define do
      create_table :users, force: true do |t|
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

    User.create!([
      { name: 'Michael Scott' },
      { name: 'Pam Beesley' },
      { name: 'Jim Halpert' },
      { name: 'Dwight Schrute' },
      { name: 'Angela Martin' },
      { name: 'Andy Bernard' },
      { name: 'Kevin Malone' },
      { name: 'Roy Anderson', active: false },
      { name: 'Kelly Kapoor' },
      { name: 'Ryan Howard' }
    ])

    hosts = User.all.index_by(&:name)

    Event.create!([
      {
        host: hosts['Michael Scott'],
        name: 'Dundies 2019',
        starts_at: Date.parse('Nov 15 2019 6pm'),
        ends_at: Date.parse('Nov 15 2019 9pm')
      }, {
        host: hosts['Angela Martin'],
        name: 'Thanksgiving 2019',
        starts_at: Date.parse('Nov 22 2019 6pm'),
        ends_at: Date.parse('Nov 22 2019 9pm')
      }, {
        host: hosts['Angela Martin'],
        name: 'Holiday Party 2019',
        starts_at: Date.parse('Dec 20 2019 6pm'),
        ends_at: Date.parse('Dec 20 2019 9pm')
      }, {
        host: hosts['Dwight Schrute'],
        name: 'Self-Defense Class',
        starts_at: Date.parse('Jan 15 2020 12pm'),
        ends_at: Date.parse('Jan 15 2020 1pm')
      }, {
        host: hosts['Kevin Malone'],
        name: 'Band Practice',
        starts_at: Date.parse('Jan 16 2020 4:30pm'),
        ends_at: Date.parse('Jan 16 2020 5:30pm')
      }
    ])
  end
end
