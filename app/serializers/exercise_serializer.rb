class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :bodyPart, :equipment, :gifURL, :name, :target

  has_many :logs
  has_many :users
end
