class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  # has_many :logs
  # has_many :exercises
end
