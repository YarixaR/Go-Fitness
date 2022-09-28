class User < ApplicationRecord
    has_many :logs
    has_many :exercises, through: :logs

    validates :email, uniqueness: true, presence: true
    validates :password, length: { in: 4..8 }, presence: true
    
    has_secure_password
end
