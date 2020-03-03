# frozen_string_literal: true

require 'bundler/setup'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.logger = Logger.new(STDOUT)
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'development.sqlite3'
)

require 'application_record'
require 'user'
require 'event'
require 'rsvp'
