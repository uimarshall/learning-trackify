class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :created_at
  has_many :enrolments
  has_many :courses, through: :enrolments
end
