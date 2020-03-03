# frozen_string_literal: true

class User < ApplicationRecord
  has_many :rsvps, dependent: :destroy

  scope :active, -> { where(active: true) }
end