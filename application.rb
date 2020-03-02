#!/usr/bin/env ruby
# frozen_string_literal: true

require 'bundler/setup'
require 'sinatra/base'
require 'sqlite3'

class Database
  attr_reader :connection

  def initialize
    @connection = SQLite3::Database.new(':memory:')

    DATA.read.split(';')[0...-1].each do |query|
      connection.execute(query)
    end
  end

  def self.instance
    @instance ||= new
  end

  private

  def execute(query, binds)
    return connection.execute(query) if binds.empty?

    statement = connection.prepare(query)
    statement.execute(binds)
  end
end

class Application < Sinatra::Base
  set :server, 'puma'
  set :bind, '0.0.0.0'

  get '/' do
    send_file('index.html')
  end

  run!
end

__END__
CREATE TABLE orgs (
  id INTEGER,
  name VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INTEGER,
  org_id INTEGER,
  active BOOLEAN NOT NULL,
  name VARCHAR(255),
  PRIMARY KEY(id)
);

INSERT INTO orgs(name) VALUES
  ("Parks and Recreation"),
  ("Dunder Mifflin");

INSERT INTO users(org_id, active, name) VALUES
  (1, 1, "Leslie Knope"),
  (1, 1, "Ron Swanson"),
  (1, 1, "April Ludgate"),
  (1, 1, "Andy Dwyer"),
  (1, 1, "Ben Wyatt"),
  (1, 1, "Tom Haverford"),
  (1, 1, "Donna Meagle"),
  (1, 0, "Jerry Gergich"),
  (2, 1, "Michael Scott"),
  (2, 1, "Pam Beesley"),
  (2, 1, "Jim Halpert"),
  (2, 1, "Dwight Schrute"),
  (2, 1, "Angela Martin"),
  (2, 1, "Andy Bernard"),
  (2, 1, "Kevin Malone"),
  (2, 0, "Roy Anderson"),
  (2, 1, "Kelly Kapoor"),
  (2, 1, "Ryan Howard");
