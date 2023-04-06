class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  
  include Devise::JWT::RevocationStrategies::JTIMatcher
  devise :invitable, :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable, :invitable,
        :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :invitations, class_name: self.to_s, as: :invited_by
end
