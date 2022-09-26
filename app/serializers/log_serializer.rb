class LogSerializer < ActiveModel::Serializer
  attributes :id, :sets, :reps, :weight, :user_id, :exercise_id
  # has_one :user
  has_one :exercise
end
