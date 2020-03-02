# frozen_string_literal: true

class Event < ApplicationRecord
  belongs_to :host, class_name: 'User'

  has_many :rsvps, dependent: :destroy
end
