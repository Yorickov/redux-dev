class Task < ApplicationRecord
  validates :state, inclusion: {
    in: %w[active finished],
    message: "%{value} is not a valid value"
  }
end
