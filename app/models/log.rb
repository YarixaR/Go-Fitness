class Log < ApplicationRecord
  belongs_to :user
  belongs_to :exercise

  validates :sets, :reps, presence: true 
end
