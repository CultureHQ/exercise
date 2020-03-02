# frozen_string_literal: true

$:.unshift File.expand_path('lib', __dir__)
require 'setup'
require 'sinatra/base'

class App < Sinatra::Base
  set :server, 'puma'
  set :bind, '0.0.0.0'

  before do
    content_type 'application/json'
  end

  get '/users' do
    User.order(:id).to_json
  end

  get '/events' do
    Event.order(:created_at).to_json
  end

  run!
end
