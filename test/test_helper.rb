# frozen_string_literal: true

require 'simplecov'

SimpleCov.start do
  enable_coverage :branch
end

ENV['APP_ENV'] = 'test'

$LOAD_PATH.unshift File.expand_path(File.join('..', 'lib'), __dir__)
require 'app'

require 'minitest/autorun'
