class LogSerializer < ActiveModel::Serializer
  attributes :id, :sets, :reps, :weight
  # has_one :user
  # has_one :exercise
end
